import UserModel from '../models/user.model';

export async function createUser(dto: any) {
  try {
    return await UserModel.create(dto);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findUserById(id: string) {
  try {
    return await UserModel.findById(id);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findUserByEmail(email: string) {
  try {
    return await UserModel.findOne({ email });
  } catch (e: any) {
    throw new Error(e);
  }
}
