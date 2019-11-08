import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { MatTabChangeEvent } from '@angular/material';
import { UtilService } from 'src/app/util.service';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PokemonOverviewComponent implements OnInit {
  @Input () pokemon: Pokemon;
  constructor(public utilService:UtilService) {
    this.utilService = utilService;
   }

  // ngOnChanges(){
  //   this.resetSelectedIndex();
  // }

  ngOnInit() {
  }

  typeColor(pokemon): string {
    for (const type of pokemon.types) {
      switch (type.type.name) {
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
    return 'aaa9ad';
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

  totalStats(pokemon): number {
    // tslint:disable-next-line:max-line-length
    return  (pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat) / 6;
  }

  barColor(stat: number): string {
    return stat > 50 ? 'primary' : 'warn';
  }

  resetSelectedIndex(){
    return 0;
  }

  onTabChange(event:MatTabChangeEvent){
    console.log("test")
    if(event.index !== 0){
      event.index = 0;
      console.log("reussi")
  }
}
}
