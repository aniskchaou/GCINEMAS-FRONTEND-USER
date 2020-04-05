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
    this.cinemaService.getCinemaByVille(ville).subscribe(data=>{
      this.cinemas=data;
     },err=>{
      console.error(err)
     });
  }

  public getSalleByCinema(cinema)
  {
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
}
