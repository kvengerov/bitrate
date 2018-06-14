import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from './auth.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

interface Message {
  userName: string;
  message: string;
  date?: number;
  uid?: string;
}

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;

  public chats: Message[] = [];
  public _user: any = {};
  public name: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this._user.userName = user.displayName;
      this._user.uid = user.uid;
    });
  }

  loadMessage() {
    this.itemsCollection = this.afs.collection<Message>(`chats`, ref => ref.orderBy(`date`, `desc`).limit(10));
    return this.itemsCollection.valueChanges().map((messages: Message[]) => {
      console.log(messages);
      this.chats = [];
      for (let message of messages) {
        this.chats.unshift(message);
      }

      return this.chats;
    });
  }

  addMessage( text: string ) {
    const message: Message = {
      userName: this._user.userName,
      message: text,
      date: new Date().getTime(),
      uid: this._user.uid
    };
    return this.itemsCollection.add(message);
  }

}
















