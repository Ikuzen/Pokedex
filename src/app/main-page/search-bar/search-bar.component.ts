import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() allPokemonArray:object;
  pokemonCtrl = new FormControl();
  filteredPokemons: Observable<object[]>;
  constructor() {
    this.filteredPokemons = this.pokemonCtrl.valueChanges
      .pipe(
        startWith(''),
        map(pokemon => pokemon ? this._filterPokemons(pokemon) : this.allPokemonArray.results.slice())
        );
   }
   private _filterPokemons(value: string): object[] {
    const filterValue = value.toLowerCase();

    return this.allPokemonArray.results.filter(pokemon => pokemon.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    console.log(this.allPokemonArray.results)
  }

}
