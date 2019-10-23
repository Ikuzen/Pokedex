import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PokemonOverviewComponent implements OnInit {
  @Input () pokemon: Pokemon;

  constructor() { }

  ngOnInit() {

  }
  typeColor(pokemon): string {
    for (const type of pokemon.types) {
      switch (type.type.name) {
        case 'grass':
          return 'green';
        case 'poison':
          return 'green';
        case 'fire':
          return 'red';
        case 'water':
          return 'blue';
        case 'electric':
          return 'yellow';
      }
    }
    return 'gray';
  }

  totalStats(): number {
    // tslint:disable-next-line:max-line-length
    return  (this.pokemon.stats[0].base_stat + this.pokemon.stats[1].base_stat + this.pokemon.stats[2].base_stat + this.pokemon.stats[3].base_stat + this.pokemon.stats[4].base_stat + this.pokemon.stats[5].base_stat) / 6;
  }

  barColor(stat: number): string {
    return stat > 50 ? 'primary' : 'warn';
  }
}

