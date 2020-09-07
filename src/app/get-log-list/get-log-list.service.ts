import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLogListService {
  myLogs: any[] = [
    { reporter: 'Greg W', report: 'weird car', date: 'Tuesday' },
    { reporter: 'Greg P', report: 'lost child', date: 'Monday' },
    { reporter: 'Greg C', report: 'stolen sandwich', date: 'Friday' },
    { reporter: 'Greg A', report: 'speeder', date: 'Nov 19 2019' },
  ];
  getLogList(){
    return this.myLogs;
  }
  // constructor() { }
}
