import { Note } from './note';

export class List{
  constructor(public id: Number,
              public title: String,
              public notes: Note[],
              public position: Number){};
}
