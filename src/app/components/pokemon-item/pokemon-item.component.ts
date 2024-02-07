import { Component } from '@angular/core';
import { Utils } from 'src/app/utils';
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.sass'],
})
export class PokemonItemComponent {
  name = 'Pikachu';
  names = ['carapuce', 'bulbizarre', 'dracofeu'];
  types: string[] = ['eau', 'feu', 'plante'];
  type = this.types[Math.floor(Math.floor(Math.random() * this.types.length))];
  level = 1;
  gender: 'male' | 'female';
  isButtonDisabled: boolean = false;

  constructor() {
    const randomNumber = Utils.getRandomNumber(1, 2);
    this.gender = randomNumber === 1 ? 'male' : 'female';
  }

  getHp() {
    return Math.round(100 * Math.random());
  }

  toggleButtonName() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  getRandomName() {
    this.name = this.names[Math.floor(Math.random() * this.names.length)];
  }

  onButtonClick() {
    this.toggleButtonName();
    this.getRandomName();
  }
}
