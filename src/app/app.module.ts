import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FirelistComponent } from './firelist/firelist.component';
import { IndexComponent } from './index/index.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBnnN_zwM2UdyeqCqBeUbCNaL8rOmpQmV0',
      authDomain: 'felipesantossilva-f979e.firebaseapp.com',
      projectId: 'felipesantossilva-f979e',
      storageBucket: 'felipesantossilva-f979e.appspot.com',
      messagingSenderId: '344839723408',
      appId: '1:344839723408:web:4db97d07a7f80653e47b15',
    }), //falta "databaseURL"
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirelistComponent,
    IndexComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
