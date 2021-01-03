import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CinemaService {


  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    })
  };
  public host: string = "https://cinemas-anis-kchaou.herokuapp.com/";


  constructor(private http: HttpClient) {

  }

  //payer
  payerTickets(formData) {
    return this.http.post(this.host + "/payerticket", formData);
  }

  //tickets
  getPlaceTicketsByProjection(projection: any): any {
    let url = projection._links.tickets.href.replace("{?projection}", "");
    return this.http.get(url + "?projection=ticket");
  }

  //projections
  getProjectionBySalle(salle) {
    let url = salle._links.projections.href.replace("{?projection}", "");
    return this.http.get(url + "?projection=p1");
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
  public getVilles() {
    return this.http.get(this.host + "/villes", this.httpOptions);
  }


}
