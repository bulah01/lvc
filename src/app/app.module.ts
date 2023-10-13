import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JavaComponent } from './java/java.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { MEANComponent } from './mean/mean.component';
import { MERNComponent } from './mern/mern.component';
import { MEVNComponent } from './mevn/mevn.component';
import { MaterialModule } from './shared/material.module';
import { RestConnectComponent } from './rest-connect/rest-connect.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    CoursesComponent,
    RegistrationComponent,
    HomeComponent,
    ContactUsComponent,
    GalleryComponent,
    JavaComponent,
    DotNetComponent,
    MEANComponent,
    MERNComponent,
    MEVNComponent,
    RestConnectComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
