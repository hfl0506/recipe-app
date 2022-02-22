import { Types } from 'mongoose';

export interface UserDocument {
  _id: Types.ObjectId;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ReactProps {
  children: JSX.Element;
}
