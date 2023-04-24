import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon/'; // get everything about ONE pokemon
  pokename: string | null = '';
  pokeDetails: any = undefined;

  avatarButtonStyle = {
    'height': '60vw',
    'width': '60vw',
    'max-height': '200px',
    'max-width': '200px',
    'margin': '0 auto',
    'background-color': 'white',
    'border-radius': '50%',
    'box-shadow': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    // read parameter from web address
    this.pokename = this.route.snapshot.paramMap.get('pokename');
    this.http.get<any>(this.url + this.pokename)
      .pipe(take(1))
      .subscribe(pokeData => this.pokeDetails = pokeData);
  }

  async clickAvatar(pokeName: string) {
    const toast = await this.toastController.create(
      {
        message: `${pokeName}: "Ouch!"`,
        position: 'top',
        color: 'dark',
        duration: 3000,
      }
    );
    toast.present();
  }

}
