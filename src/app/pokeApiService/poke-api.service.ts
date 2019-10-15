import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokemonSampleList: string[] = ['charmander', 'charmeleon', 'charizard'];
  constructor() { }
}
