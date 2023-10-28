import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { TextComponent } from './text/text.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroComponent } from './hero/hero.component';
import { BioComponent } from './bio/bio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { NextChapterComponent } from './next-chapter/next-chapter.component';
import { OutroComponent } from './outro/outro.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'intro/1', component: TextComponent },
  { path: 'intro/2', component: GalleryComponent },
  { path: 'intro/3', component: NextChapterComponent },
  { path: 'chapter-1', component: HeroComponent },
  { path: 'chapter-1/1', component: TextComponent },
  { path: 'chapter-1/2', component: BioComponent },
  { path: 'chapter-1/3', component: GalleryComponent },
  { path: 'chapter-1/4', component: MapComponent },
  { path: 'chapter-1/5', component: NextChapterComponent },
  { path: 'chapter-2', component: HeroComponent },
  { path: 'chapter-2/1', component: BioComponent },
  { path: 'chapter-2/2', component: TextComponent },
  { path: 'chapter-2/3', component: NextChapterComponent },
  { path: 'chapter-3', component: HeroComponent },
  { path: 'chapter-3/1', component: TextComponent },
  { path: 'chapter-3/2', component: MapComponent },
  { path: 'chapter-3/2', component: NextChapterComponent },
  { path: 'chapter-4', component: HeroComponent },
  { path: 'chapter-4/1', component: TextComponent },
  { path: 'chapter-4/2', component: BioComponent },
  { path: 'chapter-4/3', component: GalleryComponent },
  { path: 'chapter-4/4', component: NextChapterComponent },
  { path: 'outro', component: OutroComponent },
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
