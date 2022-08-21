import { prisma } from "./prisma";

export interface User {
  id?: number;
  name: string;
  email: string;
  password_hash: string;
  is_admin?: boolean;
  patrimony?: [Patrimony];
}

export interface Patrimony {
  name: string;
  cod: string;
  note?: string;
  details?: string;
  url?: string;
  owner: string;
  userId: number;
}
//////////////////////////////////////////////

export async function getAllUsers() {
  const allUsers = await prisma.user.findMany({
    include: {
      patrimony: true,
    },
  });
  return allUsers;
}

export async function getUser(id: number) {
  const data = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      patrimony: true,
    },
  });
  return data;
}

export async function verifyUser(
  id: number,
  name: string,
  email: string,
  is_admin: boolean
) {
  const data = await prisma.user.findFirst({
    where: {
      id,
      name,
      email,
      is_admin,
    },
  });
  return data;
}

export async function getUserEmail(email: string) {
  const data = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return data;
}
export async function createUser(data: User) {
  await prisma.user.create({
    data,
  });
}

export async function updateUser(id: number, data: User) {
  await prisma.user.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteUser(id: number) {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}

//////////////////////////////////////////////////

export async function getAllPatrimonies() {
  const data = await prisma.patrimony.findMany();
  return data;
}

export async function getPatrimony(id: number) {
  const data = await prisma.patrimony.findFirst({
    where: {
      id,
    },
  });
  return data;
}

export async function createPatrimony(data: Patrimony) {
  const patrimony = await prisma.patrimony.create({
    data,
  });
  return patrimony;
}

export async function updatePatrimony(id: number, data: Patrimony) {
  await prisma.patrimony.update({
    where: {
      id,
    },
    data,
  });
}

export async function deletePatrimony(id: number) {
  await prisma.patrimony.delete({
    where: {
      id,
    },
  });
}
