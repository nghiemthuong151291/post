import { IsNumber, IsString } from "class-validator";

export class PostDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  userName: string;

  @IsString()
  content: string;
}


export class PostResolverDto  {
  data: PostDto;

  @IsNumber()
  status: number;

  @IsString()
  message: string;
}

export class PostOption  {
  query?: string;

  @IsNumber()
  limit: number;

  @IsNumber()
  page: number;
}