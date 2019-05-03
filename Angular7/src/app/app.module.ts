import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksDetailComponent } from './books-detail/books-detail/books-detail.component';
import { BooksDetailListComponent } from './books-detail/books-detail-list/books-detail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './shared/books.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksDetailComponent,
    BooksDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot()
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
