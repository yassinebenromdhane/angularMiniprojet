import { Injectable } from '@angular/core';
import {Produit} from './model/Produit.model';

@Injectable({
providedIn: 'root'
})
export class ProduitService {
produits: Produit[];
  private produit: Produit;
constructor() {
 this.produits = [
   {idProduit : 1, nomProduit : 'Blender', prixProduit : 180.200, dateCreation : new Date('01/14/2010'),
     puissence : '300W'},
   {idProduit : 2, nomProduit : 'Seche a Cheuveux', prixProduit : 70.50, dateCreation : new Date('12/17/2011'), puissence : '500W'},
   {idProduit : 3, nomProduit : 'Plaque', prixProduit : 85.00, dateCreation : new Date('05/20/2013'), puissence : '1000W'},
   {idProduit : 4, nomProduit : 'Machine a Laver', prixProduit : 560.370, dateCreation : new Date('08/20/2015'), puissence : '900W'},
   {idProduit : 5, nomProduit : 'Batteur', prixProduit : 55.200, dateCreation : new Date('02/24/2019'), puissence : '800W'}
 ];
}
listeProduits(): Produit[] {
  return this.produits;
}

ajouterProduit( prod: Produit): void{
this.produits.push(prod);
}
supprimerProduit( prod: Produit): void{
const index = this.produits.indexOf(prod, 0);
if (index > -1) {
this.produits.splice(index, 1);
}
}
consulterProduit(id: number): Produit{
this.produit = this.produits.find(p => p.idProduit === id);
return this.produit;
}
updateProduit(p: Produit): void
{
this.supprimerProduit(p);
this.ajouterProduit(p);
}


}
