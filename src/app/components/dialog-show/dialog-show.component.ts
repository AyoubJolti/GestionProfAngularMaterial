import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfseService } from 'src/app/services/profse.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-show',
  templateUrl: './dialog-show.component.html',
  styleUrls: ['./dialog-show.component.css']
})
export class DialogShowComponent {
  constructor(private service: ProfseService
    ,private activateroute:ActivatedRoute,private route:Router,
    @Inject(MAT_DIALOG_DATA)public data:any,public dialogRef:MatDialog) {
  }
  ngOnInit(): void {
   this.rechercher();
 }
 id:number=0;
 datashow:any=[];
 rechercher(){
   this.activateroute.params.subscribe(res=>{
     this.id=res['id'];
     
   })
   this.service.rechercherProf(this.data.id).subscribe(res=>{
     
     this.datashow=res;

   })
 
 }
 closeDialog(){
  this.dialogRef.closeAll();
 }
}
