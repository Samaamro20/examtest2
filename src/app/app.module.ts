import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { CourseComponent } from './course/course.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { CourseService } from './course/course.service';
import { StudentsComponent } from './students/students.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    LandmarksComponent,
    StudentsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
