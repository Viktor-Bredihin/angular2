import { Component } from 'angular2/core';
import { LoggedService } from './service';

@Component({
  selector: 'component-b',
  template: `
    <h1>Component B</h1>
    <input #text type="text" />
    <button (click)="login(text.value)">Send</button>
  `,
  providers: [LoggedService]
})
export class ComponentB {
  constructor(private ls: LoggedService) {
    this.ls.getLogged().subscribe(data => {
      console.log('Component B received value ' + data);
    });
  }

  login(text: any): void {
    console.info('Setting value ' + text + ' Component B');
    this.ls.setLogged(text);
  }
}
