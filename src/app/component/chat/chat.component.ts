import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../service/auth.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  msg: '';

  constructor(public authService: AuthService, private afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.items = this.getMessages().valueChanges();
  }
  getMessages() {
    return this.afDb.list('messages');
  }

  sendMessage(msg: string) {
    const user = this.authService.getUser();
    this.itemsRef = this.getMessages();
    this.itemsRef.push({
      timeStamp: this.getTimeStamp(),
      message: msg,
      userName: user.name,
      email: user.email
    });
    this.msg = '';
  }
  removeMessage(message) {
    this.itemsRef = this.getMessages();
    this.itemsRef.remove(message);
  }
  getTimeStamp() {
    const now = new Date();
    let date, time;
    date = now.getUTCFullYear() + '/' + now.getUTCMonth() + '/' + now.getUTCDate();
    time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return date + ' ' + time;
  }

}
