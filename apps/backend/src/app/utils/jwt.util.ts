import * as jwt from 'jsonwebtoken';
import { DocumentType } from '@typegoose/typegoose';
import { omit } from 'lodash';
import { ObjectId } from 'mongoose';
import { User } from '../models/user.model';
import { CookieOptions, Response } from 'express';
import {
  Cookies,
  privateKeyEnum,
  publicKeyEnum,
  TokenExpiration,
} from '../enum/jwt.enum';

const privateFields: string[] = [
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

function signJwtToken(
  object: Object,
  key: privateKeyEnum,
  options?: jwt.SignOptions | undefined
) {
  const signKey = Buffer.from(key, 'base64').toString('ascii');
  return jwt.sign(object, signKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
}

export function verifyJwt<T>(token: string, key: publicKeyEnum): T | null {
  const publicKey = Buffer.from(key, 'base64').toString('ascii');

  try {
    const decoded = jwt.verify(token, publicKey) as T;
    return decoded;
  } catch (e: any) {
    return null;
  }
}

function signAccessToken(user: DocumentType<User>) {
  const payload = omit(user.toJSON(), privateFields);

  const accessToken = signJwtToken(payload, privateKeyEnum.refresh, {
    expiresIn: TokenExpiration.Access,
  });

  return accessToken;
}

function signRefreshToken({ userId }: { userId: ObjectId }) {
  const refreshToken = signJwtToken(
    { session: userId },
    privateKeyEnum.refresh,
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
