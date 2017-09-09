import { Board } from "./models/board";
import { List } from "./models/list";
import { Note } from "./models/note";

export const boards = [
  {
    id: 1,
    title: "My First Board",
    lists: [{
      id: 1,
      title: "First List",
      notes:[{
        id: 1,
        title: "This is the first note",
        description: "The best description you have ever seen",
        checklists: [
          {
            title: "First checklist",
            items: [
              {
                title: "First Todo",
                completed: false
              },
              {
                title: "Second Todo",
                completed: false
              },
              {
                title: "Third Todo",
                completed: false
              }
            ]
          }
        ],
        listId: 1},
      {
        id: 2,
        title: "This is the second note",
        description: "The best description you have ever seen",
        checklists: [],
        listId: 1},
      {
        id: 3,
        title: "This is the third note",
        description: "The best description you have ever seen",
        checklists: [],
        listId: 1}
      ],
      boardId: 1
    },
    {
      id: 2,
      title: "Second List",
      notes:[{
        id: 4,
        title: "This is the first note",
        description: "The best description you have ever seen",
        checklists: [],
        listId: 2},
        {
          id: 5,
          title: "This is the second note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 2},
        {
          id: 6,
          title: "This is the third note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 2}
      ],
      boardId: 1
    }]
  },
  {
    id: 2,
    title: "My Second Board",
    lists: [{
      id: 3,
      title: "First List",
      notes:[
        {
          id: 7,
          title: "This is the first note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 3},
        {
          id: 8,
          title: "This is the second note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 3},
        {
          id: 9,
          title: "This is the third note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 3}
      ],
      boardId: 2
    },
      {
        id: 4,
        title: "Second List",
        notes:[
          {
            id: 10,
            title: "This is the first note",
            description: "The best description you have ever seen",
            checklists: [],
            listId: 4},
          {
            id: 11,
            title: "This is note without description",
            description: "",
            checklists: [],
            listId: 4},
          {
            id: 12,
            title: "This is the third note",
            description: "The best description you have ever seen",
            checklists: [],
            listId: 4}
        ],
        boardId: 2
      }
    ]
  },
  {
    id: 3,
    title: "My Third Board",
    lists: [{
      id: 5,
      title: "First List",
      notes:[
        {
          id: 13,
          title: "This is the first note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 5},
        {
          id: 14,
          title: "This is the second note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 5},
        {
          id: 15,
          title: "This is the third note",
          description: "The best description you have ever seen",
          checklists: [],
          listId: 5}
      ],
      boardId: 3
    },
      {
        id: 6,
        title: "Second List",
        notes:[
          {
            id: 16,
            title: "This is the first note",
            description: "The best description you have ever seen",
            checklists: [],
            listId: 6},
          {
            id: 17,
            title: "This is the second note",
            description: "The best description you have ever seen",
            checklists: [],
            listId: 6},
          {
            id: 18,
            title: "This is the third note",
            description: "The best description you have ever seen",
            checklists: [],
            listId: 6}
        ],
        boardId: 3
      }]
  }
];

