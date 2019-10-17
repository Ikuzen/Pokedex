import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {
  @Input () pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }
  typeColor(pokemon): string{
    switch(pokemon.types[0].type.name){
      case 'grass':
        return 'green';
      case 'fire':
        return 'red';
      case 'water':
        return 'blue';
      default:
        return 'white';
    }
  }
}
