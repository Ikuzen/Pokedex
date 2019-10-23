import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  // tslint:disable-next-line:max-line-length
  pokemonSampleListURL: string[] = [];
  public pokemonArray: object[] = [];
  private baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=20';


  constructor(private http: HttpClient) {
  }

  getPokemonUrls(url = this.baseURL) {
    console.log('fetching pokemons');
    return this.http.get(url)
    .pipe(
      finalize(() => {
      })
    );
  }

  fetchPokemon(pokemonURL) {
    console.log('fetching pokemon');
    return this.http.get(pokemonURL)
    .pipe(
      finalize(() => {
      })
    );
  }

}
