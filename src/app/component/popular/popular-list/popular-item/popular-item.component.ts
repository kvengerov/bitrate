import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.scss']
})
export class PopularItemComponent implements OnInit {

  @Input() track;

  constructor() { }

  ngOnInit() {

  }

}
