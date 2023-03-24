import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICategory, ITodo, TODOS } from 'src/app/mocks/todos.mock';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const categories : ICategory[] = [
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
        icon: "soap"
      },
      {
        id:6,
        name: "other",
        icon: "shamrock"
      },

    ];
    const todos: ITodo[] = [
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
    ;
    return {categories, todos};
  }


  genId<T extends ICategory | ITodo>(myTable: T[]) : number{
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id!)) + 1 : 1;
  }
  // Méthode qui retourne le plus grand id et y ajoute 1 pour auto-increment de l'id.
  // Si le tableau est vide, assigne 1 comme id à l'élément ajouté.
}
