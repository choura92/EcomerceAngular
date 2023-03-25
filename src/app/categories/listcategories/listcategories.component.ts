import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/app/models/categorie';
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  categorie:Categorie[];
  constructor (private catserv:CategorieService){ }

  ngOnInit(){
    return this.catserv.ListCategories().subscribe(data => this.categorie = data),
    (err:any)=>console.log(err)
    
  }
}
