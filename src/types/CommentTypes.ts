export interface CommentTypes {
  id: number | string;
  avatar: string;
  firstname: string;
  lastname: string;
  isVerified: boolean;
  nickname: string;
  fullname?: string;
  caption: string;
  callerType: string;
  isLiked: boolean;
}
