import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
    {
        path: '',
        data: { title: 'Movies List' },
        component: ListComponent
    },
    {
        path: 'movies/add',
        data: { title: 'Add Movie' },
        component: AddComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }