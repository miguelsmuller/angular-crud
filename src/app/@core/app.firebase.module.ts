import { NgModule } from '@angular/core';

import { environment } from '@env/environment';
import { AngularFireModule } from '@angular/fire';
//import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase)],
  exports: [AngularFireModule],
})
export class AppFirebaseModule {}
