import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../service/auth.service';
import { SharedModule } from '../../shared/shared.module';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  items: any;
  message: '';

  constructor(
    public authService: AuthService,
    private afDb: AngularFireDatabase,
    public chatService: ChatService
  ) {
    this.chatService.loadMessage()
      .subscribe(() => {
        setTimeout(() => {
          this.items.scrollTop = this.items.scrollHeight;
        }, 20);
      });
  }

  ngOnInit() {
    this.items = document.getElementById(`app-message`);
  }

  sendMessage(msg: string) {
    console.log(this.message);

    if (this.message.length === 0) {
      return;
    }
    this.chatService.addMessage(this.message)
      .then(() => this.message = '')
      .then(() => console.log(`Message has been sent`))
      .catch((error) => console.error(`Error sent message`, error));
  }
}















