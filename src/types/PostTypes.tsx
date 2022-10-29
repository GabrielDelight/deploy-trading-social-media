export interface PostTypes {
  fullScreen?: boolean;
  avatar?: string;
  alt?: string;
  id?: number | string;
  fullName?: string;
  isVerified?: boolean;
  firstname?: string;
  lastname?: string;
  username?: string;
  ownerId?: string | number;
  postType?: string;
  likeLength?: number | string;
  commentLength?: string | number;
  sharedLength?: number | string;
  caption: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  imageLength?: any;
  viewsCount?: string | number;
  date?: string;
  isShared?: boolean;
  onHandleNotInterested?: any;
  video?: string;
  isLiked?: boolean;
  hasSlider?: boolean
}
