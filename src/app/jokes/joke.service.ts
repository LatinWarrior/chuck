import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Data, IData} from './../models/data.model';
import { Joke, IJoke } from './../models/joke.model';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';

import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class JokeService {

  private joke: Joke = null;

  constructor(private http: Http) { }

  public getJoke(): Joke {
    return this.joke;
  }

  load() {
    console.log("loading random Chuck Norris joke")
    return new Promise((resolve, reject) => {
        this.http
            .get('https://api.icndb.com/jokes/random')
            .map(res => res.json())
            .subscribe(response => {
                this.joke = response['value'];
                console.log("joke loading complete")
                resolve(true);
            })
    })
}

  load2() {
    return new Promise((resolve: any, reject: any) => {
      this.http
        .get('https://api.icndb.com/jokes/random')
        .pipe(
        tap(data => console.log('Data: ' + JSON.stringify(data))),
        tap((data: IData) => {
          debugger;
          this.joke = new Joke(data.value.id, data.value.joke, data.value.categories);
          resolve(true)
        }),
        catchError(this.handleError)
        );
    })
  }

  private handleError(err: HttpErrorResponse): ErrorObservable {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return new ErrorObservable(errorMessage);
  }


}
