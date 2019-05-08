import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(){
    return [
      {id : 0, kendaraan : "Avanza"},
      {id : 1, kendaraan : "Xenia"},
      {id : 2, kendaraan : "Geraldo"}
    ];
  }
  constructor() { }
}
