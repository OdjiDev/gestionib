

import { PersonelDto } from 'src/app/classes/personel-dto';
import { ProduitDto } from "./produit-dto";

export class StockDto {
  id: number= 0;
  quantite: string= "";
   date: string="";
   prixAchat: number=0;
   produitDto: ProduitDto= new ProduitDto();
   personelDto: PersonelDto= new PersonelDto();

}

