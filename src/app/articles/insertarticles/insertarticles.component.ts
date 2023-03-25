import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { Scategories } from 'src/app/models/scategories';
@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css']
})
export class InsertarticlesComponent {
constructor(private artserv:ArticlesService , private router:Router, private scatService:ScategoriesService){}
articles:Articles =new Articles()
scategorie:Scategories[]
ngOnInit(){
  this.loadscategorie()
}
  ajoutarticle=()=>{
    this.artserv.Addarticle(this.articles).subscribe(data=>this.router.navigate(['/larticle']))
  }
  loadscategorie(){
    return this.scatService.getcategorie().subscribe(data=>
      this.scategorie=data),
      (error:any)=>console.log(error) 
     

  }

}
