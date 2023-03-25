import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articles } from '../models/articles';
import { ListarticlesComponent } from '../articles/listarticles/listarticles.component';
import { InsertarticlesComponent } from '../articles/insertarticles/insertarticles.component';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
baseurl="http://localhost:3001/api/articles"
  constructor(private http:HttpClient) { }
  getarticles():Observable<Articles[]>{
    return this.http.get<Articles[]>(this.baseurl)
  }
  Deletearticle(id:object):Observable<Articles>
  {
    return this.http.delete<Articles>(this.baseurl + '/' + id)
  }
  Addarticle(art:Articles):Observable<Articles>
  {
  return this.http.post<Articles>(this.baseurl,art)
  }
  updatearticle(id:object,art:Articles): Observable<Articles>
{
  return this.http.put<Articles>(this.baseurl+'/'+id,art)
}
getarticleByID(id:object):Observable<Articles>
  {
    return this.http.get<Articles>(this.baseurl + '/' + id)
  }
}
