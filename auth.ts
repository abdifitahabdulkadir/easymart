import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { SignInSchema } from "./lib/validations";

// const message = "Invalid Crendentials, Please check your email and password";
// class InvalidLoginError extends CredentialsSignin {
//   constructor(public code: string) {
//     super(code);
//   }
// }

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
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

          const { data, success } = await fetch(`${baseUrl}/api/users/email`, {
            method: "POST",
            body: JSON.stringify(email),
          }).then((res) => res.json());
          if (!success) return null;

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
