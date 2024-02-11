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

  constructor() {
    this.loadPokemons();
  }
  pokemonAlreadyExists(pokemonName: string) {
    const pokemonWithSameName = this.pokemons.find((pokemon) => {
      return pokemonName === pokemon.name;
    });
    return pokemonWithSameName !== undefined;
  }

  addPokemon() {
    if (this.pokemonAlreadyExists(this.newPokemonName)) {
      this.duplicatePokemon === this.newPokemonName;
      return;
    }
    const newPokemon: Pokemon = {
      name: this.newPokemonName,
      gender: this.getRandomGender(),
    };
    this.pokemons.unshift(newPokemon);
    this.addedPokemon = this.newPokemonName;
    this.newPokemonName = '';
    this.closeToastAfterSomeTime();
    this.storePokemons();
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
    }, 4000);
  }
  onToastClose() {
    this.addedPokemon = '';
    this.duplicatePokemon = '';
  }

  storePokemons() {
    const pokemonsJson = JSON.stringify(this.pokemons);
    console.log(pokemonsJson);
    localStorage.setItem('pokemons', pokemonsJson);
  }

  loadPokemons() {
    const pokemonStr = localStorage.getItem('pokemons');
    if (!pokemonStr) return;
    this.pokemons = JSON.parse(pokemonStr);
  }
  onDeletePokemon(pokemonIndex: number) {
    this.pokemons.splice(pokemonIndex, 1);
    this.storePokemons();
  }
}
