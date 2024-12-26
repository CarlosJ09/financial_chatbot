import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const createUser = async (data: User) => {
  const user = await prisma.user.create({ data });
  return user;
};

const updateUser = async (id: string, data: User) => {
  const user = await prisma.user.update({ where: { id }, data });
  return user;
};

const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({ where: { id } });
  return user;
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
