import { Component } from '@angular/core';
import { JokeService } from './jokes/joke.service';
import { IJoke } from './models/joke.model';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  joke: IJoke;

  constructor(jokeService: JokeService) { 
    this.joke = jokeService.getJoke();
  }

}
 