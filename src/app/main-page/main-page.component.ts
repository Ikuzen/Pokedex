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
  private allPokemonArray:object[];
  private pokemonUrlList: string[] = [];
  private nextPageUrl;
  private previousPageUrl;
  private displaySearchBar:boolean;

  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;
  }

  ngOnInit() {
    this.getPokemonUrls();
    this.getAllPokemonUrls();

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

getAllPokemonUrls(){
  this.pokeApiService.getAllPokemonUrls().subscribe((pokemonRequest:any)=>{
    this.allPokemonArray = pokemonRequest;
    console.log(this.allPokemonArray);
  });
}

emitPokemon(pokemon: Pokemon) {
    this.currentPokemon = pokemon;
    console.log(this.currentPokemon.name);
}

nextPage() {
  this.pokemonArray.length = 0;
  this.getPokemonUrls(this.nextPageUrl);
}
previousPage() {
  this.pokemonArray.length = 0;
  this.getPokemonUrls(this.previousPageUrl);
}
search(){
  if(!this.displaySearchBar){
    this.displaySearchBar = true;
  }
}
}

