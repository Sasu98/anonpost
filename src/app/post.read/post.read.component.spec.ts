import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.ReadComponent } from './post.read.component';

describe('Post.ReadComponent', () => {
  let component: Post.ReadComponent;
  let fixture: ComponentFixture<Post.ReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post.ReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
