import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {finalize} from 'rxjs/operators';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  // tslint:disable-next-line:max-line-length
  pokemonSampleList: string[] = ['charmander', 'charmeleon', 'charizard', 'bulbasaur', 'ivysaur', 'venusaur', 'squirtle', 'wartortle', 'blastoise', 'pikachu'];
  public pokemonArray: object[] = [];
  private baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  newURL: string = this.baseURL;
  loading: boolean;
  error: any;

  constructor(private http: HttpClient) {
    for (const pokemon of this.pokemonSampleList){
      this.fetchPokemon(pokemon);
    }
  }


  fetchPokemon(pokemon){
    console.log('fetching pokemon');
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
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
  

  // search(url:string){
  //   // console.log(url)
  //   this.http.get(url).subscribe((data) => {
  //     this.allData = data;
  //     console.log(this.allData);
  // })}
}
