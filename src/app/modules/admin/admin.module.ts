import { CreateProduitComponent } from './interfaces/page-produit/create-produit/create-produit.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CategorieDetailsComponent } from './interfaces/categorie/categorie-details/categorie-details.component';
import { ListCategorieComponent } from './interfaces/categorie/list-categorie/list-categorie.component';
import { CreateCategorieComponent } from './interfaces/categorie/create-categorie/create-categorie.component';
import { ListProduitComponent } from './interfaces/page-produit/list-produit/list-produit.component';

import { ListFournisseurComponent } from './interfaces/fournisseur/list-fournisseur/list-fournisseur.component';
import { UpdateFournisseurComponent } from './interfaces/fournisseur/update-fournisseur/update-fournisseur.component';
import { CreateFournisseurComponent } from './interfaces/fournisseur/create-fournisseur/create-fournisseur.component';
import { DetailFournisseurComponent } from './interfaces/fournisseur/detail-fournisseur/detail-fournisseur.component';
import { SearchFournisseurComponent } from './interfaces/fournisseur/search-fournisseur/search-fournisseur.component';
import { CreateAvarieComponent } from './interfaces/avarie/create-avarie/create-avarie.component';
import { UpdateAvarieComponent } from './interfaces/avarie/update-avarie/update-avarie.component';
import { ListAvarieComponent } from './interfaces/avarie/list-avarie/list-avarie.component';
import { DetailAvarieComponent } from './interfaces/avarie/detail-avarie/detail-avarie.component';
import { SearchAvarieComponent } from './interfaces/avarie/search-avarie/search-avarie.component';
import { CreatePersonelComponent } from './interfaces/personel/create-personel/create-personel.component';
import { UpdatePersonelComponent } from './interfaces/personel/update-personel/update-personel.component';
import { ListPersonelComponent } from './interfaces/personel/list-personel/list-personel.component';
import { DetailPersonelComponent } from './interfaces/personel/detail-personel/detail-personel.component';

import { CreateAffectationComponent } from './interfaces/affectation/create-affectation/create-affectation.component';
import { ListAffectationComponent } from './interfaces/affectation/list-affectation/list-affectation.component';
import { DetailAffectationComponent } from './interfaces/affectation/detail-affectation/detail-affectation.component';
import { UpdateAffectationComponent } from './interfaces/affectation/update-affectation/update-affectation.component';
import { FieldErrorDisplayComponent } from 'src/app/field-error-display/field-error-display.component';

import { UpdateProduitComponent } from './interfaces/page-produit/update-produit/update-produit.component';
import { ListStockComponent } from './interfaces/stock/list-stock/list-stock.component';
import { CreateStockComponent } from './interfaces/stock/create-stock/create-stock.component';
import { UpdateStockComponent } from './interfaces/stock/update-stock/update-stock.component';
import { DetailStockComponent } from './interfaces/stock/detail-stock/detail-stock.component';
import { reduireStockComponent,} from './interfaces/stock/reduire-stock/reduire-stock.component';
import { ListVenteComponent } from './interfaces/gestion-vente/list-vente/list-vente.component';
import { CreateVenteComponent } from './interfaces/gestion-vente/create-vente/create-vente.component';
import { UpdateVenteComponent } from './interfaces/gestion-vente/update-vente/update-vente.component';
import { ListDepotComponent } from './interfaces/portefeuil/list-depot/list-depot.component';
import { ListRetraitComponent } from './interfaces/portefeuil/list-retrait/list-retrait.component';
import { ListEtatComponent } from './interfaces/portefeuil/list-etat/list-etat.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    CreateCategorieComponent,
    CreateCategorieComponent,
    CategorieDetailsComponent,
    ListCategorieComponent,
    ListProduitComponent,
  UpdateProduitComponent,
    CreateProduitComponent,

    CreateProduitComponent,
    ListFournisseurComponent,
    UpdateFournisseurComponent,
    CreateFournisseurComponent,
    DetailFournisseurComponent,
    SearchFournisseurComponent,


    CreateAvarieComponent,
    UpdateAvarieComponent,
    ListAvarieComponent,
    DetailAvarieComponent,
    SearchAvarieComponent,
    UpdatePersonelComponent,
    ListPersonelComponent,
    DetailPersonelComponent,

    FieldErrorDisplayComponent,
    CreateAffectationComponent,
    ListAffectationComponent,
    DetailAffectationComponent,
    UpdateAffectationComponent,

   ListStockComponent,
   CreateStockComponent,
   UpdateStockComponent,
   DetailStockComponent,
reduireStockComponent,
ListVenteComponent,
CreateVenteComponent,
UpdateVenteComponent,
ListDepotComponent,
ListRetraitComponent,
ListEtatComponent,
reduireStockComponent,
CreatePersonelComponent,
reduireStockComponent,
  ],

  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
