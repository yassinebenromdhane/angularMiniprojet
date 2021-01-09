import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/Produit.model';
import {ProduitService} from '../produit.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  current = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
    this.current = this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id);
    console.log(this.current);
  }
updateProduit(): void
 {
this.produitService.updateProduit(this.current);
this.router.navigate(['produits']);
}

}
