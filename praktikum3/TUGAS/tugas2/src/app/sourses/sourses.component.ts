import { Component, OnInit } from '@angular/core';
import { SoursesService } from '../sourses.service';

@Component({
  selector: 'app-sourses',
  templateUrl: './sourses.component.html',
  styleUrls: ['./sourses.component.css']
})
export class SoursesComponent implements OnInit {
  Sourses;
  Hobby
  iniTugas = 'INI Tugas Pertama Biodata';
  getiniTugas(){
    return this.iniTugas;
  }

  currentDate = Date.now();

  nama = 'Nama : Maria Sinta Bella';
  alamat = ' Alamat : jln. Mawar gang 10';
  getbiodata(){
    return this.nama;
    return this.alamat;
  }

  constructor(private c:SoursesService) { 
    this.Sourses = c.getSourses();
    this.Hobby = c.getHobby();
  }

  ngOnInit() {
  }

}
