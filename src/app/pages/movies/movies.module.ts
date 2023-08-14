import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { AddComponent } from './add/add.component';
import { NgbActiveModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbModalModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    FormsModule,
  ],
  providers: [
    NgbActiveModal
  ]
})
export class MoviesModule { }