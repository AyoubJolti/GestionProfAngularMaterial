import { Component, OnInit } from '@angular/core';
import { ProfseService } from 'src/app/services/profse.service';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { AddProfComponent } from '../add-prof/add-prof.component';
import { ShowsComponent } from '../shows/shows.component';
import { DialogShowComponent } from '../dialog-show/dialog-show.component';
import { HeaderComponent } from '../header/header.component';




@Component({
  selector: 'app-table-psf',
  templateUrl: './table-psf.component.html',
  styleUrls: ['./table-psf.component.css']
})
export class TablePSFComponent {
  data: any;
  FiltreInput: any;
  dataSource: any;
  message: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;


  constructor(private service: ProfseService,
    private activateroute: ActivatedRoute, private route: Router,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.getAllEtudiant();


  }
  displayedColumns: string[] = ['nom', 'prenom', 'note', 'delete', 'Edit', 'show'];


  getAllEtudiant() {
    this.service.getAllProf().subscribe(res => {
      console.log(res);
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.sort = this.Sort;
      this.dataSource.paginator = this.paginator;







    })
  }
  ////pour filter les donnes
  Filtrer(event: any) {
    this.dataSource.filter = this.FiltreInput;

  }
 

  ////click sur un row dans le tableau 
  clicke(row: any) {
    console.log(row.nom + " " + row.prenom + "" + row.note);
    this.message = "nom : " + row.nom + " prenom : " + row.prenom + " note :" + row.note;
    // this.route.navigate(['../shows/'+row.id]);
  }
  Delete(id: any) {
    if (confirm('are you sure to delete this')) {


      this.service.deleteptof(id).subscribe(res => {
        console.log(res);
        this.getAllEtudiant();
        alert('prof a ete supprimer');

      })
    }
    else {
      alert('supprision anuler');
    }
  }
  openDialogAjouter() {
    this.dialog.closeAll();
    const dialogRef=this.dialog.open(AddProfComponent,
       {
        width: '200px',
        panelClass: 'ayoub',
        
        
      
    });
    dialogRef.afterClosed().subscribe(res=>{
      this.getAllEtudiant();
    });

   
    
  
  }
  openDialog(ide:any) {
   
    this.dialog.closeAll();
    const dialogRef=this.dialog.open(DialogShowComponent,
       {
        
        width: '200px',
        panelClass: 'ayoub',
        
        
      data: {
        id: ide
      }
      
    }); setTimeout(() => {
      dialogRef.close();
    }, 3000);
   
   
    
  
  }
 
  
  Dialog(){
const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
   
     const dialogRef= this.dialog.open(HeaderComponent,dialogConfig);
     setTimeout(() => {
      dialogRef.close();
    }, 3000);
  }

}



