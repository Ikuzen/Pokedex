import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOverviewComponent } from './pokemon-overview.component';
import { Pokemon } from 'src/app/pokemon';
import { PokeApiService } from 'src/app/pokeApiService/poke-api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule, MatSnackBarModule, MatProgressSpinnerModule, MatAutocompleteModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MainPageComponent } from '../main-page.component';
import { PokedexListComponent } from '../pokedex-list/pokedex-list.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementRef, Input } from '@angular/core';
import { Element } from '@angular/compiler';

describe('PokemonOverviewComponent', () => {
  let component: PokemonOverviewComponent;
  let service: PokeApiService;
  let fixture: ComponentFixture<PokemonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonOverviewComponent, MainPageComponent, PokedexListComponent, SearchBarComponent],
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
        AngularFontAwesomeModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        BrowserAnimationsModule
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

  it('should set isEditing to true when calling edit()', () => {
    component.edit();
    expect(component.isEditing).toBeTruthy();
  });

  it('should set isEditing to false when calling cancel()', () => {
    component.cancel();
    expect(component.isEditing).toBeFalsy();
  });

  it('should use API request update when calling save()', () => {
    spyOn(service, 'updatePokemon');
    const mockPokemon = {id: 1, name: 'mock', height: 1, weight: 1, images: [], moves:[], stats: {}, types: {types: ['fire']}};
    component.pokemon = mockPokemon;
    component.save();
    expect(PokeApiService).toHaveBeenCalled();
  });

  it('should set isEditing to false when calling save()', () => {
    const mockInputElement = new ElementRef<HTMLInputElement>(new Input('mockName'));
    component.inputPokemonName = mockInputElement;
    const mockPokemon = {id: 1, name: 'mock', height: 1, weight: 1, images: [], moves:[], stats: {}, types: {types: ['fire']}};
    component.pokemon = mockPokemon;
    component.save();
    expect(component.isEditing).toBeFalsy();
  });

  it('should call saveNotification() when calling save()', () => {
    const mockPokemon = {id: 1, name: 'mock', height: 1, weight: 1, images: [], moves:[], stats: {}, types: {types: ['fire']}};
    component.pokemon = mockPokemon;
    spyOn(component, 'save');
    component.saveNotification('mock', 'mock');
    expect(component.save).toHaveBeenCalled();
  });
  // it('snackBar should last no more than 2000 ms when calling saveNotification()'){
  // }

  it('should return correct color when calling method typeColor', () => {
    const mockPokemon = {id: 1, name: 'mock', height: 1, weight: 1, images: [], moves: [], stats: {}, types: {types: ['fire']}};
    expect(component.typeColor(mockPokemon)).toBe('#fb6c6c');
  });

  it('should change the bar color when passing barColor() with a value above or under 50 ', () => {
    const color = component.barColor(40);
    expect(color).toBe('warn');
  });

});
