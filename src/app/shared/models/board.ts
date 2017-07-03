import { List } from './list';

export class Board{
  constructor(
    public id: Number,
    public title: String,
    public lists: List[]
  ){};
}
