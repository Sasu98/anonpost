import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module.module';

import { AppComponent } from './app.component';
import { PostReadComponent } from './post-read/post-read.component';
import { PostNewComponent } from './post-new/post-new.component';

@NgModule({
  declarations: [
    AppComponent,
    PostReadComponent,
    PostNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
