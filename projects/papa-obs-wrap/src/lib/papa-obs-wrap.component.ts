import { Component } from '@angular/core';
import { PapaObsWrapService } from './papa-obs-wrap.service';

@Component({
  selector: 'pow-papa',
  template: `
    <p>
      papa-obs-wrap works!
    </p>
  `,
  styles: []
})
export class PapaObsWrapComponent {

  constructor() { }

  title = 'papa-obs-wrap component';


}
