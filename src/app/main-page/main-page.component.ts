import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  currentPokemon:Pokemon;
  constructor() { }

  ngOnInit() {
  }
  emitPokemon(pokemon: Pokemon) {
    this.currentPokemon = pokemon;
    console.log(this.currentPokemon);
}
}
