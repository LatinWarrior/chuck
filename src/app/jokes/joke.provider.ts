import { InjectionToken, APP_INITIALIZER} from '@angular/core';

import { JokeService } from './joke.service';


export function jokeLoader(jokeService: JokeService) {
      return () => jokeService.load();
}

export const JOKE_PROVIDER = [
      {
            provide: APP_INITIALIZER,
            useFactory: jokeLoader,
            deps: [JokeService],
            multi: true
      }
];
