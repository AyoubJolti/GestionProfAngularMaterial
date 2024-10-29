import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddProfComponent } from './components/add-prof/add-prof.component';
import { FormsModule } from '@angular/forms';
import { EditProfComponent } from './components/edit-prof/edit-prof.component';
import { ListeProfTableComponent } from './components/liste-prof-table/liste-prof-table.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

import {  MatPaginatorModule} from "@angular/material/paginator";
import {  MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {  MatSortModule} from "@angular/material/sort";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { TablePSFComponent } from './components/table-psf/table-psf.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ShowsComponent } from './components/shows/shows.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponentComponent } from './components/dialog-component/dialog-component.component';
import { DialogShowComponent } from './components/dialog-show/dialog-show.component';





// import {  MatSort} from "@angular/material/sort";

// import {  MatPaginatorModule, MatProgressSpinnerModule, 
//   MatSortModule,  } from "@angular/material";






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddProfComponent,
    EditProfComponent,
    ListeProfTableComponent,
    TablePSFComponent,
    ShowsComponent,
    DialogComponentComponent,
    DialogShowComponent
  ],
  entryComponents:[DialogShowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
