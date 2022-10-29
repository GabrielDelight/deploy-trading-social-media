export interface ReplyTypes {
  id: number | string;
  avatar: string;
  firstname: string;
  lastname: string;
  isVerified: boolean;
  username: string;
  fullname?: string;
  caption: string;
  commentId: number | string;
  repliedLength: number | string;
  date: string;
  isLiked: boolean;
}
