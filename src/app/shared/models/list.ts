import { Note } from './note';
import { Board } from './board';

export class List{
  constructor(public id: Number,
              public title: string,
              public notes: Note[],
              public position: Number,
              public boardId: Number){};
}
