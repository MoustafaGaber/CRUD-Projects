import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-books-detail-list',
  templateUrl: './books-detail-list.component.html',
  styleUrls: ['./books-detail-list.component.css']
})
export class BooksDetailListComponent implements OnInit {

  constructor(private service: BooksService,
    private toast: ToastrService) { }

  ngOnInit() {
    
  }
  fillform(bk: Book) {
    this.service.formData = Object.assign({}, bk);//object here to prevent tow way binding
  }
  ondelete(id){
    if(confirm('Are You Sure to Delet this record')){
      this.service.deleteBook(id) 
      .subscribe(res=>{
        this.service.refreshList();
        this.toast.warning('record deleted successfully', 'Books Side');
       
      },
           err=>{ console.log(err) })
  }
}
}
