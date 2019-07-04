import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { StudDetailsComponent } from './new/stud-details/stud-details.component';
import { Routes, RouterModule } from '@angular/router';
import { StudDetailsService } from './new/stud-details.service';

const appRoutes: Routes=[
   { path: '', component: NewComponent},
   { path: 'course', component: CourseDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HeaderComponent,
    HomeComponent,
    CourseDetailsComponent,
    StudDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
