import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'ts-hello/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses;
  currentDate = Date.now();
title = "belajar angular"
getTitle(){
  return this.title;
}
courses = [
  {id : 0,nama : "dina"},
  {id : 1,nama : "dini"},
  {id : 2,nama : "dinu"},
  {id : 3,nama : "dino"}
]
  constructor(private service : CoursesService) { 
    this.Courses = service.getCourses();
  }

  ngOnInit() {
  }

}
