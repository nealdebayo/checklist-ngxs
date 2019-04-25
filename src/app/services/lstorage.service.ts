import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LStorageService {

  constructor() { }

  addItem(list){
    return localStorage.setItem('CheckList', JSON.stringify(list));
  }

  getItems(){
    const list = JSON.parse(localStorage.getItem('CheckList'));
    if (!list){
      return []
    }
    return list;
  }


  updateList(list){
    return localStorage.setItem('CheckList', JSON.stringify(list));
  }
}
