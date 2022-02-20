import { TypeOf, object, string } from 'zod';

export const userLoginSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Invalid email'),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Minium 6 chars of password'),
  }),
});

export type UserLoginInput = TypeOf<typeof userLoginSchema>['body'];
