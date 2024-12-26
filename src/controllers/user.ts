import { handleHttp } from "@/utils/error-handler";
import { Request, Response } from "express";
import * as Services from "@/services/user";

const getUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = await Services.getUser(id);

    res.send(user);
  } catch (e) {
    handleHttp(res.status(500), "ERROR_GET_USER", e);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Services.getUsers();

    res.send(users);
  } catch (e) {
    handleHttp(res.status(500), "ERROR_GET_USERS", e);
  }
};

const createUser = ({ body }: Request, res: Response) => {
  try {
    const user = Services.createUser(body);

    res.send(user);
  } catch (e) {
    handleHttp(res.status(500), "ERROR_CREATE_USER", e);
  }
};

const updateUser = ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params;
    const user = Services.updateUser(id, body);

    res.send(user);
  } catch (e) {
    handleHttp(res.status(500), "ERROR_UPDATE_USER", e);
  }
};

const deleteUser = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    Services.deleteUser(id);

    res.send({ message: "User deleted" });
  } catch (e) {
    handleHttp(res.status(500), "ERROR_DELETE_USER", e);
  }
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
