import { Board } from "./models/board";
import { List } from "./models/list";
import { Note } from "./models/note";

export const boards = [
  {
    id: 1,
    title: "Welcome Board",
    lists: [{
      id: 1,
      title: "Welcome to NOTES Board",
      notes:[{
        id: 1,
        title: "This a note",
        description: "",
        checklists: [],
        listId: 1},
      {
        id: 2,
        title: "Click on a note to see what`s behind it.",
        description: "",
        checklists: [],
        listId: 1},
      {
        id: 3,
        title: "You can attach description...",
        description: "This is description. You can edit it, just click here.",
        checklists: [],
        listId: 1},
      {
        id: 4,
        title: "...or checklist.",
        description: "",
        checklists: [{
          title: "Project",
          items: [
            {
              title: 'Begin',
              completed: false
            },
            {
              title: 'End',
              completed: false
            },
            {
              title: 'Bugs :(',
              completed: false
            }]
        }],
        listId: 1}
      ],
      boardId: 1
    },
    {
      id: 2,
      title: "Second List",
      notes:[{
        id: 5,
        title: "Try dragging notes anywhere",
        description: "",
        checklists: [],
        listId: 2},
      {
        id: 6,
        title: "You can edit everything you have created!",
        description: "",
        checklists: [],
        listId: 2}
      ],
      boardId: 1
    },
    {
      id: 3,
      title: "This is an empty list",
      notes:[],
      boardId: 1
    }]
  }
];

