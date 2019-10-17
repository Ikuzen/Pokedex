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
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
  }

  highlightPokemon(pokemon){
    this.highlightedPokemon = pokemon;
    console.log(this.highlightedPokemon)
  }

}
