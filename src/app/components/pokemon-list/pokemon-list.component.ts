import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  title = 'toto';
  isButtonDisabled = false;
  isSayingBonjour = false;
  constructor() {
    // this.toggleButtonDisabled();
  }

  toggleButtonDisabled() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  onDisableBtnClick() {
    this.toggleButtonDisabled();
    console.log('clack');
  }
  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    console.log(inputElt.value);
    this.title = inputElt.value;
  }

  onToggleBonjour() {
    this.isSayingBonjour = !this.isSayingBonjour;
  }
}
