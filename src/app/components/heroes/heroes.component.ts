import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heores.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];


  constructor( private heroesService: HeroesService ) {

    console.log('constructor');

  }

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();

    console.log(this.heroes);

  }

}
