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
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit).subscribe((prod) => {
      this.router.navigate(['produits']);
    });
  }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
    });
  }
}
