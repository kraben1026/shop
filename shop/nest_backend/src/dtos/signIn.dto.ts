import { Length } from "class-validator";

export class signInDto{
    username: string;
    @Length(4, 16)
    password:string;
}