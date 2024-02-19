import { Component } from '@angular/core';
import { PokemonServiceTsService } from 'src/app/services/pokemon.service.ts.service';

import { Pokemon } from 'src/app/models/pokemons';

// type Gender[] = ['male', 'female', 'unknown'];
type GenderColors = { [key: string]: string };

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass'],
})
export class TestComponent {
  addedPokemon = '';

  newPokemonName = '';

  duplicatePokemon = '';

  pokemons = this.pokeServ.pokemons;

  genderColors: GenderColors = {
    male: 'blue',
    female: 'pink',
    unknown: 'purple',
  };

  constructor(private pokeServ: PokemonServiceTsService) {
    this.pokeServ.loadPokemons();
  }

  addPokemon() {
    this.pokeServ.addPokemon(this.newPokemonName, this.duplicatePokemon);
    this.addedPokemon = this.newPokemonName;
    this.closeToastAfterSomeTime();
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.pokeServ.addPokemon(this.newPokemonName, this.duplicatePokemon);
    }
  }

  onDeletePokemon(pokemonIndex: number) {
    this.pokeServ.onDeletePokemon(pokemonIndex);
  }

  closeToastAfterSomeTime() {
    setTimeout(() => {
      this.onToastClose();
    }, 4000);
  }
  onToastClose() {
    this.addedPokemon = '';
    this.duplicatePokemon = '';
  }
}
