import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
// tslint:disable-next-line: max-line-length
import {MatGridListModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import { PokedexListComponent } from './pokedex-list.component';




@NgModule({
  declarations: [
    PokemonOverviewComponent,
    PokemonDetailComponent,
    PokedexListComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ]
})
export class PokedexListModule { }
