import {Dispatch} from 'redux';
import { AsyncActionCreator, createAsyncAction } from 'typesafe-actions';

type AnyAscyncActionCreator = AsyncActionCreator<any, any, any>;
type AnyPromiseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<A extends AnyAscyncActionCreator, F extends AnyPromiseCreator>(
    
)