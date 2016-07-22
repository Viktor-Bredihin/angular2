import { Component } from 'angular2/core';
import { LoggedService } from './service';

@Component({
  selector: 'component-a',
  template: `
    <h1>Component A</h1>
    <input #text type="text" />
    <button (click)="login(text.value)">Send</button>
  `,
  providers: [LoggedService]
})
export class ComponentA {
  constructor(private ls: LoggedService) {
    this.ls.getLogged().subscribe(data => {
      console.log('received ' + data);
    });
  }

  login(text: any): void {
    console.info('Setting ' + text + ' Component A');
    this.ls.setLogged(text);
  }
}
