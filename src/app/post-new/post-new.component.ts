import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../Post.class';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  @Output() onBackEvent = new EventEmitter();
  @Output() onCreatePost = new EventEmitter();

  public title: string = "";
  public body: string = "";

  constructor() { }
  returnPage(){
    this.onBackEvent.emit();
  }
  sendPost(){
    this.returnPage();
    let post = new Post(this.title, this.body);
    this.onCreatePost.emit(post);
    this.title = "";
    this.body = "";
  }
  ngOnInit() {
  }

}
