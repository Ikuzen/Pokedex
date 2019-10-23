import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeApiService } from '../pokeApiService/poke-api.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexListComponent implements OnInit {
  breakpoint: number;
  error: any;
  public highlightedPokemon: Pokemon;
  private pokemonUrlList: string[] = [];
  public pokemonArray: object[] = [];
  private nextPageUrl;
  private previousPageUrl;

  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;
    this.getPokemonUrls();
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;

    for (const pokemon of this.pokeApiService.pokemonSampleListURL) {
      this.pokeApiService.fetchPokemon(pokemon);
    }
  }

  getPokemonUrls() {
    this.pokeApiService.fetchAllPokemons().subscribe((pokemonRequest: string[]) => {
      this.nextPageUrl = pokemonRequest.next;
      this.previousPageUrl = pokemonRequest.previous;
      this.pokemonUrlList = pokemonRequest.results.map(x => x.url);
      this.pokemonUrlList.forEach((pokemonUrl: any) => {
        this.pokeApiService.fetchPokemon(pokemonUrl).subscribe((pokemonObject: object) => {
          this.pokemonArray.push(pokemonObject);

    }, (error) => {
      console.log(error);
      this.error = error.statusText;
    });
  });
});
}

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  highlightPokemon(pokemon) {
    this.highlightedPokemon = pokemon;
    console.log(this.highlightedPokemon);
  }

  typeColor(pokemon): string {
    if (this.highlightedPokemon === pokemon) {
      return 'silver';
    }
    for (const type of pokemon.types) {
      switch (type.type.name) {
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
