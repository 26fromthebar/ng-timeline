export interface IChapterDetails {
  id: number;
  chapterId: number;
  chapterTitle: string;
  orderIndex: number;
  title: string;
  mainText?: string;
  secondaryText?: string;
  backgroundImgUrl?: string;
  imagesSrc?: string[];
  videosSrc?: string[];
  nextPageUrl?: string;
  previousPageUrl?: string;
}
