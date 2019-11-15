import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { MatGridListModule, MatToolbarModule, MatButtonModule, MatListModule, MatIconModule, MatDialogModule, MatInputModule, MatTabsModule, MatProgressBarModule, MatCardModule, MatSnackBarModule, MatSpinner, MatProgressSpinnerModule, MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MainPageComponent } from './main-page/main-page.component';
import { PokedexListComponent } from './main-page/pokedex-list/pokedex-list.component';
import { PokemonOverviewComponent } from './main-page/pokemon-overview/pokemon-overview.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchBarComponent } from './main-page/search-bar/search-bar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainPageComponent,
        PokedexListComponent,
        PokemonOverviewComponent,
        SearchBarComponent],
      imports:[FormsModule,
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
        AppRoutingModule,
        MatSnackBarModule,
        AngularFontAwesomeModule,
        MatProgressSpinnerModule,
      MatAutocompleteModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pokedex'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pokedex');
  });
});
