import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  constructor(
    private activateRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentProduit = this.produitService.consulterProduit(
      this.activateRoute.snapshot.params['id']
    );
    console.log(this.currentProduit);
  }
  updateProduit() {
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
