import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import { Pokemon } from '../pokemon';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  // tslint:disable-next-line:max-line-length
  public pokemonArray: object[] = [];
  public baseURL = 'http://localhost:9090';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllPokemons(url = this.baseURL) {
    console.log('fetching pokemons');
    return this.http.get(url + '/pokemons')
    .pipe(
      finalize(() => {
      })
    );
  }

  getPokemon(pokemonName) {
    console.log('fetching pokemon');
    return this.http.get(pokemonName)
    .pipe(
      finalize(() => {
      })
    );
  }

  // createPokemon(pokemon){
  //   console.log('creating pokemon');
  //   return this.http.post(Pokemon)
  //   .pipe(
  //     finalize(() => {
  //     })
  //   );
  // }

  updatePokemon(pokemon) {
    console.log('updating pokemon');
    return this.http.put<Pokemon>(this.baseURL + '/pokemon', pokemon, this.httpOptions)
    .pipe(
      finalize(() => {
      })
    )
  }


  deletePokemon(pokemonName) {
    console.log('deleting Pokemon ' + pokemonName);
    return this.http.delete(pokemonName)
    .pipe(
      finalize(() => {
      })
    );
  }

}
