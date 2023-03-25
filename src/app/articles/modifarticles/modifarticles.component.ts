import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
  id:any;
articles:Articles=new Articles()
constructor(private artserv :ArticlesService, private route:ActivatedRoute, private router:Router){}
ngOnInit(){
this.id = this.route.snapshot.params['id']
this.artserv.getarticleByID(this.id).subscribe(data=>this.articles=data)

}
modifarticle(){
  this.artserv.updatearticle(this.id,this.articles).subscribe(data=>this.router.navigate(['/larticle']))
}
}
