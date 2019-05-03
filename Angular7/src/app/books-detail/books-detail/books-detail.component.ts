import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {

  constructor(private service: BooksService,
    private toast: ToastrService) { }


  ngOnInit() {
    this.service.refreshList();
    this.resetForm();


  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      id: 0,
      title: '',
      author: '',
      numberofpages: 0,
      publishedat: new Date()

    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertrecord(form);
      else
      //update
      this.updaterecord(form)
  }


 
  insertrecord(form: NgForm) {
    this.service.postBook().subscribe(
      res => {
        this.resetForm(form);
        this.toast.success('submitted successfully', 'Books Register');
        this.service.refreshList();

      },
      err => { console.log(err); }

    )
  }
  updaterecord(form: NgForm) {
    this.service.putBook().subscribe(
      res => {
        this.resetForm(form);
        this.toast.info('updated successfully', 'Books Side');
        this.service.refreshList();

      },
      err => { console.log(err); }
    )
  }
  
}
