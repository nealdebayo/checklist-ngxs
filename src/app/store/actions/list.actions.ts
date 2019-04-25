import * as ListAliases from './../states/list.state';

export class AddList{
    static readonly type = "[List] Add List";
    constructor(public payload: ListAliases.AllListModel){}
}

export class GetList {
    static readonly type = "[List] Get List";
}

export class DeleteList {
    static readonly type = "[List] Delete List";
    constructor(public payload: string){}
}

export class UpdateList {
    static readonly type = "[List] Update List";
    constructor(public payload: any){}
}

export class CheckContentList {
    static readonly type = "[List] Check List Content";
    constructor(public title: string, public content: any){}
}