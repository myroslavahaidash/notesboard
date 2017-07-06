import { List } from './list';

export class Board{
  constructor(
    public id: Number,
    public title: String,
    public lists: List[],
    private currentNoteId: number = 0
  ){};

  getCurrentNoteId(): number {
    return this.currentNoteId ++;
  }
}
