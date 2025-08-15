export class UserLocationDto {
  lat: number;
  lng: number;
}

export class UserInfoReqDto {
  ages: number;
  gender: string;
  group: string;
  rate: number;
}

export class CreateUserDto {
  user_location: UserLocationDto;
  user_info: UserInfoReqDto;
}