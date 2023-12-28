import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
})
export class AddProduitsComponent implements OnInit {
  newProduit = new Produit();
  message: string;
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  constructor(private produitService: ProduitService, private router: Router) {
    this.message = '';
  }
  addProduit() {
    console.log(this.newIdCat);
    this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Le produit ' + this.newProduit.nomProduit + ' a été ajouté avec succès.';
    this.router.navigate(['produits']);
  }

  ngOnInit(): void {
    this.categories = this.produitService.listeCategories();
  }
}
