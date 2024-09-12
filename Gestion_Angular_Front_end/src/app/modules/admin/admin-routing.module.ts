import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCategorieComponent } from './interfaces/categorie/create-categorie/create-categorie.component';
import { ListCategorieComponent } from './interfaces/categorie/list-categorie/list-categorie.component';
import { CreateProduitComponent } from './interfaces/page-produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './interfaces/page-produit/update-produit/update-produit.component';
import { ListProduitComponent } from './interfaces/page-produit/list-produit/list-produit.component';
import { ListBureauComponent } from './interfaces/Bureau/list-bureau/list-bureau.component';
import { CreateBureauComponent } from './interfaces/Bureau/create-bureau/create-bureau.component';
import { UpdateBureauComponent } from './interfaces/Bureau/update-bureau/update-bureau.component';
import { UpdateDemandeComponent } from './interfaces/demande/update-demande/update-demande.component';
import { ListDemandeComponent } from './interfaces/demande/list-demande/list-demande.component';
import { CreateDemandeComponent } from './interfaces/demande/create-demande/create-demande.component';
import { CreateFactureComponent } from './interfaces/facture/create-facture/create-facture.component';
import { ListFactureComponent } from './interfaces/facture/list-facture/list-facture.component';
import { UpdateFactureComponent } from './interfaces/facture/update-facture/update-facture.component';
import { ListFournisseurComponent } from './interfaces/fournisseur/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './interfaces/fournisseur/update-fournisseur/update-fournisseur.component';
import { CreateFournisseurComponent } from './interfaces/fournisseur/create-fournisseur/create-fournisseur.component';
import { CreateAvarieComponent } from './interfaces/avarie/create-avarie/create-avarie.component';
import { ListAvarieComponent } from './interfaces/avarie/list-avarie/list-avarie.component';
import { UpdateAvarieComponent } from './interfaces/avarie/update-avarie/update-avarie.component';
import { UpdateSocieteComponent } from './interfaces/societe/update-societe/update-societe.component';
import { ListSocieteComponent } from './interfaces/societe/list-societe/list-societe.component';
import { CreateSocieteComponent } from './interfaces/societe/create-societe/create-societe.component';
import { CreateContratComponent } from './interfaces/contrat/create-contrat/create-contrat.component';
import { ListContratComponent } from './interfaces/contrat/list-contrat/list-contrat.component';
import { UpdateContratComponent } from './interfaces/contrat/update-contrat/update-contrat.component';
import { UpdatePersonelComponent } from './interfaces/personel/update-personel/update-personel.component';
import { ListPersonelComponent } from './interfaces/personel/list-personel/list-personel.component';

import { CreatePersonelComponent } from './interfaces/personel/create-personel/create-personel.component';
import { CreateStockComponent } from './interfaces/stock/create-stock/create-stock.component';
import { ListStockComponent } from './interfaces/stock/list-stock/list-stock.component';
import { UpdateStockComponent } from './interfaces/stock/update-stock/update-stock.component';
import { CreateDepartementComponent } from './interfaces/Departement/create-departement/create-departement.component';
import { ListDepartementComponent } from './interfaces/Departement/list-departement/list-departement.component';
import { UpdateDepartementComponent } from './interfaces/Departement/update-departement/update-departement.component';
import { DetailDepartementComponent } from './interfaces/Departement/detail-departement/detail-departement.component';
import { CreateReparationComponent } from './interfaces/reparation/create-reparation/create-reparation.component';
import { ListReparationComponent } from './interfaces/reparation/list-reparation/list-reparation.component';
import { UpdateReparationComponent } from './interfaces/reparation/update-reparation/update-reparation.component';
import { CreateUserComponent } from './interfaces/user/create-user/create-user.component';
import { ListUserComponent } from './interfaces/user/list-user/list-user.component';
import { UpdateUserComponent } from './interfaces/user/update-user/update-user.component';
import { CreateRoleComponent } from './interfaces/user/create-role/create-role.component';
import { ListRoleComponent } from './interfaces/user/list-role/list-role.component';
import { UpdateRoleComponent } from './interfaces/user/update-role/update-role.component';
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


       //routes de bureau
       { path: 'add-bureau',component: CreateBureauComponent },
       { path: 'list-bureau',component: ListBureauComponent  },
       { path: 'update-bureau/:id',component: UpdateBureauComponent},
       { path: 'detail-bureau/:id',component: DetailDepartementComponent  },

      //routes de departement
      { path: 'add-departement',component: CreateDepartementComponent },
      { path: 'list-departement',component: ListDepartementComponent  },
      { path: 'update-departement/:id',component: UpdateDepartementComponent},
       {path:'detail-departement',component:DetailDepartementComponent},
     // { path: 'search-categorie',component: CreateDepartementComponent  },

    //routes de departement
      { path: 'add-demande',component: CreateDemandeComponent },
      { path: 'list-demande',component: ListDemandeComponent  },
      { path: 'update-demande',component: UpdateDemandeComponent},
     // { path: 'searchdemande',component: CreateDemandeComponent  },
      //routes de facture
      { path: 'add-facture',component: CreateFactureComponent },
      { path: 'list-facture',component: ListFactureComponent  },
      { path: 'update-facture',component: UpdateFactureComponent},
     // { path: 'searchfacture',component: CreateFactureComponent  },
     //routes de fournisseur
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
  { path: 'add-societe',component: CreateSocieteComponent },
  { path: 'list-societe',component: ListSocieteComponent  },
  { path: 'update-societe',component: UpdateSocieteComponent},
 // { path: 'searchsociete',component: CreateSocieteComponent  },
   //routes des avaries
   { path: 'add-contrat',component: CreateContratComponent },
   { path: 'list-contrat',component: ListContratComponent  },
   { path: 'update-contrat',component: UpdateContratComponent},
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
  //routes des stock
  { path: 'add-reparation',component: CreateReparationComponent },
  { path: 'list-reparation',component: ListReparationComponent  },
  { path: 'update-reparation/:id',component: UpdateReparationComponent},
 // { path: 'searchreparation',component: CreateReparationComponent  },


  //routes des user
  { path: 'add-user',component: CreateUserComponent },
  { path: 'list-user',component: ListUserComponent  },
  { path: 'update-user/:id',component: UpdateUserComponent},
 // { path: 'searchuser',component: CreateUserComponent  },
 //routes des role
 { path: 'add-role',component: CreateRoleComponent },
 { path: 'list-role',component: ListRoleComponent  },
 { path: 'update-role/:id',component: UpdateRoleComponent},
// { path

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
