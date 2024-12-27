import { User } from "@prisma/client";
import prisma from "@@prisma/client";

const login = async () => {};

const registerNewUser = async (payload: User) => {
  const userAlreadyExists = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (userAlreadyExists) {
    throw new Error("User already exists");
  }

  const user = await prisma.user.create({ data: payload });

  return user;
};

export { login, registerNewUser };
