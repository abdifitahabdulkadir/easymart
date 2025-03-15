import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismaClient from "./lib/prisma";
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
          const { email, password: enteredPassword } = validate.data;
          const user = await prismaClient.user.findFirst({
            where: {
              email: String(email),
            },
          });
          if (!user) throw new InvalidLoginError();
          if (enteredPassword === user.password)
            return {
              id: user.id,
              name: user?.name ?? "",
              email: user.email,
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
