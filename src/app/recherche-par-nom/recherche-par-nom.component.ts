import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [],
})
export class RechercheParNomComponent implements OnInit {
  nomProduit!: string;
  searchTerm!: string;
  produits!: Produit[];
  allProduits!: Produit[];
  constructor(private produitService: ProduitService) {}

  rechercherProds() {
    this.produitService.rechercherParNom(this.nomProduit).subscribe((prods) => {
      this.produits = prods;
    });
  }
  ngOnInit(): void {
    this.produitService.listeProduits().subscribe((prods) => {
      console.log(prods);
      this.allProduits = prods;
    });
  }
  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter((item) =>
      item.nomProduit.toLowerCase().includes(filterText)
    );
  }
}
