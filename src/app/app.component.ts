import {
  Component
} from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  domSanitizer: DomSanitizer;

  /* @ViewChild('iframe', {static: false}) iframe: ElementRef;
   compRef: ComponentRef<InnerComponent>;
   doc;*/

  constructor(domSanitizer: DomSanitizer) {
    this.domSanitizer = domSanitizer;
  }

  /*  onLoad(iframe){
      this.doc = iframe.contentDocument || iframe.contentWindow;
      this.createComponent();
    }*/

  /*  createComponent() {
      const compFactory = this.resolver.resolveComponentFactory(InnerComponent);
      this.compRef = this.vcRef.createComponent(compFactory);
      this.compRef.location.nativeElement.id = 'innerComp';

      (<InnerComponent>this.compRef.instance).firstInput = this.firstInput;

      (<InnerComponent>this.compRef.instance).emitOutput.subscribe(response => {
        console.log(response);
      });

      this.doc.body.appendChild(this.compRef.location.nativeElement);
    }*/

  yt = '<iframe class="iod-frame"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  title = 'iod-demo-client';

  iframeUrl = '';

  onSubmit = (f: NgForm) => {
    const data = f.value;
    let iframeUrl = 'https://exat.exa.loanhdsandbox.com/source/ui';
    // @ts-ignore
    if (data.srcUrl) {
      iframeUrl = data.srcUrl;

      // @ts-ignore
      // document.getElementById('iframe_demo').contentWindow.location.reload();
    }

    // @ts-ignore
    document.getElementById('iframe_demo').src = iframeUrl;
  }

  /*getUrl = () => {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
  }*/

}
