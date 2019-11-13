import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiService } from '../pokeApiService/poke-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  currentPokemon: Pokemon;
  error: any;
  private allPokemonArray: Pokemon[];
  isSmallScreen: boolean;
  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;
  }

  ngOnInit() {
    this.getAllPokemons();
    this.isSmallScreen = (window.innerWidth <= 800) ? true : false;
  }

  onResize(event) {
    this.isSmallScreen = (event.target.innerWidth <= 800) ? true : false;
  }

  getAllPokemons(url = this.pokeApiService.baseURL) {
    this.pokeApiService.getAllPokemons(url).subscribe((pokemonRequest: any) => {
      this.allPokemonArray = pokemonRequest;
      console.log(this.allPokemonArray);


    }, (error) => {
      console.log(error);
      this.error = error.statusText;
    });
  }

emitPokemon(pokemon: Pokemon) {
    this.currentPokemon = pokemon;
    console.log(this.currentPokemon.name);
}

}

