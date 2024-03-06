import { Component } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage"
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {

  constructor(private service:ImageService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
