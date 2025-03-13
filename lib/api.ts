const BASE_URL = process.env.BASE_URL as string;
export const API = {
  users: {
    async getUserByEmail(email: string) {
      return await fetch(`${BASE_URL}/api/users/email`, {
        method: "POST",
        body: JSON.stringify(email),
      }).then((res) => res.json());
    },
  },
};
