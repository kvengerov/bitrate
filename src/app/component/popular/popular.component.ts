import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  @Input() track;

  constructor() { }

  ngOnInit() {

  }

}
