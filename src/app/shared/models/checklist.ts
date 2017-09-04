import { Todo } from "./todo";

export class Checklist {
  constructor(
    public title: string,
    public items: Todo[]){}
}
