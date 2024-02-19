import { Injectable } from '@angular/core';
import { Pokemon } from '../models/interfaces';
import { Utils } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceTsService {
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

  genders = ['male', 'female', 'unknown'];

  constructor() {
    this.loadPokemons();
  }
  pokemonAlreadyExists(pokemonName: string) {
    const pokemonWithSameName = this.pokemons.find((pokemon) => {
      return pokemonName === pokemon.name;
    });
    return pokemonWithSameName !== undefined;
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

  addPokemon(newPokemonName: string, duplicatePokemon: string) {
    if (this.pokemonAlreadyExists(newPokemonName)) {
      duplicatePokemon = newPokemonName;
      return;
    }
    const newPokemon: Pokemon = {
      name: newPokemonName,
      gender: this.getRandomGender(),
    };
    this.pokemons.push(newPokemon);

    newPokemonName = '';

    this.storePokemons();
  }

  onDeletePokemon(pokemonIndex: number) {
    this.pokemons.splice(pokemonIndex, 1);
    this.storePokemons();
  }

  getRandomGender() {
    const randomNumberGender = Utils.getRandomNumber(
      0,
      this.genders.length - 1
    );
    return this.genders[randomNumberGender];
  }
}
