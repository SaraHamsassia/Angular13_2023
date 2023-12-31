import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produits', component: AddProduitsComponent },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'rechercheParCategorie', component: RechercheParCategorieComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'categorie', component: ListeCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
