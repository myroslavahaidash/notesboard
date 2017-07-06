import { Board } from "./models/board";
import { List } from "./models/list";
import { Note } from "./models/note";

export const boards: Board[] = [
  new Board(1, "My First Board", []),
  new Board(2, "My Second Board", []),
  new Board(3, "My Third Board", [])
];



/*export const boards = [
  {
    id: 0,
    title: "My First Board",
    lists: [{
      id: 0,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0},
      {
        id: 2,
        title: "This is the second note",
        description: "The best description you have ever seen",
        position: 1},
      {
        id: 3,
        title: "This is the third note",
        description: "The best description you have ever seen",
        position: 2}
      ],
      position: 0
    },
    {
      id: 1,
      title: "Second List",
      notes:[{
        id: 4,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0},
        {
          id: 5,
          title: "This is the second note",
          description: "The best description you have ever seen",
          position: 0},
        {
          id: 6,
          title: "This is the third note",
          description: "The best description you have ever seen",
          position: 0}
      ],
      position: 1
    }]
  },
  {
    id: 1,
    title: "My Second Board",
    lists: [{
      id: 0,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0},
        {
          id: 2,
          title: "This is the second note",
          description: "The best description you have ever seen",
          position: 1},
        {
          id: 3,
          title: "This is the third note",
          description: "The best description you have ever seen",
          position: 2}
      ],
      position: 0
    },
      {
        id: 1,
        title: "Second List",
        notes:[{
          id: 4,
          title: "This is the first note",
          description: "The best description you have ever seen",
          position: 0},
          {
            id: 5,
            title: "This is the second note",
            description: "The best description you have ever seen",
            position: 1},
          {
            id: 6,
            title: "This is the third note",
            description: "The best description you have ever seen",
            position: 2}
        ],
        position: 1
      }
    ]
  },
  {
    id: 2,
    title: "My Third Board",
    lists: [{
      id: 0,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        position: 0},
        {
          id: 2,
          title: "This is the second note",
          description: "The best description you have ever seen",
          position: 1},
        {
          id: 3,
          title: "This is the third note",
          description: "The best description you have ever seen",
          position: 2}
      ],
      position: 0
    },
      {
        id: 1,
        title: "Second List",
        notes:[{
          id: 4,
          title: "This is the first note",
          description: "The best description you have ever seen",
          position: 0},
          {
            id: 5,
            title: "This is the second note",
            description: "The best description you have ever seen",
            position: 1},
          {
            id: 6,
            title: "This is the third note",
            description: "The best description you have ever seen",
            position: 2}
        ],
        position: 1
      }]
  }
];
*/
