import { Component } from '@angular/core';

interface Pokemon {
  name: string;
  gender: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass'],
})
export class TestComponent {
  newPokemonName = '';

  pokemons: Pokemon[] = [
    {
      name: 'Pikachu',
      gender: 'male',
    },
    {
      name: 'Blulbizare',
      gender: 'female',
    },
  ];

  addPockemon() {
    const newPokemon = {
      name: this.newPokemonName,
      gender: 'unknown',
    };
    this.pokemons.unshift(newPokemon);
    this.newPokemonName = '';
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addPockemon();
    }
  }
}
