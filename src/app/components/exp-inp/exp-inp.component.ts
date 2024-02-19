import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exp-inp',
  templateUrl: './exp-inp.component.html',
  styleUrls: ['./exp-inp.component.sass'],
})
export class ExpInpComponent {
  @Input() name = '';
}
