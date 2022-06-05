import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  yt = '<iframe class="iod-frame"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  title = 'iod-demo-client';
}
