import { Component, Input } from '@angular/core';
import { Guitar } from 'src/app/models/guitar.model';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent {


  @Input() guitars: Guitar[] = [];

}
