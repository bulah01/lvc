import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { JavaComponent } from "./java/java.component";
import { MEANComponent } from "./mean/mean.component";
import { MERNComponent } from "./mern/mern.component";
import { MEVNComponent } from "./mevn/mevn.component";
import { RestConnectComponent } from "./rest-connect/rest-connect.component";

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'courses', component: CoursesComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'java', component: JavaComponent },
    { path: 'mean', component: MEANComponent },
    { path: 'mern', component: MERNComponent },
    { path: 'mevn', component: MEVNComponent },
    { path: 'rest-connect', component: RestConnectComponent }
];

export const routes = RouterModule.forRoot(router);