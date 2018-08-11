import { Component } from '@angular/core';
import { Post } from './Post.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anonpost';
  posts: Array<Post> = [];
  selected_post = false;
  showIndex: boolean = true;
  showCreatorPage: boolean = false;

  constructor(){
    let post1 = new Post("Welcome back!", "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.");
    let post2 = new Post("Redesign the design", "Lorem ipsum dolor sit amet consectetur adipiscing elit montes vulputate, risus ac mauris ligula odio dis cursus feugiat, accumsan inceptos nullam vehicula turpis natoque senectus ultricies. Maecenas hendrerit fusce a purus morbi quam sem sagittis, proin neque curae cras duis facilisis iaculis egestas vitae, per ante aenean velit penatibus nec felis. Scelerisque urna habitant tincidunt magna sapien metus aliquam lobortis, rutrum litora non morbi arcu semper fringilla, diam mattis suspendisse egestas lectus nulla nec.");
    let post3 = new Post("Hey buddy!", "Aliquam dis pharetra semper mollis nunc pretium lacus, nibh torquent quisque eros in vehicula rhoncus, vulputate habitant etiam hac senectus rutrum. Habitant blandit diam justo dictum luctus in, sem facilisis quam dignissim phasellus, per hac eleifend imperdiet dictumst. Eleifend potenti non facilisi vestibulum vivamus suscipit odio, id neque sagittis gravida mollis porta enim, feugiat ligula dui integer purus dignissim.");
    this.posts.push(post1, post2, post3);
  }

  setCreatorPage(){
    this.showIndex = false;
    this.showCreatorPage = true;
  }
  setIndex(){
    this.selected_post = false;
    this.showCreatorPage = false;
    this.showIndex = true;
  }
  createPost(newPost: Post){
    this.posts.push(newPost);
  }

}
