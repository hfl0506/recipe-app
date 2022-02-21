import * as jwt from 'jsonwebtoken';
import { DocumentType } from '@typegoose/typegoose';
import { omit } from 'lodash';
import { ObjectId, Types } from 'mongoose';
import { User } from '../models/user.model';
import { CookieOptions, Response } from 'express';
import { Cookies, TokenExpiration } from '../enum/jwt.enum';

interface RefreshToken {
  userId: string;
  exp: number;
}

interface AccessToken extends RefreshToken {
  firstName: string;
  lastName: string;
}

export const privateFields: string[] = [
  'password',
  '__v',
  'verificationCode',
  'passwordResetCode',
  'verified',
];

const isProduction = process.env.NODE_ENV! === 'production' ?? false;

const defaultCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: isProduction ?? false,
  sameSite: isProduction ? 'strict' : 'lax',
  domain: process.env.BASE_DOMAIN,
  path: '/',
};

const refreshTokenCookieOptions: CookieOptions = {
  ...defaultCookieOptions,
  maxAge: TokenExpiration.Refresh * 1000,
};

const accessTokenCookieOptions: CookieOptions = {
  ...defaultCookieOptions,
  maxAge: TokenExpiration.Access * 1000,
};

export function omitUserField(user: DocumentType<User>, field: string[]) {
  return omit(user.toJSON(), field);
}

function signJwtToken(
  object: Object,
  key: string,
  options?: jwt.SignOptions | undefined
) {
  //const signKey = Buffer.from(key, 'base64').toString('ascii');
  return jwt.sign(object, key, {
    ...(options && options),
  });
}

export function verifyAccessToken(token: string): AccessToken {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as AccessToken;
  } catch (e: any) {
    return null;
  }
}

export function verifyRefreshToken(token: string): RefreshToken {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET) as RefreshToken;
  } catch (e: any) {
    return null;
  }
}

function signAccessToken(user: DocumentType<User>) {
  const payload = omitUserField(user, privateFields);
  console.log(payload);
  const accessToken = signJwtToken(payload, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: TokenExpiration.Access,
  });

  return accessToken;
}

function signRefreshToken({ userId }: { userId: ObjectId }) {
  const refreshToken = signJwtToken(
    { session: userId },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: TokenExpiration.Refresh,
    }
  );
  return refreshToken;
}

export function setTokens(res: Response, access: string, refresh?: string) {
  res.cookie(Cookies.ACCESS, access, accessTokenCookieOptions);
  if (refresh) res.cookie(Cookies.REFRESH, refresh, refreshTokenCookieOptions);
}

export function buildTokens(user: DocumentType<User>) {
  const at = signAccessToken(user);
  const rt = signRefreshToken(user._id);
  return {
    at,
    rt,
  };
}

export function clearTokens(res: Response) {
  res.cookie(Cookies.ACCESS, '', { ...defaultCookieOptions, maxAge: 0 });
  res.cookie(Cookies.REFRESH, '', { ...defaultCookieOptions, maxAge: 0 });
}

export function refreshTokens(current: RefreshToken, user: DocumentType<User>) {
  let refreshPayload;
  const expiration = new Date(current.exp * 1000);
  const now = new Date();
  const secondUntilExpiration = (expiration.getTime() - now.getTime()) / 1000;

  if (secondUntilExpiration < TokenExpiration.RefreshIfLessThan) {
    refreshPayload = { userId: current.userId, exp: TokenExpiration.Refresh };
  }
  const accessToken = signAccessToken(user);
  const refreshToken = refreshPayload && signRefreshToken(refreshPayload);
  return { accessToken, refreshToken };
}
