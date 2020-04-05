import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  public host:string = "http://localhost:8080" 
  getProjectionBySalle(salle) {

    let url=salle._links.projections.href.replace("{?projection}","");
    console.log(url+"?projection=p1");
    return this.http.get(url+"?projection=p1");
  }
  getSalleByCinema(cinema) {
    return this.http.get(cinema._links.salles.href);
  }
  
  getCinemaByVille(ville) {
    return this.http.get(ville._links.cinemas.href);
  }
 

  constructor( private http:HttpClient) { 

  }

  public getVilles()
  {
        return this.http.get(this.host+"/villes");
  }
}
