import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host:string = "http://localhost:8080" ;

  constructor( private http:HttpClient) { 

  }

  //payer
  payerTickets(formData) {
   return this.http.post(this.host+"/payerticket",formData);
  }
   //tickets
  getPlaceTicketsByProjection(projection: any): any {
    let url=projection._links.tickets.href.replace("{?projection}","");
    return this.http.get(url+"?projection=ticket");
  }
  //projections
  getProjectionBySalle(salle) {
    let url=salle._links.projections.href.replace("{?projection}","");
    console.log(url+"?projection=p1");
    return this.http.get(url+"?projection=p1");
  }

  //salles
  getSalleByCinema(cinema) {
    return this.http.get(cinema._links.salles.href);
  }
  //cinamas
  getCinemaByVille(ville) {
    return this.http.get(ville._links.cinemas.href);
  }
 
  //villes
  public getVilles()
  {
        return this.http.get(this.host+"/villes");
  }
}
