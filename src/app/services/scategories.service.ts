import { Injectable } from '@angular/core';
import { Scategories } from '../models/scategories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseurl="http://localhost:3001/api/categories";

  constructor(private http:HttpClient) { }
  ListCategories():Observable<Scategories[]>{
  return this.http.get<Scategories[]>(this.baseurl);
}
getcategorie():Observable<Scategories[]>{
  return this.http.get<Scategories[]>(this.baseurl)
}
}