import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpInpComponent } from './components/exp-inp/exp-inp.component';

@NgModule({
  declarations: [AppComponent, PokemonItemComponent, PokemonListComponent, TestComponent, ExpInpComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
