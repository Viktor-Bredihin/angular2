import { Component } from 'angular2/core';
import { LoggedService } from './service';

@Component({
  selector: 'component-a',
  template: `
    <h1>Component A</h1>
    <input #text type="text" />
    <button (click)="login(text.value)">Send</button>
  `
})
export class ComponentA {
  constructor(private ls: LoggedService) {
    this.ls.getLogged().subscribe(data => {
      console.log('Component A received value ' + data);
    });
  }

  login(text: any): void {
    console.info('Setting value ' + text + ' Component A');
    this.ls.setLogged(text);
  }
}
