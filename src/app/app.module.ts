import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ProduitsComponent,
    AddProduitsComponent,
    UpdateProduitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
