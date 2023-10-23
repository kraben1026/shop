import { IsNotEmpty, IsString,} from "class-validator";

export class SellItemDto {
    @IsNotEmpty()
    Name: string;
    @IsNotEmpty()
    Price: number;
    @IsNotEmpty()
    url: string;
    @IsNotEmpty()
    user_id: number
  }