import { List } from './list';

export class Board{
  constructor(
    public id: Number,
    public title: string,
    public lists: List[],
    public currentNoteId: number = 0,
    public currentListId: number = 0
  ){};
}
