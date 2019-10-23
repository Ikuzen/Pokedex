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
  newURL: string = this.baseURL;
  loading: boolean;
  error: any;

  constructor(private http: HttpClient) {
    this.fetchAllPokemons(this.baseURL);
  }
  populatePokemonList() {
    for (const pokemon of this.pokemonSampleListURL) {
      this.fetchPokemon(pokemon);
    }
    console.log(this.pokemonSampleListURL)
  }

  fetchAllPokemons(url) {
    console.log('fetching pokemons');
    return this.http.get(url)
    .pipe(
      finalize(() => { // callback at the end always
        this.loading = false;
      })
    )
    .subscribe(
      (data) => { // .get returns an observable
        this.pokemonSampleListURL = data.results;
        this.pokemonSampleListURL = this.pokemonSampleListURL.map(x => x.url);
        this.loading = false;
        console.log(this.pokemonSampleListURL); // first callback : success
    }, (error) => {
      console.log(error);
      this.error = error.statusText;
      this.loading = false;
    });
  }

  fetchPokemon(pokemonURL) {
    console.log('fetching pokemon');
    return this.http.get(pokemonURL)
    .pipe(
      finalize(() => { // callback at the end always
        this.loading = false;
      })
    )
    .subscribe(
      (data) => { // .get returns an observable
      console.log(data); // first callback : success
      this.pokemonArray.push(data);
      this.loading = false;
    }, (error) => {
      console.log(error);
      this.error = error.statusText;
      this.loading = false;
    });
  }

  nextPage(){

  }

  // search(url:string){
  //   // console.log(url)
  //   this.http.get(url).subscribe((data) => {
  //     this.allData = data;
  //     console.log(this.allData);
  // })}
}
