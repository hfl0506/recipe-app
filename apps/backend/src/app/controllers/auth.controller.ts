import { Request, Response, NextFunction } from 'express';
import { UserLoginInput } from '../schema/auth.schema';
import { findUserByEmail } from '../service/user.service';
import * as argon2 from 'argon2';
import { buildTokens, setTokens } from '../utils/jwt.util';

export const userLoginHanlder = async (
  req: Request<{}, {}, UserLoginInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    console.log(user);
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) throw new Error('Password invalid');

    const { at, rt } = buildTokens(user);
    setTokens(res, at, rt);
    res.status(200).json({ accessToken: at, RefreshToken: rt });
  } catch (error) {
    throw new Error(error);
  }
};
