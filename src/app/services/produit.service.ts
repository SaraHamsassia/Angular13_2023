import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits: Produit[];
  categories: Categorie[];
  constructor() {
    this.categories = [
      { idCat: 1, nomCat: 'PC' },
      { idCat: 2, nomCat: 'Imprimante' },
      { idCat: 3, nomCat: 'Boulangerie' },
    ];
    this.produits = [
      {
        idProduit: 1,
        nomProduit: 'PC Asus',
        prixProduit: 3000.6,
        dateCreation: new Date('01/14/2011'),
        categorie: { idCat: 1, nomCat: 'PC' },
      },
      {
        idProduit: 2,
        nomProduit: 'Imprimante Epson',
        prixProduit: 450,
        dateCreation: new Date('12/17/2010'),
        categorie: { idCat: 2, nomCat: 'Imprimante' },
      },
      {
        idProduit: 3,
        nomProduit: 'Tablette Samsung',
        prixProduit: 900.123,
        dateCreation: new Date('02/20/2020'),
        categorie: { idCat: 1, nomCat: 'PC' },
      },
      {
        idProduit: 4,
        nomProduit: 'Baguette',
        prixProduit: 1.5,
        dateCreation: new Date('02/20/2023'),
        categorie: { idCat: 3, nomCat: 'Boulangerie' },
      },
    ];
  }

  listeProduits(): Produit[] {
    return this.produits;
  }

  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }

  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    this.produits.forEach((cur, index) => {
      if (prod.idProduit === cur.idProduit) {
        this.produits.splice(index, 1);
      }
    });
  }

  consulterProduit(id: number): Produit {
    return this.produits.find((p) => p.idProduit == id)!;
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }
}
