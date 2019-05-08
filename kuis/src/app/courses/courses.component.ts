import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Nama = 'BAMBANG DWI NUR RIZAL';
  getNama(){
    return this.Nama;
  }

  Ket1 = 'Menggunakan stringinterpolar(databinding)';
  getKet1(){
    return this.Ket1;
  }

  Ket2 = 'Menggunakan EventBinding';
  getKet2(){
    return this.Ket2;
  }

  nama = ' ';
  pass = ' ';
  onKeyUp(){
    
  }

  alamat = ' ';

  onSave($event){
    console.log("JL. Mawar 3", $event)
  }

  constructor() { }

  ngOnInit() {
  }

}
