import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PostsListComponent } from './component/posts-list/posts-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {AboutComponent} from './component/about/about.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PostItemComponent,
    PostsListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
