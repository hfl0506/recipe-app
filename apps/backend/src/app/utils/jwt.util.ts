import * as jwt from 'jsonwebtoken';
import { privateKeyEnum, publicKeyEnum } from '../enum/jwt.enum';

export function signJwtToken(
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
