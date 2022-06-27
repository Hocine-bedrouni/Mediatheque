import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductCardComponent } from './pages/product-page/product-card/product-card.component';
import { ProductListComponent } from './pages/product-page/product-list/product-list.component';
import { FooterComponent } from './commons/footer/footer.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductCardComponent,
    ProductListComponent,
    FooterComponent,
    NavBarComponent,
    NotFoundComponent,
   HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
