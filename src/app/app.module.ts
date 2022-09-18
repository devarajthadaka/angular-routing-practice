import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SectionComponent } from './section/section.component';
import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    SectionComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    StatesComponent,
    CitiesComponent,
    CountriesComponent,
    PostDetailsComponent,
    PhotoDetailsComponent,
    AlbumsDetailsComponent,
    CommentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
