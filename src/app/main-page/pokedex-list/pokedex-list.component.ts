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
  currentPokemon: Pokemon;
  breakpoint: number;
  isSmallScreen: boolean;
  constructor(public utilService: UtilService) {
    this.utilService = utilService;
  }

  ngOnInit() {
    if (window.innerWidth < 600) {
      this.breakpoint = 2;
    } else if (window.innerWidth < 700) {
      this.breakpoint = 3;
    } else if (window.innerWidth < 800) {
      this.breakpoint = 4;
    } else if (window.innerWidth < 850) {
      this.breakpoint = 2;
    } else if (window.innerWidth < 900) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 2;
    }
    this.isSmallScreen = (window.innerWidth <= 800) ? true : false;
  }

  onResize(event) {
    if (window.innerWidth < 600) {
      this.breakpoint = 2;
    } else if (window.innerWidth < 700) {
      this.breakpoint = 3;
    } else if (window.innerWidth < 800) {
      this.breakpoint = 4;
    } else if (window.innerWidth < 850) {
      this.breakpoint = 2;
    } else if (window.innerWidth < 900) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 2;
    }
    this.isSmallScreen = (window.innerWidth <= 800) ? true : false;
  }

  highlightPokemon(pokemon) {
    this.highlightedPokemon.emit(pokemon);
    this.currentPokemon = pokemon;
    console.log(pokemon);
  }
  ifHighlighted(pokemon) {
    if (pokemon === this.currentPokemon) {
      return 'black 3px double';
    } else {
      return 'none';
    }
  }

  typeColor(pokemon): string {
    return this.typeColorConverter(pokemon.types.types[0]);
  }
  typeColorConverter(element: string) {
    switch (element) {
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
