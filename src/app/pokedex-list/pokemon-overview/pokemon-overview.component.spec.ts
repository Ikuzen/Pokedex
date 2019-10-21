import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonOverviewComponent } from './pokemon-overview.component';
import { Pokemon } from 'src/app/pokemon';

describe('PokemonOverviewComponent', () => {
  let component: PokemonOverviewComponent;
  let fixture: ComponentFixture<PokemonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonOverviewComponent ]
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

  it('should return correct color when calling method typeColor', () => {
    const mockPokemon = new Pokemon();
    mockPokemon.types =  ['fire'];
    expect(component.typeColor(mockPokemon)).toBe('red');
  });
});
