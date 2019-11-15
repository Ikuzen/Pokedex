import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { PokedexListComponent } from '../pokedex-list/pokedex-list.component';
import { PokemonOverviewComponent } from '../pokemon-overview/pokemon-overview.component';
import { MainPageComponent } from '../main-page.component';
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

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
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
