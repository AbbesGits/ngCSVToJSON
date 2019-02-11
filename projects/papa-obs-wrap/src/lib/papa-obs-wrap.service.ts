import { Injectable } from '@angular/core';
import * as papa from 'papaparse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PapaObsWrapService {

  parsedCsvObserver: any; // Observable to wrap the papaParse async return and acccep an observer
  papaConf = {};
  constructor() {

    this.getParsedCSV();
    console.log('Papa-obs-wrap service construction should be done by now.');
   }
  getParsedCSV() {
    this.parsedCsvObserver = Observable.create( observer => {
      papa.parse('https://api.mockaroo.com/api/bf758010?count=100&key=9edbc990', {
        download: true,
        delimiter: '',
        header: true,
        complete: function(results) {
          observer.next(results);
          observer.complete();
        }
      });
    });
  }
}
