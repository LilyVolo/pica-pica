import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Pokemon } from 'src/app/models/pokemons';
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.sass'],
})
export class LiveComponent {
  title = 'All pokemons';
  pokemons?: Pokemon[];

  constructor(private ApiService: ApiService) {
    this.ApiService.getPokemons().subscribe((pok: Pokemon[]) => {
      console.log(pok);
      this.pokemons = pok.filter((p: Pokemon, index: number) => index < 99);
    });
  }
}
