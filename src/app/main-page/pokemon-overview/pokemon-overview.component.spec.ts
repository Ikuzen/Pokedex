import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOverviewComponent } from './pokemon-overview.component';
import { Pokemon } from 'src/app/pokemon';
import { PokeApiService } from 'src/app/pokeApiService/poke-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MainPageComponent } from '../main-page.component';
import { PokedexListComponent } from '../pokedex-list/pokedex-list.component';

describe('PokemonOverviewComponent', () => {
  let component: PokemonOverviewComponent;
  let fixture: ComponentFixture<PokemonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonOverviewComponent, MainPageComponent, PokedexListComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        MatGridListModule,
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatTabsModule,
        MatProgressBarModule,
        MatCardModule,
        ScrollingModule,
      ]
      })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should reset tab selection of mat-tab-group when input value (pokemon) changes', () => {

  // });

  it('should return correct color when calling method typeColor', () => {
    const mockPokemon = {types: [{type: {name: 'fire'}}]};
    expect(component.typeColor(mockPokemon)).toBe('red');
  });

  it('should return sum of total of each stats of pokemon object, when calling totalStats()', () => {
    // tslint:disable-next-line:max-line-length
    const mockPokemon = {stats: [{base_stat: 10}, {base_stat: 10}, {base_stat: 10}, {base_stat: 10}, {base_stat: 10}, {base_stat: 10}]};
    expect(component.totalStats(mockPokemon)).toBe(10);
  });

});
