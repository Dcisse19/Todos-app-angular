export type CategoryType = "shopping"|"health"|"work"|"bills"|"cleaning"|"other";

export interface ICategory {
  id:number;
  name:CategoryType;
  icon:string;
}

export interface ITodo {
  id:number;
  content:string;
  categoryId:number;
  isUrgent:boolean;
  doneDate: Date|null;
}


export const CATEGORIES: ICategory[] = [
  {
    id:1,
    name: "shopping",
    icon: "shopping_trolley"
  },
  {
    id:2,
    name: "health",
    icon: "pill"
  },
  {
    id:3,
    name: "work",
    icon: "briefcase"
  },
  {
    id:4,
    name: "bills",
    icon: "money_with_wings"
  },
  {
    id:5,
    name: "cleaning",
    icon: "money_with_wings"
  },
  {
    id:6,
    name: "other",
    icon: "shamrock"
  },

];

export const TODOS: ITodo[] = [
  {
    id:1,
    content:"Aller faire les courses",
    categoryId:1,
    isUrgent:true,
    doneDate: null,
  },
  {
    id:2,
    content:"Prendre rendez-vous chez le dentiste",
    categoryId:2,
    isUrgent:false,
    doneDate: null,
  },
  {
    id:3,
    content:"Faire la vaiselle",
    categoryId:5,
    isUrgent:false,
    doneDate: null,
  },
]
