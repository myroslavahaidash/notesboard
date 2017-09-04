import { Checklist } from "./checklist";

export class Note{
  constructor(
    public id: Number,
    public title: String,
    public description: String,
    public checklists: Checklist[],
    public position: Number,
    public listId: Number
  ){};
}
