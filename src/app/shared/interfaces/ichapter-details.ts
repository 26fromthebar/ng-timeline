export interface IChapterDetails {
  id: number;
  chapterId: number;
  orderIndex: number;
  title: string;
  mainText?: string;
  secondaryText?: string;
  backgroundImgUrl?: string;
  imagesSrc?: string[];
  videosSrc?: string[];
}
