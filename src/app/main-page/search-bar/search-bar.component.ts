import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Pokemon } from 'src/app/pokemon';
import { PokeApiService } from 'src/app/pokeApiService/poke-api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() allPokemonArray: Pokemon[];
  @Input() currentPokemon: Pokemon;
  @Output() submitPokemon = new EventEmitter<Pokemon>();
  pokemonCtrl = new FormControl();
  filteredPokemons: Observable<object[]>;
  searchField: any;
  pokemonUrl: string;

  ngOnInit() {
  }

  constructor(public pokeApiService: PokeApiService) {
    this.pokeApiService = pokeApiService;

    this.filteredPokemons = this.pokemonCtrl.valueChanges
    .pipe(
      startWith(''),
      map(pokemon => pokemon ? this._filterPokemons(pokemon) : this.allPokemonArray.slice())
      );
    }
   private _filterPokemons(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.allPokemonArray.filter(pokemon => pokemon.name.toLowerCase().indexOf(filterValue) === 0);
  }
  submit() {
    this.searchField = document.getElementById('searchField');
    if(this.searchField.value){
      this.pokeApiService.getPokemon(this.pokeApiService.baseURL + '/pokemon/name/' + this.searchField.value)
      .subscribe((pokemonObject: any) => {
          this.currentPokemon = pokemonObject;
          this.submitPokemon.emit(this.currentPokemon);
          console.log(this.currentPokemon);
        }
        , (error) => {
          console.log(error);
        });
      }
    }
}

