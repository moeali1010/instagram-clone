import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
  @Input() post: any;
  @Input() displayAllComments ;

  form: any;
  comments: [];
  constructor() { }

  ngOnInit() {
    this.initializeForm();
    console.log('displayAllComments' , this.displayAllComments);
  }

  initializeForm() {
    this.form = new FormGroup({
      comment: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.post.comments.push(this.form.controls.comment.value);
    this.form.controls.comment.setValue('');
    if( this.displayAllComments ){ // display all comments
      this.comments   = this.post.comments;
    }else{
      this.comments = this.post.comments.slice(0, 3);
    }


  }
}
