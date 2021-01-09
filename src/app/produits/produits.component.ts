import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/Produit.model';
import {ProduitService} from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = produitService.listeProduits();
  }


  ngOnInit(): void {
  }
  supprimerProduit(prod: Produit): void{
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }


  }
}
