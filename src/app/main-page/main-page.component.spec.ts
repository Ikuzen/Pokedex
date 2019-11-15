import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from '../pokemon';
import { MainPageComponent } from './main-page.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule, MatAutocompleteModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MockComponent } from 'ng-mocks';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, MockComponent(PokemonOverviewComponent), MockComponent(PokedexListComponent), SearchBarComponent ],
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
    MatProgressSpinnerModule,
  MatSnackBarModule,
MatAutocompleteModule,
BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllPokemons() on init', () => {
    spyOn(component, 'getAllPokemons');
    component.ngOnInit();
    expect(component.getAllPokemons).toHaveBeenCalled();
  });
  it('should change currentPokemon when calling submitPokemon', () => {
    const mockPokemon = {id: 1, name: 'mock', height: 1, weight: 1, images: [], moves:[], stats: {}, types: {types: ['fire']}};
    component.submitPokemon(mockPokemon);
    // tslint:disable-next-line: max-line-length
    expect(component.currentPokemon).toEqual({id: 1, name: 'mock', height: 1, weight: 1, images: [], moves:[], stats: {}, types: {types: ['fire']}});
  });


});
