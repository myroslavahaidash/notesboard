import { List } from './list';

export class Board{
  constructor(
    public id: Number,
    public title: string,
    public lists: List[]
  ){};
}
