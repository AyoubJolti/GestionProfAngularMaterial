import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import { ProfseService } from 'src/app/services/profse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: any = [];
  constructor(private service: ProfseService) { }

  ngOnInit(): void {
    this.getAllEtudiant();
  }
  getAllEtudiant() {
    this.service.getAllProf().subscribe(res => {
      console.log(res);
      this.data = res;
    })
  }
  delete(id: number) {
    if (confirm('are you sure to delete this')) {


      this.service.deleteptof(id).subscribe(res => {
        console.log(res);
        this.getAllEtudiant();
        alert('prof a ete supprimer');

      })
    }
    else{
      alert('supprision anuler');
    }
  }
}
