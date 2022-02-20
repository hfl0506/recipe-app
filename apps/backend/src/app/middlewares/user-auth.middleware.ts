import { Response, Request, NextFunction } from 'express';

const userAuth = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  if (!user) return res.sendStatus(403);

  return next();
};

export default userAuth;
