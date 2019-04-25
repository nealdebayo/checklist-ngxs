import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faTimes, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import * as ListActions from './../../store/actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-each-list',
  templateUrl: './each-list.component.html',
  styleUrls: ['./each-list.component.scss']
})
export class EachListComponent implements OnInit {
  @Input()
  public title;

  @Output()
  public eachListEvent = new EventEmitter();

  @Input()
  public list;

  public faTimes = faTimes;
  public faCheckSquare = faCheckSquare;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  deleteList(){
    this.eachListEvent.emit({message : 'DELETE', payload: this.list, title: this.title})
  }

  toggleCheck(obj){
    this.store.dispatch(new ListActions.CheckContentList(this.title, obj));
  }

}
