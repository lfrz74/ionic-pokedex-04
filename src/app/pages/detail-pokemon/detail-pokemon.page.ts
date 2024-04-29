import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
})
export class DetailPokemonPage {
  pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
    private navController: NavController
  ) {
    this.pokemon = this.navParams.data['pokemon'];
  }

  goBack() {
    this.navController.pop(); //para regresar dice, medio trucho la verdad
  }
}
