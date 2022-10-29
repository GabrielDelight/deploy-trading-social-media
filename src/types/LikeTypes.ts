export interface LikeTyepes {
  id: number | string;
  avatar: string;
  firstname: string;
  lastname: string;
  isVerified: boolean;
  nickname: string;
  fullname?: string;
  callerId: number | string;
  date: string;
}
