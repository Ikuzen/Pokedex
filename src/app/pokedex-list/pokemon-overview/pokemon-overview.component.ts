import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon-overview',
  templateUrl: './pokemon-overview.component.html',
  styleUrls: ['./pokemon-overview.component.scss']
})
export class PokemonOverviewComponent implements OnInit {
  @Input () pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
