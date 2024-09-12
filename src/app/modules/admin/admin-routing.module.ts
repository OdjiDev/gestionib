import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCategorieComponent } from './interfaces/categorie/create-categorie/create-categorie.component';
import { ListCategorieComponent } from './interfaces/categorie/list-categorie/list-categorie.component';
import { CreateProduitComponent } from './interfaces/page-produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './interfaces/page-produit/update-produit/update-produit.component';
import { ListProduitComponent } from './interfaces/page-produit/list-produit/list-produit.component';

import { ListFournisseurComponent } from './interfaces/fournisseur/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './interfaces/fournisseur/update-fournisseur/update-fournisseur.component';
import { CreateFournisseurComponent } from './interfaces/fournisseur/create-fournisseur/create-fournisseur.component';
import { CreateAvarieComponent } from './interfaces/avarie/create-avarie/create-avarie.component';
import { ListAvarieComponent } from './interfaces/avarie/list-avarie/list-avarie.component';
import { UpdateAvarieComponent } from './interfaces/avarie/update-avarie/update-avarie.component';
import { UpdatePersonelComponent } from './interfaces/personel/update-personel/update-personel.component';
import { ListPersonelComponent } from './interfaces/personel/list-personel/list-personel.component';

import { CreatePersonelComponent } from './interfaces/personel/create-personel/create-personel.component';
import { CreateStockComponent } from './interfaces/stock/create-stock/create-stock.component';
import { ListStockComponent } from './interfaces/stock/list-stock/list-stock.component';
import { UpdateStockComponent } from './interfaces/stock/update-stock/update-stock.component';

import { reduireStockComponent } from './interfaces/stock/reduire-stock/reduire-stock.component';

import { ListVenteComponent } from './interfaces/gestion-vente/list-vente/list-vente.component';
import { CreateVenteComponent } from './interfaces/gestion-vente/create-vente/create-vente.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
     children: [


       //{ path: 'createdep',component: CreateDepartementComponent  },
        //ROUTES DE CATEGORIE
        { path: 'add-categorie',component: CreateCategorieComponent  },
        { path: 'list-categorie',component: ListCategorieComponent  },
       // { path: 'update-categorie',component: UpdateCatgorieComponent },
       // { path: 'searchcategorie',component: CreateDepartementComponent  },

       //routes de produit
       { path: 'add-produit',component: CreateProduitComponent  },
       { path: 'list-produit',component: ListProduitComponent  },
       { path: 'update-produit',component: UpdateProduitComponent},
      // { path: 'search-categorie',component: CreateDepartementComponent  },

     { path: 'add-fournisseur',component: CreateFournisseurComponent },
     { path: 'list-fournisseur',component: ListFournisseurComponent  },
     { path: 'update-fournisseur',component: UpdateFournisseurComponent},
    // { path: 'searchfournisseur',component: CreateFournisseurComponent  },

     //routes des avaries
     { path: 'add-avarie',component: CreateAvarieComponent },
     { path: 'list-avarie',component: ListAvarieComponent  },
     { path: 'update-avarie',component: UpdateAvarieComponent},
    // { path: 'searchavarie',component: CreateAvarieComponent  },
  //routes des avaries

 // { path: 'searchsociete',component: CreateSocieteComponent  },
   //routes des avaries

  // { path: 'search-contrat',component: CreateContratComponent  },
  //routes des personels
  { path: 'add-personel',component: CreatePersonelComponent },
  { path: 'list-personel',component: ListPersonelComponent  },
  { path: 'update-personel',component: UpdatePersonelComponent},
 // { path: 'search-personel',component: CreatePersonelComponent  },


  //routes des stock
  { path: 'add-stock',component: CreateStockComponent },
  { path: 'list-stock',component: ListStockComponent  },
  { path: 'update-stock/:id',component: UpdateStockComponent},
  { path: 'reduire-stock',component: reduireStockComponent  },


 { path: 'add-vente',component: CreateVenteComponent },
{ path: 'list-vente',component: ListVenteComponent  },
// { path: 'update-vente/:id',component: UpdateVenteComponent},
// { path

    ],

  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
