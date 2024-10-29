import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfseService } from 'src/app/services/profse.service';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {
  nom:any='';
  prenom:any='';
  note:any=0;
  constructor(private service: ProfseService,private activateroute:ActivatedRoute,private route:Router) { }
  id:number=0;
  ngOnInit(): void {
    this.rechercher();
  }
  rechercher(){
    this.activateroute.params.subscribe(res=>{
      this.id=res['id'];
      
    })
    this.service.rechercherProf(this.id).subscribe(res=>{
      this.nom=res.nom;
      this.prenom=res.prenom;

      this.note=res.note;

    })
  
  }
  
  
    
   
  Edit(){
    this.service.profedit['nom']=this.nom;
    this.service.profedit['prenom']=this.prenom;
    this.service.profedit['note']=this.note;
    this.service.editProf(this.id).subscribe(res=>{
console.log(res);
this.route.navigate(['']);
    })

  }

}
