import { PersonelService } from 'src/app/services/personel.service';
import { PersonelDto } from 'src/app/classes/personel-dto';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { ProduitDto } from 'src/app/classes/produit-dto';

import { ProduitService } from 'src/app/services/produit.service';
import jsPDF from 'jspdf';
import { StockDto } from 'src/app/classes/stock-dto';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {


//declaration des variables
@ViewChild('content') pdfTable!: ElementRef;
stockDtos: StockDto[] = [];
stockDto: StockDto = new StockDto();
message: any;
style: any;
// Variables pour la pagination
currentPage = 1;
itemsPerPage = 10;
totalItems = 0;
totalPages = 0;
filteredStocks: StockDto[] = [];
datas: StockDto[] = [];
searchText: string = '';
filterBy: string = '';
pages: number[] = [];
constructor(private stockService: StockService) {
  this.getAllStockDtos();
}


delete() {
  this.stockService.deleteStock(this.stockDto.id).subscribe(
    (data) => {
      this.showSuccessMessage('Stock' + this.stockDto.id + ' supprimé avec succès!!' + data);
      this.getAllStockDtos();
      this.stockDto = new StockDto();
    }
  );
}
// deleteStock(stock: StockDto) {
//   this.stockDto = stock;
// }
deleteStock(id: number){
    this.stockService.deleteStock(id).subscribe( data => {
      console.log(data);
      this.getAllStockDtos();
    })
  }



ngOnInit() {
  this.getAllStockDtos();
  this.filteredData();
}

async getAllStockDtos() {
  await this.stockService.getStocks().subscribe(
    (data: StockDto[]) => {
      this.stockDtos = data;
      console.log("Toutes les stocks via data: ",data);
      console.log("Toutes les stocks: ",this.stockDtos);
      this.datas = data;
      console.log("Toutes les stocks via datas: ",this.datas);
      this.totalItems = data.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.filteredData();
    }
  );
}
itemsPerPageChanged() {
  this.currentPage = 1;
  this.filteredData();
  this.getPages();
}

// Ordonner les données en fonction du motif du champ
// tri par ordre alphabétique suit le motif de la colonne
filterByChanged() {

    if (this.filterBy == 'prenom'){
    this.datas.sort((a, b) => a.personelDto.prenom.localeCompare(b.personelDto.prenom));

  }

  this.totalItems = this.datas.length;
  this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  this.filteredData();
  this.getPages();
}
async filterStockLists() {
  // Filter les données en fonction de la recherche sur tout les champs de la classe stock
  try {
    if (this.searchText) {
      this.datas = await this.stockDtos.filter(stock => {
        return stock.personelDto.prenom.toLowerCase().includes(this.searchText.toLowerCase());
      });
    } else {
      this.datas = this.stockDtos;
    }
    this.filteredData();
  } catch (error) {
    console.error(error);
  }
}
// Méthode pour obtenir les numéros de page à afficher dans la pagination
getPages() {
  this.totalItems = this.datas.length;
  this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  this.pages = Array(this.totalPages).fill(0).map((_, index) => index + 1);

}

// Méthode pour changer de page
goToPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.filteredData();
  }
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.filteredData();
  }
}
previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.filteredData();
  }
}

async filteredData() {
  let startPage = (this.currentPage - 1) * this.itemsPerPage;
  let endPage = startPage + this.itemsPerPage;
  this.filteredStocks = this.datas.slice(startPage, endPage);
  this.getPages();
}
generatePDF() {
  const pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(this.pdfTable.nativeElement, {
    callback: (pdf) => {
      pdf.save('stocks.pdf');
    }
  });
}

showSuccessMessage(message: string) {
  this.message = message;
  this.style = "alert alert-danger";
  setTimeout(() => {
    this.message = '';
  }, 5000);
}
}









