import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListComponent } from './pokedex-list.component';
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule, MatAutocompleteModule } from '@angular/material';
import { Pokemon } from 'src/app/pokemon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PokemonOverviewComponent } from '../pokemon-overview/pokemon-overview.component';
import { MainPageComponent } from '../main-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PokedexListComponent', () => {
  let component: PokedexListComponent;
  let fixture: ComponentFixture<PokedexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexListComponent, PokemonOverviewComponent, MainPageComponent, SearchBarComponent],
      imports: [MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
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
        MatProgressSpinnerModule,
        MatSnackBarModule,
        AngularFontAwesomeModule,
        MatAutocompleteModule,
        BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct color when calling method typeColor', () => {
    const mockPokemon = {id: 1, name: 'mock', height: 1, weight: 1, images: [], moves: [], stats: {}, types: {types: ['fire']}};
    expect(component.typeColor(mockPokemon)).toBe('#fb6c6c');
  });
});
