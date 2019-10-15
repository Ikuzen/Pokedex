import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiService } from '../pokeApiService/poke-api.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {
  breakpoint: number;
  pokemonList: Pokemon[] = [];

  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;
  }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.pokemonList[i] = new Pokemon();

      this.pokemonList[i].name = this.pokeApiService.pokemonSampleList[i];
    }
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
