import { Component, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CinemaService } from 'src/app/services/cinema-service.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public villes;
  public cinemas;
  public salles;
  public villeActuelle;
  public currentProjection;
  public currentCinema;
  public selectedTickets;


  constructor(public cinemaService:CinemaService) { 
    
  }

  ngOnInit() {
    this.cinemaService.getVilles().subscribe(data=>{
     this.villes=data;
    },err=>{
     console.error(err)
    });
  }

  public getCinemaByVille(ville)
  {
    this.villeActuelle=ville;
    this.salles=undefined;
    this.cinemaService.getCinemaByVille(ville).subscribe(data=>{
      this.cinemas=data;
     },err=>{
      console.error(err)
     });
  }

  public getSalleByCinema(cinema)
  {
    this.currentCinema=cinema;
    this.cinemaService.getSalleByCinema(cinema).subscribe(data=>{
      this.salles=data;
      this.salles._embedded.salles.forEach(salle=>{
        this.cinemaService.getProjectionBySalle(salle).subscribe(data2=>{
          salle.projections=data2;
          console.log(data2);
         },err=>{
          console.error(err)
         });
      });
     },err=>{
      console.error(err)
     });
  }

  payTickets(formData)
  {
    let tickets=[];
    
    this.selectedTickets.forEach(t=>{
      tickets.push(t.id);
    });
    formData.tickets=tickets;
    console.log(formData);
    this.selectedTickets.forEach(t=>{
      this.cinemaService.payerTickets(formData).subscribe(data=>{
        alert("ticket est réservé avec succés");
        this.getPlaceTicketsByProjection(this.currentProjection);
       },err=>{
        console.error(err)
       });
    });
  }
  getTicketClass(ticket){
    let str="btn ticket  ";
    if(ticket.reserve==true)
    {
      str+="btn-danger";
    }else if(ticket.selected)
    {
      str+="btn-warning";
    }else
    {
      str+="btn-success";
    }
    return str;
  }
  selectTicket(ticket){
    if(!ticket.selected)
    {
      ticket.selected=true;
      this.selectedTickets.push(ticket);
    }else
    {
      ticket.selected=false;
      this.selectedTickets.slice(this.selectedTickets.indexOf(ticket),1);
    }
    
  }
  getPlaceTicketsByProjection(projection)
  {
     this.currentProjection=projection;
     
     this.cinemaService.getPlaceTicketsByProjection(projection).subscribe(data=>{
      this.currentProjection.tickets=data;
      this.selectedTickets=[];
     },err=>{
      console.error(err)
     });
  }
}
