import { BureauDto } from './../../../../../classes/bureau-dto';
import { BureauService } from './../../../../../services/bureau.service';

import { PersonelService } from 'src/app/services/personel.service';
import { PersonelDto } from 'src/app/classes/personel-dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockDto } from 'src/app/classes/stock-dto';
import { ProduitDto } from 'src/app/classes/produit-dto';
import { ProduitService } from 'src/app/services/produit.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {


produits: ProduitDto[]=[];
bureaus:BureauDto[]=[];
personels:PersonelDto[]=[];
stockDto: StockDto = new StockDto();
    constructor(private stockService:StockService,
      private produitService:ProduitService,
      private personelService:PersonelService,
      private bureauService:BureauService,
      private router: Router) { }

    ngOnInit(): void {
      this.getProduits();
      this.getPersonels();
      this.getBureaus();
    }




    // savestock() {
    //   const stockData = {
    //     id: this.stockDto.id,
    //     quantite: this.stockDto.quantite,
    //     date: this.stockDto.date,
    //     prixAchat: this.stockDto.prixAchat, // Conversion si nécessaire
    //     produitDto: this.stockDto.produitDto,}


    //     this.stockService.addStock(this.stockDto).subscribe( data =>{
    //           console.log(data);
    //           this.goTostockList();
    //         },
    //         error => console.log(error));
    //       }



    //   this.http.post('http://localhost:8080/api/mvtstks', stockData)
    //     .subscribe({
    //       next: (response) => console.log('Stock saved successfully', response),
    //       error: (error) => console.error('Error saving stock', error)
    //     });
    // }




    savestock(){
      this.stockService.addStock(this.stockDto).subscribe( data =>{
        console.log(data);
        this.goTostockList();
      },
      error => console.log(error));
    }

    goTostockList(){
      this.router.navigate(['admin/list-stock']);
    }

    onSubmit(){
      console.log(this.stockDto);
      this.savestock();
    //  this.produitService.deleteProduit(this.stockDto.produitDto.id);
    // this.getDeleteProduit();
    }
    getProduits() {
      this.produitService.getProduits()
        .subscribe(data => {
          this.produits = data;
          console.log("Toutes les produits : ", this.produits);
        });
    }
    getDeleteProduit() {
      this.produitService.deleteProduit(this.stockDto.produitDto.id)
        .subscribe(data => {

        });
    }
    getPersonels() {
      this.personelService.getPersonels()
        .subscribe(data => {
          this.personels = data;
          console.log("Toutes les personels : ", this.personels);
        });
    }

    getBureaus() {
      this.bureauService.getBureaus()
        .subscribe(data => {
          this.bureaus = data;
          console.log("Toutes les bureaus : ", this.bureaus);
        });
    }

  }

