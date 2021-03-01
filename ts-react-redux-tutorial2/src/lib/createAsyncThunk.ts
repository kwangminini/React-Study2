import {Dispatch} from 'redux';
import { AsyncActionCreator, createAsyncAction } from 'typesafe-actions';

type AnyAscyncActionCreator = AsyncActionCreator<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<A extends AnyAscyncActionCreator, F extends AnyPromiseCreator>(
    asyncActionCreator: A, promiseCreator: F
){
    type Params = Parameters<F>;
    return function thunk(...params: Params){
        return async (dispatch: Dispatch) => {
            const {request, success, failure} = asyncActionCreator;
            dispatch(request(undefined));
            try{
                const result = await promiseCreator(...params);
                dispatch(success(result));
            }catch(e){
                dispatch(failure(e));
            }
        }
    }
}