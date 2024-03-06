import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { HomeComponent } from './home/home.component';
import { FibonacciService } from './service/fibonacci.service';
import { DataService } from './service/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire/compat";
//import {AngularFireStorageModule} from "@angular/fire/storage";
import { environment } from 'src/environments/environment';
import { ImageComponent } from './task3/image/image.component';
import { ImageListComponent } from './task3/image-list/image-list.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
//import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    HomeComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,  AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireModule,
    ReactiveFormsModule
  ],
  providers: [FibonacciService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
