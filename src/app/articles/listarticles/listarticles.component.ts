import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';
@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
articles:Articles[]
constructor(private artserv:ArticlesService){}
ngOnInit(){
  this.Listart()
}
Listart(){
return this.artserv.getarticles().subscribe(data=>
 this.articles=data),
 (error:any)=>console.log(error) 
  
  
}
supparticle(id:object){
  return this.artserv.Deletearticle(id).subscribe(data =>{this.Listart()})
}
}
