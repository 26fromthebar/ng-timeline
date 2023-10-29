import { IChapterSlim } from '../interfaces/ichapter-slim';

export class ChapterSlim implements IChapterSlim {
  id!: number;
  orderIndex!: number;
  title!: string;
  url: string | undefined;
}
