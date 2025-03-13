import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { API } from "./lib/api";
import { SignInSchema } from "./lib/validations";

const message = "Invalid Crendentials, Please check your email and password";
export class InvalidLoginError extends CredentialsSignin {
  code: string = message;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const validate = SignInSchema.safeParse(credentials);
        if (validate.success) {
          const { email, password } = validate.data;

          const { data, success } = await API.users.getUserByEmail(email);
          if (!success) throw new InvalidLoginError();

          const enteredPassword = password;
          if (enteredPassword === data.password)
            return {
              id: data._id,
              name: data.name,
              email: data.email,
            };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) token.sub = user.id;

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
});
