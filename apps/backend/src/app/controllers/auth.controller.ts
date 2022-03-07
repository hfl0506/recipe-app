import { Request, Response, NextFunction } from 'express';
import { UserLoginInput } from '../schema/auth.schema';
import { findUserByEmail, findUserById } from '../service/user.service';
import * as argon2 from 'argon2';
import {
  buildTokens,
  clearTokens,
  omitUserField,
  privateFields,
  refreshTokens,
  setTokens,
  verifyRefreshToken,
} from '../utils/jwt.util';
import { Cookies } from '../enum/jwt.enum';

export const userLoginHanlder = async (
  req: Request<{}, {}, UserLoginInput>,
  res: Response
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

export const userRefreshHandler = async (req: Request, res: Response) => {
  try {
    const current = verifyRefreshToken(req.cookies[Cookies.REFRESH]);
    const user = await findUserById(current.userId);
    if (!user) throw 'User not found';
    const { accessToken, refreshToken } = refreshTokens(current, user);
    setTokens(res, accessToken, refreshToken);
    res.send(user);
  } catch (error) {
    clearTokens(res);
  }
};

export const userLogoutHandler = async (req: Request, res: Response) => {
  try {
    clearTokens(res);
    res.end();
  } catch (error) {
    throw new Error(error);
  }
};

export const userGetMeHandler = async (req: Request, res: Response) => {
  try {
    const user = await findUserById(res.locals.token.userId);
    const omitUser = omitUserField(user, privateFields);
    res.json(omitUser);
  } catch (error) {
    throw new Error();
  }
};
