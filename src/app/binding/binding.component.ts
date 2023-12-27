import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  titre: String = 'Vente de produits';
  status: boolean = false;
  nom: String = 'Sara Hamsassia';

  constructor() {}

  ngOnInit(): void {}
  changerTitre() {
    this.titre = 'Nouvelle vente de produits !';
  }
}
