import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
  {
    path: 'intro',
    component: IntroComponent,
    data: { chapterName: 'intro', orderIndex: 0 },
  },
  {
    path: 'intro/1',
    component: TextComponent,
    data: { chapterName: 'intro', orderIndex: 1 },
  },
  {
    path: 'intro/2',
    component: GalleryComponent,
    data: { chapterName: 'intro', orderIndex: 2 },
  },
  {
    path: 'intro/3',
    component: NextChapterComponent,
    data: { chapterName: 'intro', orderIndex: 3 },
  },
  {
    path: 'chapter-1',
    component: HeroComponent,
    data: { chapterName: 'chapter-1', orderIndex: 0 },
  },
  {
    path: 'chapter-1/1',
    component: TextComponent,
    data: { chapterName: 'chapter-1', orderIndex: 1 },
  },
  {
    path: 'chapter-1/2',
    component: BioComponent,
    data: { chapterName: 'chapter-1', orderIndex: 2 },
  },
  {
    path: 'chapter-1/3',
    component: GalleryComponent,
    data: { chapterName: 'chapter-1', orderIndex: 3 },
  },
  {
    path: 'chapter-1/4',
    component: MapComponent,
    data: { chapterName: 'chapter-1', orderIndex: 4 },
  },
  {
    path: 'chapter-1/5',
    component: NextChapterComponent,
    data: { chapterName: 'chapter-1', orderIndex: 5 },
  },
  {
    path: 'chapter-2',
    component: HeroComponent,
    data: { chapterName: 'chapter-2', orderIndex: 0 },
  },
  {
    path: 'chapter-2/1',
    component: BioComponent,
    data: { chapterName: 'chapter-2', orderIndex: 1 },
  },
  {
    path: 'chapter-2/2',
    component: TextComponent,
    data: { chapterName: 'chapter-2', orderIndex: 2 },
  },
  {
    path: 'chapter-2/3',
    component: NextChapterComponent,
    data: { chapterName: 'chapter-2', orderIndex: 3 },
  },
  {
    path: 'chapter-3',
    component: HeroComponent,
    data: { chapterName: 'chapter-3', orderIndex: 0 },
  },
  {
    path: 'chapter-3/1',
    component: TextComponent,
    data: { chapterName: 'chapter-3', orderIndex: 1 },
  },
  {
    path: 'chapter-3/2',
    component: MapComponent,
    data: { chapterName: 'chapter-3', orderIndex: 2 },
  },
  {
    path: 'chapter-3/3',
    component: NextChapterComponent,
    data: { orderIndex: 3 },
  },
  {
    path: 'chapter-4',
    component: HeroComponent,
    data: { chapterName: 'chapter-4', orderIndex: 0 },
  },
  {
    path: 'chapter-4/1',
    component: TextComponent,
    data: { chapterName: 'chapter-4', orderIndex: 1 },
  },
  {
    path: 'chapter-4/2',
    component: BioComponent,
    data: { chapterName: 'chapter-4', orderIndex: 2 },
  },
  {
    path: 'chapter-4/3',
    component: GalleryComponent,
    data: { chapterName: 'chapter-4', orderIndex: 3 },
  },
  {
    path: 'chapter-4/4',
    component: NextChapterComponent,
    data: { chapterName: 'chapter-4', orderIndex: 4 },
  },
  {
    path: 'outro',
    component: OutroComponent,
    data: { chapterName: 'outro', orderIndex: 0 },
  },
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
