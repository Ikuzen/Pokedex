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
  public highlightedPokemon: Pokemon;

  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  highlightPokemon(pokemon){
    this.highlightedPokemon = pokemon;
    console.log(this.highlightedPokemon)
  }

  typeColor(pokemon): string {
    for (const type of pokemon.types){
      switch(type.type.name){
        case 'grass':
          return 'ForestGreen';
        case 'poison':
          return 'LimeGreen';
        case 'fire':
          return 'red';
        case 'water':
          return 'DodgerBlue';
        case 'electric':
          return 'yellow';
      }
    }
    return 'silver';
  }
}
