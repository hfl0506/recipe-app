export enum privateKeyEnum {
  access = 'accessTokenPrivateKey',
  refresh = 'refreshTokenPrivateKey',
}

export enum publicKeyEnum {
  access = 'accessTokenPublicKey',
  refresh = 'refreshTokenPublicKey',
}

export enum TokenExpiration {
  Access = 5 * 60,
  Refresh = 7 * 24 * 60 * 60,
  RefreshIfLessThan = 4 * 24 * 60 * 60,
}

export enum Cookies {
  ACCESS = 'access',
  REFRESH = 'refresh',
}
