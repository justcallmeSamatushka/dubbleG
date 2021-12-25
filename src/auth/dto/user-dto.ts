import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserDto {
  
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
  readonly password: string;

  readonly name?: string;
}