import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { MatTabChangeEvent } from '@angular/material';
import { UtilService } from 'src/app/util.service';
import { PokeApiService } from 'src/app/pokeApiService/poke-api.service';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PokemonOverviewComponent implements OnInit {
  @Input () pokemon: Pokemon;
  isEditing:boolean = false;

  constructor(public utilService:UtilService, public pokeApiService:PokeApiService) {
    this.utilService = utilService;
    this.pokeApiService = pokeApiService;
   }

  // ngOnChanges(){
  //   this.resetSelectedIndex();
  // }

  ngOnInit() {
  }
  edit(pokemon: Pokemon): void {
    this.isEditing = true;
  }

  cancel(): void {
    this.isEditing = false;
  }

  save(): void {
    this.pokemon.name = editPokemonName.value;
    this.isEditing = false;
    this.pokeApiService.updatePokemon(this.pokemon).subscribe();
    console.log(this.pokemon);

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
