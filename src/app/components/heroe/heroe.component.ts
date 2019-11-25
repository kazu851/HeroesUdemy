import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  // tslint:disable-next-line:variable-name
  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
        // console.log( params.id);
        // console.log( params['id']);

        // tslint:disable-next-line:no-string-literal
        this.heroe = this._heroesService.getHeroe( params['id']);


    });

  }

  ngOnInit() {
  }

}
