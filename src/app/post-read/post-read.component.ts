import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../Post.class'

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent implements OnInit {
  @Input() post;
  @Output() onBackEvent = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit() {
  }

  returnPage() {
    this.onBackEvent.emit();
  }

}
