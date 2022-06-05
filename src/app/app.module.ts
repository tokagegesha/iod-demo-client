import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
