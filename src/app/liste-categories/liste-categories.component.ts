import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styles: [],
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };
  ajout: boolean = true;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerCategories();
  }
  chargerCategories() {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats._embedded.categories;
    });
  }

  categorieUpdated(cat: Categorie) {
    console.log('categorieUpdated(cat: Categorie)', cat);
    this.produitService
      .ajouterCategorie(cat)
      .subscribe(() => this.chargerCategories());
  }
  updateCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout = false;
  }
  supprimerCategorie(c: Categorie) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerCategorie(c.idCat).subscribe(() => {
        console.log('catégorie supprimé');
        this.chargerCategories();
      });
  }
}
