import { Component, OnInit, Input } from '@angular/core';
import { LastfmService } from '../../service/lastfm.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  providers: [LastfmService]
})
export class PopularComponent implements OnInit {
  topArtists:any = [];

  @Input() artist;

  constructor(private lastfmService: LastfmService) { }

  ngOnInit() {
    this.lastfmService.getTopArtists().subscribe(data => {
      console.log(JSON.parse(data));
      this.topArtists = JSON.parse(data);
    })
  }

}
