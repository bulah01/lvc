import { Component } from '@angular/core';

interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = [
    {value: 'mean-0', viewValue: 'MEAN'},
    {value: 'mern-1', viewValue: 'MERN'},
    {value: 'mevn-2', viewValue: 'MEVN'},
  ];

  appList: any[] = [ {
    "ID": "1",
    "url": './assets/images/java.png'
},
{
    "ID": "2",
    "url": './assets/images/c.png'
},
{
    "ID": "3",
    "url": './assets/images/python.png'
},
{
    "ID": "4",
    "url": './assets/images/sql.png'
} ];
}
