import { Component } from '@angular/core';
import { Utils } from 'src/app/utils';

// type Gender[] = ['male', 'female', 'unknown'];
type GenderColors = { [key: string]: string };

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
  addedPokemon = '';

  newPokemonName = '';

  duplicatePokemon = '';

  genderColors: GenderColors = {
    male: 'blue',
    female: 'pink',
    unknown: 'purple',
  };

  genders = ['male', 'female', 'unknown'];
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

  pokemonAlreadyExists(pokemonName: string) {
    const pokemonWithSameName = this.pokemons.find((pokemon) => {
      return pokemonName === pokemon.name;
    });
    return pokemonWithSameName !== undefined;
  }

  addPokemon() {
    if (this.pokemonAlreadyExists(this.newPokemonName)) return;
    const newPokemon: Pokemon = {
      name: this.newPokemonName,
      gender: this.getRandomGender(),
    };
    this.pokemons.unshift(newPokemon);
    this.addedPokemon = this.newPokemonName;
    this.newPokemonName = '';
    this.closeToastAfterSomeTime();
  }

  onInputKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addPokemon();
    }
  }

  getRandomGender() {
    const randomNumberGender = Utils.getRandomNumber(
      0,
      this.genders.length - 1
    );
    return this.genders[randomNumberGender];
  }

  closeToastAfterSomeTime() {
    setTimeout(() => {
      this.onToastClose();
    }, 2000);
  }
  onToastClose() {
    this.addedPokemon = '';
    this.duplicatePokemon = '';
  }
}
