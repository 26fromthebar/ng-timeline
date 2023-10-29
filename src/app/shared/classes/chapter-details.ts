import { IChapterDetails } from '../interfaces/ichapter-details';

export class ChapterDetails implements IChapterDetails {
  chapterId!: number;
  chapterTitle!: string;
  orderIndex!: number;
  title!: string;
  mainText?: string | undefined;
  secondaryText?: string | undefined;
  backgroundImgUrl?: string | undefined;
  imagesSrc?: string[] | undefined;
  videosSrc?: string[] | undefined;
  id!: number;
}
