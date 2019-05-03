import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  formData: Book;
  readonly rootURL="http://localhost:51885/api";
  list: Book[];

  constructor(private http:HttpClient) { }
  //Add
  postBook(){
    return this.http.post(this.rootURL + '/Books',this.formData);

  }
  //update
  putBook(){
    return this.http.put(this.rootURL + '/Books/' + this.formData.id,this.formData);

  }
  //Delet
  deleteBook(id){
    return this.http.delete(this.rootURL + '/Books/' + id);

  }
    //Get Data
  refreshList() { 
    this.http.get(this.rootURL + '/Books' )
    .toPromise()
    .then(res => {
      this.list = (res as Book[])
      console.log(res);
    });
    
      }
      

}