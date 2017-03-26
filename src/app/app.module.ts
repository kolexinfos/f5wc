import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//App Pages
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { JoinPage } from '../pages/join/join';
import { MorePage } from '../pages/more/more';
import { HistoryPage } from '../pages/history/history';
import { EnquiryPage } from '../pages/enquiry/enquiry';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    EnquiryPage,
    HistoryPage,
    MorePage,
    JoinPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    HistoryPage,
    EnquiryPage,
    JoinPage,
    MorePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
