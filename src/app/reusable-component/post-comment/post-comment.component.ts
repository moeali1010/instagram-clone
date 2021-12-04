import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
})
export class PostCommentComponent implements OnInit {
  @Input() post: any;
  form: any;
  constructor() { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      comment: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.post.comments.push(this.form.controls.comment.value);
    this.form.controls.comment.setValue('');
  }
}
