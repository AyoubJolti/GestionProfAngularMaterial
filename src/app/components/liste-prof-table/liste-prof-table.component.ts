import { Component, OnInit } from '@angular/core';
import { ProfseService } from 'src/app/services/profse.service';
import {  MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {  MatSortModule} from "@angular/material/sort";
import {MatPaginator} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-liste-prof-table',
  templateUrl: './liste-prof-table.component.html',
  styleUrls: ['./liste-prof-table.component.css']
})
export class ListeProfTableComponent implements OnInit {
  data: any = [];
@ViewChild(MatPaginator) paginator :any = MatPaginator;


  constructor(private service: ProfseService) { 
  }
  ngOnInit(): void {

    this.getAllEtudiant();


  }
  getAllEtudiant() {
    this.service.getAllProf().subscribe(res => {
      console.log(res);
      this.data = res;
      this.data.paginator=this.paginator;

      
    })
  }

  
  displayedColumns: string[] = ['nom', 'prenom', 'note'];
  // dataSource = this.data;

  applyFilter(e:any){

  }
  
  

}


