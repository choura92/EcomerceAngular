import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';

import { ModifcategoriesComponent } from './categories/modifcategories/modifcategories.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';


import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { MenuComponent } from './menu/menu.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';

import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
@NgModule({
  declarations: [
    AppComponent,
    ListcategoriesComponent,
   
    ModifcategoriesComponent,
    InsertarticlesComponent,
    ModifarticlesComponent,

    ListarticlesComponent,
    ListscategoriesComponent,
    MenuComponent,
    ListarticlescardComponent,
    ListarticlestableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
