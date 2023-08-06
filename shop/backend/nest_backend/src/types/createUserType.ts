import { Length } from 'class-validator';

export class CreateUserType {
    username: string;

    @Length(4, 10)
    password: string;
}