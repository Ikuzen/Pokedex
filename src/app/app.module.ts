// tslint:disable-next-line: max-line-length
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PokedexListComponent } from './main-page/pokedex-list/pokedex-list.component';
import { PokemonOverviewComponent } from './main-page/pokemon-overview/pokemon-overview.component'
import {MatGridListModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule, MatProgressBarModule, MatCardModule, MatTabsModule, MatTabChangeEvent, MatAutocompleteModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SearchBarComponent } from './main-page/search-bar/search-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PokedexListComponent,
    PokemonOverviewComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
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
    MatButtonModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
