import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/Produit.model';
import {ProduitService} from '../produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
 constructor(private produitService: ProduitService) { }

addProduit(): void{

this.produitService.ajouterProduit(this.newProduit);
}

  ngOnInit(): void {
  }


}
