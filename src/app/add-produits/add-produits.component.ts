import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
})
export class AddProduitsComponent implements OnInit {
  newProduit = new Produit();
  message: string;

  constructor(private produitService: ProduitService) {
    this.message = '';
  }
  addProduit() {
    console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Le produit ' + this.newProduit.nomProduit + ' a été ajouté avec succès.';
  }

  ngOnInit(): void {}
}
