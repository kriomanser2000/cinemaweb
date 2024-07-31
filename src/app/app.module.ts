import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
@NgModule({
  declarations: 
  [
    MovieSearchComponent
  ],
  imports: 
  [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }
bootstrapApplication(AppComponent, 
{
  providers: [importProvidersFrom(AppModule)],
}).catch((err) => console.error(err));