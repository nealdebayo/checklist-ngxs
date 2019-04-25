
import { State, Action, Selector, StateContext } from '@ngxs/store';

import { LStorageService } from './../../services/lstorage.service';

import * as ListActions from '../actions';
import { CheckContentList } from '../actions';

export interface ListModel {
    id: string;
    content: string;
    checked: boolean;
}

export interface AllListModel {
    title: string;
    list: ListModel[];
}
export interface ListStateModel {
    allList: AllListModel[];
}
@State<ListStateModel>({
    name: 'checkList',
    defaults: {
        allList: []
    }
})
export class ListState{
    constructor(private storageService: LStorageService){}
    @Action(ListActions.GetList)
    getList({ patchState }){
        patchState({allList: this.storageService.getItems()});
    }

    @Action(ListActions.UpdateList)
    updateList({getState}){
        this.storageService.updateList(getState().allList);
    }

    @Action(ListActions.AddList)
    addList({getState, patchState} : StateContext<ListStateModel>, {payload}: ListActions.AddList){


        patchState({
            allList : [...getState().allList, payload]
        })
        this.storageService.addItem(getState().allList);

    }

    @Action(ListActions.DeleteList)
    removeList({getState, patchState, dispatch}: StateContext<ListStateModel>, {payload}: ListActions.DeleteList){
        let allList = getState().allList.filter(list => list.title !== payload);
        dispatch(new ListActions.UpdateList(getState().allList))
        patchState({ allList })
    }

    @Action(ListActions.CheckContentList)
    CheckContentList({ getState, patchState, dispatch } : StateContext<ListStateModel>, {title, content} : ListActions.CheckContentList){
        let affectedList = getState().allList;

        affectedList.forEach(con => {
            con.list.forEach(c => {
                if (c.id === content.id){
                    c.checked = !c.checked;
                }
            })
        })
        dispatch(new ListActions.UpdateList(affectedList));
        patchState({ allList: affectedList})
    }

    @Selector()
    static list(state){
        return {
            list: ['cool', 'not cool']
        }
    }
}