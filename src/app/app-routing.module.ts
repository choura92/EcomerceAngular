import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
const routes: Routes = [

{path:"larticle", component:ListarticlesComponent},
{path:"lcategorie", component:ListcategoriesComponent},
{path:"lscategorie", component:ListscategoriesComponent},
{path:"lcardart", component:ListarticlescardComponent},
{path:"insertart", component:InsertarticlesComponent},
{path:"listarticletable",component:ListarticlestableComponent},
{path:"editarticle/:id",component:ModifarticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
