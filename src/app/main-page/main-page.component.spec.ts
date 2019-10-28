import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pokemon } from '../pokemon';
import { MainPageComponent } from './main-page.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonOverviewComponent } from './pokemon-overview/pokemon-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MockComponent } from 'ng-mocks';
import { By } from '@angular/platform-browser';


describe('MainPageComponent', () => {
  let component: MainPageComponent;
  // const childComponentList: PokedexListComponent = new PokedexListComponent();
  // const childComponentOverview: PokemonOverviewComponent = new PokemonOverviewComponent();
  let fixture: ComponentFixture<MainPageComponent>;
  // let childDebugElement1 = fixture.debugElement(PokedexListComponent);
  // let childDebugElement2 = fixture.debugElement(PokemonOverviewComponent);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, MockComponent(PokemonOverviewComponent), MockComponent(PokedexListComponent) ],
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
        ScrollingModule]
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

  it('should call getPokemonUrls() on init', () => {
    spyOn(component, 'getPokemonUrls');
    component.ngOnInit();
    expect(component.getPokemonUrls).toHaveBeenCalled();
  });

  // it('should call emitPokemon when input changes', () => {

  // });

  it('should call getpokemonUrls() when calling nextPage()', () => {
    spyOn(component,'getPokemonUrls');
    component.nextPage();
    expect(component.getPokemonUrls).toHaveBeenCalled();
  });

  it('should call getpokemonUrls() when calling previousPage()', () => {
    spyOn(component,'getPokemonUrls');
    component.previousPage();
    expect(component.getPokemonUrls).toHaveBeenCalled();
  });

  // it('should not display previous page if at the first page', () => {

  // });
  // it('should transfer hightlighted pokemon from pokedexlist component to pokemonoverview component', () => {
  //   const mockPokemon = new Pokemon();
  //   mockPokemon.name = 'test';
  //   childDebugElement1.highlightPokemon(mockPokemon);
  //   expect(childDebugElement2.pokemon.name).toBe('test');
  // });
});
