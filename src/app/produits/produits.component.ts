import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits?: Produit[];
  constructor(private produitService: ProduitService) {}
  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.produitService.supprimerProduit(p);
    }
    //console.log(p);
  }

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }
}
