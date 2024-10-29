import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProfseService } from 'src/app/services/profse.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  styleUrls: ['./add-prof.component.css']
})
export class AddProfComponent implements OnInit {
  nom:string='';
  prenom:string='';
  note:any;


  constructor(private service: ProfseService,
    private activateroute:ActivatedRoute,private route:Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  ajouterPro(){
    this.service.prof['nom']=this.nom;
    this.service.prof['prenom']=this.prenom;
    this.service.prof['note']=this.note;


    this.service.ajouterProf().subscribe(res=>{
      console.log(res);
      this.route.navigate(['']);

      

      
    })
    
    

  }
  
  closeDialog(){
    this.dialog.closeAll();

  }

  

}
