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
  public pokemonArray: object[] = [];
  private pokemonUrlList: string[] = [];
  private nextPageUrl;
  private previousPageUrl;

  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;
    this.getPokemonUrls(); }

  ngOnInit() {
    for (const pokemon of this.pokeApiService.pokemonSampleListURL) {
      this.pokeApiService.getPokemon(pokemon);
    }
  }
  getPokemonUrls(url = this.pokeApiService.baseURL) {
    this.pokeApiService.getPokemonUrls(url).subscribe((pokemonRequest: any) => {
      this.nextPageUrl = pokemonRequest.next;
      this.previousPageUrl = pokemonRequest.previous;
      this.pokemonUrlList = pokemonRequest.results.map(x => x.url);
      this.pokemonUrlList.forEach((pokemonUrl: any) => {
        this.pokeApiService.getPokemon(pokemonUrl).subscribe((pokemonObject: object) => {
          this.pokemonArray.push(pokemonObject);

    }, (error) => {
      console.log(error);
      this.error = error.statusText;
    });
  });
});
}

  emitPokemon(pokemon: Pokemon) {
    this.currentPokemon = pokemon;
    console.log(this.currentPokemon);
}

nextPage() {
  this.pokemonArray.length = 0;
  this.getPokemonUrls(this.nextPageUrl);
}
previousPage() {
  this.pokemonArray.length = 0;
  this.getPokemonUrls(this.previousPageUrl);
}
}
