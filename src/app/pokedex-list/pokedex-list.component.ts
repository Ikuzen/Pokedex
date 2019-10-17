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
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }

  highlightPokemon(pokemon){
    this.highlightedPokemon = pokemon;
    console.log(this.highlightedPokemon)
  }

  typeColor(pokemon): string {
    for (const type of pokemon.types){
      switch(type.type.name){
        case 'grass':
          return 'green';
        case 'poison':
          return 'green';
        case 'fire':
          return 'red';
        case 'water':
          return 'blue';
        case 'electric':
          return 'yellow';
      }
    }
    return 'gray';
  }
}
