import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokedex-list/pokemon-detail/pokemon-detail.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokedexListComponent},
  { path: 'pokemon-detail/:pokemon', component: PokemonDetailComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
