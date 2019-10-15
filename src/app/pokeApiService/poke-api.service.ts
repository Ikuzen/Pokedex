import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {finalize, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokemonSampleList: string[] = ['charmander', 'charmeleon', 'charizard'];
  public data: any = null;
  private baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  newURL: string = this.baseURL;
  loading: boolean;
  error: any;

  constructor(private http: HttpClient) {
    http.get(this.newURL)
    .pipe(
      finalize(() => { // callback at the end always
        this.loading = false;
      })
    )
    .subscribe(
      (data) => { // .get returns an observable
      console.log(data); // first callback : success
      this.data = data;
      this.loading = false;
    }, (error) => {
      console.log(error);
      this.error = error.statusText;
      this.loading = false;
    });
  }
  fetchPokemon(pokemon: string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ pokemon)
  }

  search(url:string){
    console.log(url)
    this.http.get(url).subscribe((data) => {
      this.data = data;
      console.log(this.data);
  })}
}
