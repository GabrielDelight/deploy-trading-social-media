export type ChatDataTypes = {
  id: string | number;
  isSender: boolean;
  chatType: string;
  isLiked: boolean;
  ownerAvatar: string;
  senderId: string | number;
  receiverId: string | number;
  caption: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  imageLength: number;
  poster: string;
  video: string;
  audio: string;
  audioTimer: string | number;
  senderName: string;
  receiverName: string;
  hasReply: boolean;
  fileType?: string;
  date: string | number;
  storyData:
    | {
        id: string | any;
        image: string | any;
        storyCaption: string | any;
        storyType: string | any;
      }
    | undefined;
};
