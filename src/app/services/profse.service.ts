import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfseService {
  public prof:any={};
  public profedit:any={};

  constructor(public http: HttpClient) { }
  public getAllProf():Observable<any>{
    let url = 'http://127.0.0.1:8000/api/Prof';
    return this.http.get<any>(url);
  }
  public deleteptof(id:number):Observable<any>{
    let url = 'http://127.0.0.1:8000/api/Prof/'+id;
    return this.http.delete<any>(url);
  }
  ajouterProf():Observable<any>{
    let url='http://127.0.0.1:8000/api/Prof';
    return this.http.post<any>(url,this.prof);
  }
  editProf(id:number):Observable<any>{
    let url='http://127.0.0.1:8000/api/Prof/'+id;
    return this.http.put<any>(url,this.profedit);
  }
  rechercherProf(id:number):Observable<any>{
    let url='http://127.0.0.1:8000/api/Prof/'+id;
    return this.http.get<any>(url);

  }
}
