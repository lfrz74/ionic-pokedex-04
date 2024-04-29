import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})
export class ListPokemonsPage implements OnInit {
  pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService,
    private loadingController: LoadingController,
    private navParams: NavParams,
    private navController: NavController
  ) {
    this.pokemons = [];
  }

  ngOnInit() {
    this.morePokemon();
  }

  async morePokemon($event: any = null) {
    const promise = this.pokemonService.getPokemons();
    let loading: HTMLIonLoadingElement | null = null;

    if (promise) {
      if ($event) {
        loading = await this.loadingController.create({
          message: 'Loading v...',
        });
        await loading.present();
      }

      promise
        .then((result) => {
          this.pokemons = this.pokemons.concat(result as unknown as Pokemon[]);

          this.completeAndLoad($event, loading);
        })
        .catch(() => {
          this.completeAndLoad($event, loading);
        });
    }
  }

  private completeAndLoad($event: any, loading: HTMLIonLoadingElement | null) {
    if ($event) {
      $event.target.complete();
    }

    if (loading) {
      loading.dismiss();
    }
  }

  goToDetail(pokemon: Pokemon) {
    this.navParams.data['pokemon'] = pokemon;
    this.navController.navigateForward("detail-pokemon");
  }
}
