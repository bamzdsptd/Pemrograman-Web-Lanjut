import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoursesService {
  getSourses(){
    return [
      {NO : 1, Hobby : "berlari", Keterangan : "lari 1 jam tiap hari"},
      {NO : 2, Hobby : "senam", Keterangan : "senam tiap sore"},
      {NO : 3, Hobby : "bermain musik", Keterangan : "bermain musik saat waktu senggang"}
    ];
  }

  getHobby(){
    return [
      {Hobby : "Hobby",saya : "saya"}
    ];
  }
  constructor() { }
}
