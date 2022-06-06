import {Component, ElementRef, ViewChild} from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private domSanitizer: DomSanitizer) {
  }

  yt = '<iframe class="iod-frame"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  title = 'iod-demo-client';

  iframeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://exat.exa.loanhdsandbox.com/source/ui`);

  onSubmit = (f: NgForm) => {
    /*   if(f.token){
         this.iframeUrl+=
       }*/
    console.log(f.value);
  }
}
