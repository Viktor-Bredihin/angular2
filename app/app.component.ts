import { Component } from 'angular2/core';
import { LoggedService } from './service';
import { ComponentA } from './component-a.component';
import { ComponentB } from './component-b.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Component App</h1>
    <input #text type="text" />
    <button (click)="login(text.value)">Send</button>
    <component-a></component-a>
    <component-b></component-b>
  `,
  directives: [ComponentA, ComponentB]
})
export class AppComponent {
  constructor(private ls: LoggedService) {
    this.ls.getLogged().subscribe(data => {
      console.log('App received ' + data);
    });
  }

  login(text: any): void {
    console.info('Setting ' + text + ' Component App');
    this.ls.setLogged(text);
  }
}
