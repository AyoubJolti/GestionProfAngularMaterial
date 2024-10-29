import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { AddProfComponent } from './components/add-prof/add-prof.component';
import { EditProfComponent } from './components/edit-prof/edit-prof.component';
import { ListeProfTableComponent } from './components/liste-prof-table/liste-prof-table.component';
import { TablePSFComponent } from './components/table-psf/table-psf.component';
import { ShowsComponent } from './components/shows/shows.component';


const approuter = [
  { path: '', component: TablePSFComponent },
  { path: 'AjouterProf', component: AddProfComponent },
  { path: 'EditProf/:id', component: EditProfComponent },
  { path: 'goToMareile', component: ListeProfTableComponent },
  { path: 'Tables', component: TablePSFComponent },
  { path: 'shows/:id', component: ShowsComponent },





  
  


  
  

  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(approuter)

  ]
})
export class AppRoutingModule { }
