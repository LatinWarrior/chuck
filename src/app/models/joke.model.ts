export interface IJoke {
      id: number;
      joke: string;
      categories?: Array<string>;
}

export class Joke implements IJoke {
      constructor(public id: number, public joke: string, public categories?: Array<string>) { }
}
