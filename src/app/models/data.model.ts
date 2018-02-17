import { IJoke } from './joke.model';

export interface IData {
      type: string;
      value: IJoke;
}

export class Data implements IData {
      constructor(public type: string, public value: IJoke) { }
}