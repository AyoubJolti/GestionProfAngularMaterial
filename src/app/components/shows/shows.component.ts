import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfseService } from 'src/app/services/profse.service';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {
  nom:any='';
  prenom:any='';
  note:any=0;
  data:any=[];
  constructor(private service: ProfseService,private activateroute:ActivatedRoute,private route:Router) {
   }
   ngOnInit(): void {
    this.rechercher();
  }
  id:number=0;
  rechercher(){
    this.activateroute.params.subscribe(res=>{
      this.id=res['id'];
      
    })
    this.service.rechercherProf(this.id).subscribe(res=>{
      this.nom=res.nom;
      this.prenom=res.prenom;

      this.note=res.note;
      this.data=res;

    })
  
  }
}
