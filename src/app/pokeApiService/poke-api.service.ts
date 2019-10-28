import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  // tslint:disable-next-line:max-line-length
  public pokemonArray: object[] = [];
  public baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=20';


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



  getPokemon(pokemonURL) {
    console.log('fetching pokemon');
    return this.http.get(pokemonURL)
    .pipe(
      finalize(() => {
      })
    );
  }

  getAllPokemonUrls(url = 'https://pokeapi.co/api/v2/pokemon?limit=964'){
    return this.http.get(url)
    .pipe(
      finalize(() => {
      })
    );
  }
}
