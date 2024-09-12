import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { MenuComponent } from './composants/menu/menu.component';

import { HomeComponent } from './modules/admin/components/home/home.component';

import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './login/inscrire/inscrire.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route displays LoginComponent
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((a) => a.AdminModule),
  },
  // {
  //   path: 'personel',
  //   loadChildren: () =>
  //     import('./modules/personnel/personel.module').then((per) => per.PersonelModule),
  // },
  // {
  //   path: 'comptable',
  //   loadChildren: () =>
  //     import('./modules/comptable/comptable.module').then((com) => com.ComptableModule),
  // },


// const routes: Routes = [

//   { path: '', component:LoginComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   {
//       path: 'admin',
//       loadChildren: () =>
//             import('./modules/admin/admin.module').then((a) => a.AdminModule),
//   },


//     {
//         path: 'personel',
//         loadChildren: () =>
//               import('./modules/personnel/personel.module').then((et) => et.PersonelModule),
//     },


     //{ path: '**', component: NotFoundComponent },


  {
    path: 'login',
     component: LoginComponent
   },
   {
    path: 'login/inscrire',
     component: InscrireComponent
   },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
