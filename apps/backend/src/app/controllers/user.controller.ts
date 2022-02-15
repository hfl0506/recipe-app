import { Request, Response } from 'express';
import { CreateUserInput, VerifyUserInput } from '../schema/user.schema';
import { createUser, findUserById } from '../service/user.service';

export async function createUserHanlder(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;
  try {
    const user = await createUser(body);
    return res.status(201).json(user);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function verifyUserHandler(
  req: Request<VerifyUserInput>,
  res: Response
) {
  try {
    const { id, verificationCode } = req.params;
    const user = await findUserById(id);
    if (!user) return res.send('Verify user failure');
    if (user.verified) return res.send('User Verified');
    if (user.verificationCode === verificationCode) {
      user.verified = true;
      await user.save();
      return res.send('User verified successfully');
    }
    return res.send('Verify user failure');
  } catch (e) {
    throw new Error(e);
  }
}
