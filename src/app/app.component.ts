import { Component, OnInit } from '@angular/core';
import { PapaObsWrapService} from 'papa-obs-wrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


constructor(private csvParser: PapaObsWrapService) { }

title = 'CSVToJSON-demo';
observerToSubscribeToTheService = {

  next: (results) => {
     console.log(results);
  }
};


ngOnInit() {
  this.csvParser.parsedCsvObserver.subscribe(this.observerToSubscribeToTheService);
}
}
