import { Component } from '@angular/core';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { Scategories } from 'src/app/models/scategories';

@Component({
  selector: 'app-listscategories',
  templateUrl: './listscategories.component.html',
  styleUrls: ['./listscategories.component.css']
})
export class ListscategoriesComponent {
  scategorie:Scategories[];
  constructor (private catserv:ScategoriesService){ }

  ngOnInit(){
    return this.catserv.ListCategories().subscribe(data => this.scategorie = data),
    (err:any)=>console.log(err)
}
}