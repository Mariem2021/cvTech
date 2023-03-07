import { CvComponent } from "./cv/cv.component";
import { RouterModule, Routes } from "@angular/router";



const APP_ROUTING : Routes = [
    {path: 'cv', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: CvComponent},
    {path: 'color', component: CvComponent},

]; 

export const ROUNTING = RouterModule.forRoot(APP_ROUTING);