import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { TextComponent } from './text/text.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroComponent } from './hero/hero.component';
import { BioComponent } from './bio/bio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { OutroComponent } from './outro/outro.component';
import { NextChapterComponent } from './next-chapter/next-chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    TextComponent,
    GalleryComponent,
    HeroComponent,
    BioComponent,
    PageNotFoundComponent,
    MapComponent,
    OutroComponent,
    NextChapterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
