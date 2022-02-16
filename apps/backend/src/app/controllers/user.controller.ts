import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import {
  CreateUserInput,
  ForgetUserInput,
  ResetPasswordInput,
  VerifyUserInput,
} from '../schema/user.schema';
import {
  createUser,
  findUserByEmail,
  findUserById,
} from '../service/user.service';
import { log } from '../utils/logger.util';

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

export async function forgotPasswordHandler(
  req: Request<{}, {}, ForgetUserInput>,
  res: Response
) {
  try {
    const { email } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      log.debug(`User with email: ${email} does not exists`);
    }
    if (!user.verified) {
      log.debug(`User is not verified`);
    }

    const paasswordResetCode = nanoid();

    user.passwordResetCode = paasswordResetCode;

    await user.save();

    return res.send(
      'if a user with that email is registered you will receive a password reset email'
    );
  } catch (e: any) {
    throw new Error(e.errors);
  }
}

export async function resetPasswordHandler(
  req: Request<ResetPasswordInput['params'], {}, ResetPasswordInput['body']>,
  res: Response
) {
  const { id, passwordResetCode } = req.params;

  const { password } = req.body;

  const user = await findUserById(id);

  if (
    !user ||
    !user.passwordResetCode ||
    user.passwordResetCode !== passwordResetCode
  ) {
    return res.status(400).send('Could not reset user password');
  }

  user.passwordResetCode = null;

  user.password = password;

  await user.save();

  return res.send('Successfully updated password');
}
