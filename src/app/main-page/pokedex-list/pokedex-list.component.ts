import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokeApiService } from '../../pokeApiService/poke-api.service';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  @Input() pokemonArray: Pokemon[] = [];
  @Output() highlightedPokemon = new EventEmitter<Pokemon>();
  breakpoint: number;

  constructor(public utilService:UtilService) {
    this.utilService = utilService;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  highlightPokemon(pokemon) {
    this.highlightedPokemon.emit(pokemon);
    console.log(pokemon);
  }

  typeColor(pokemon): string {
    for (const type of pokemon.types.types) {
      switch (type) {
        case 'grass':
          return '#48d0b0';
        case 'poison':
          return '#a040a0';
        case 'fire':
          return '#fb6c6c';
        case 'water':
          return '#76bdfe';
        case 'electric':
          return '#ffd86f';
        case 'normal':
          return '#a9a978';
        case 'steel':
          return '#b8b8d0';
        case 'bug':
          return '#9eb820';
      }
    }
    return '#aaa9ad';
  }
  typeColorConverter(color:string){
    switch (color) {
      case 'grass':
        return '#48d0b0';
      case 'poison':
        return '#a040a0';
      case 'fire':
        return '#fb6c6c';
      case 'water':
        return '#76bdfe';
      case 'electric':
        return '#ffd86f';
      case 'normal':
        return '#a9a978';
      case 'steel':
        return '#b8b8d0';
      case 'bug':
        return '#9eb820';
      default:
        return '#aaa9ad';
    }
  }
}
