import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { ImageComponent } from './task3/image/image.component';
import { ImageListComponent } from './task3/image-list/image-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'task1',component:Task1Component},
  {path:'task2',component:Task2Component},
  //{path:'task3',component:Task3Component},
   { path:'', redirectTo: 'task3/upload', pathMatch: 'full' },
  
  {
    path: 'task3', component: Task3Component, children: [
      { path: 'upload', component: ImageComponent },
      { path: 'list', component: ImageListComponent }
    ]
  },
  //{ path:'task3', redirectTo: 'task3/upload', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
