import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeCvComponent } from './liste-cv/liste-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { StyleComponent } from './style/style.component';
import { ClassComponent } from './class/class.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { PremierService } from './premier.service';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ROUNTING } from './app.routing';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUNTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
