import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TodoModule } from '../pages/todo/todo.module';
import { AboutComponent } from '../pages/about/about.component';

@NgModule({
  declarations: [ MyApp, AboutComponent ],
  imports: [ IonicModule.forRoot(MyApp), TodoModule ],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp, AboutComponent ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
