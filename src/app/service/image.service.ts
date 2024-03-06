import { Injectable } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageDetailList!: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails:any) {
  this.imageDetailList.push(imageDetails);
  }
}
