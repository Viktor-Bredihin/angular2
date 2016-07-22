import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';

import { loggedServiceInjectables } from './service';

bootstrap(AppComponent, [loggedServiceInjectables]);
