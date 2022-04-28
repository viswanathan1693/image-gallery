import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { ContactComponent } from './contact/contact.component';
import { VideosComponent } from './videos/videos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: '', component: PhotosComponent},
  {
    path: '',
    children: [
      {path: 'photos', component: PhotosComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'photo-detail/:id', component: PhotoDetailComponent}
    ]
  },
  { path: '**', component: PhotosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
