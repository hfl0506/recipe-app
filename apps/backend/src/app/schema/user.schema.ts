import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
    firstName: string({
      required_error: 'FirstName is required',
    }),
    lastName: string({
      required_error: 'LastName is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password is too short - should be more than or equal 6 chars'),
    passwordConfirmation: string({
      required_error: 'Password confirmation is required',
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password do not match',
    path: ['passwordConfirmation'],
  }),
});

export const verifyUserSchema = object({
  params: object({
    id: string({
      required_error: 'id is required',
    }),
    verificationCode: string({
      required_error: 'verification is required',
    }),
  }),
});

export const forgetUserSchema = object({
  body: object({
    email: string({
      required_error: 'email is required',
    }).email('Not a valid email'),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>['body'];
export type VerifyUserInput = TypeOf<typeof verifyUserSchema>['params'];
export type ForgetUserInput = TypeOf<typeof forgetUserSchema>['body'];
