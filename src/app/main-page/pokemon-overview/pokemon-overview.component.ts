import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { MatTabChangeEvent, MatSnackBar } from '@angular/material';
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
  isEditing = false;
  @ViewChild('editPokemonName', {static: false }) inputPokemonName: ElementRef<HTMLInputElement>;

  constructor(public utilService: UtilService, public pokeApiService: PokeApiService, private _snackBar: MatSnackBar) {
    this.utilService = utilService;
    this.pokeApiService = pokeApiService;
   }

  ngOnInit() {
  }

  edit(): void {
    this.isEditing = true;
  }

  cancel(): void {
    this.isEditing = false;
  }

  save(): void {
    this.pokemon.name = this.inputPokemonName.nativeElement.value;
    this.isEditing = false;
    this.pokeApiService.updatePokemon(this.pokemon).subscribe();
    console.log(this.pokemon);
    this.saveNotification(`Pokemon ${this.pokemon.name} saved.`, 'close');
  }

  saveNotification(message: string, action: string ): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  typeColor(pokemon: Pokemon): string {
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

  barColor(stat: number): string {
    return stat > 50 ? 'primary' : 'warn';
  }

  resetSelectedIndex() {
    return 0;
  }
}

