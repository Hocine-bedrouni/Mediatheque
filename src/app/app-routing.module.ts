import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductCardComponent } from './pages/product-page/product-card/product-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:"full"},
  {path: 'home', component: HomePageComponent},
  {path: 'product', component: ProductPageComponent},
  {path: 'card/:id', component: ProductCardComponent},
  // Ne jamais rien mettre en desdous sinon pas pris en compte
  {path: '**', component: NotFoundComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
