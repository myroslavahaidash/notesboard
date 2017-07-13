import { Board } from "./models/board";
import { List } from "./models/list";
import { Note } from "./models/note";

/*export const boards: Board[] = [
  new Board(1, "My First Board", []),
  new Board(2, "My Second Board", []),
  new Board(3, "My Third Board", [])
];*/



export const boards = [
  {
    id: 1,
    title: "My First Board",
    lists: [{
      id: 0,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0,
        listId: 1},
      {
        id: 2,
        title: "This is the second note",
        description: "The best description you have ever seen",
        position: 1,
        listId: 1},
      {
        id: 3,
        title: "This is the third note",
        description: "The best description you have ever seen",
        position: 2,
        listId: 1}
      ],
      position: 0,
      boardId: 1
    },
    {
      id: 2,
      title: "Second List",
      notes:[{
        id: 4,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0,
        listId: 2},
        {
          id: 5,
          title: "This is the second note",
          description: "The best description you have ever seen",
          position: 0,
          listId: 2},
        {
          id: 6,
          title: "This is the third note",
          description: "The best description you have ever seen",
          position: 0,
          listId: 2}
      ],
      position: 1,
      boardId: 1
    }],
    currentNoteId: 6
  },
  {
    id: 2,
    title: "My Second Board",
    lists: [{
      id: 1,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0,
        listId: 1},
        {
          id: 2,
          title: "This is the second note",
          description: "The best description you have ever seen",
          position: 1,
          listId: 1},
        {
          id: 3,
          title: "This is the third note",
          description: "The best description you have ever seen",
          position: 2,
          listId: 1}
      ],
      position: 0,
      boardId: 2
    },
      {
        id: 2,
        title: "Second List",
        notes:[{
          id: 4,
          title: "This is the first note",
          description: "The best description you have ever seen",
          position: 0,
          listId: 2},
          {
            id: 5,
            title: "This is note without description",
            description: "",
            position: 1,
            listId: 2},
          {
            id: 6,
            title: "This is the third note",
            description: "The best description you have ever seen",
            position: 2,
            listId: 2}
        ],
        position: 1,
        boardId: 2
      }
    ],
    currentNoteId: 6
  },
  {
    id: 3,
    title: "My Third Board",
    lists: [{
      id: 1,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0,
        listId: 1},
        {
          id: 2,
          title: "This is the second note",
          description: "The best description you have ever seen",
          position: 1,
          listId: 1},
        {
          id: 3,
          title: "This is the third note",
          description: "The best description you have ever seen",
          position: 2,
          listId: 1}
      ],
      position: 1,
      boardId: 3
    },
      {
        id: 2,
        title: "Second List",
        notes:[{
          id: 4,
          title: "This is the first note",
          description: "The best description you have ever seen",
          position: 0,
          listId: 2},
          {
            id: 5,
            title: "This is the second note",
            description: "The best description you have ever seen",
            position: 1,
            listId: 2},
          {
            id: 6,
            title: "This is the third note",
            description: "The best description you have ever seen",
            position: 2,
            listId: 2}
        ],
        position: 2,
        boardId: 3
      }],
    currentNoteId: 6
  }
];

