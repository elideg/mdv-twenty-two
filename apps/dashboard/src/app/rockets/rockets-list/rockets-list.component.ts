import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Rocket } from '@mdv-twenty-two/core-data';

@Component({
  selector: 'mdv-twenty-two-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss']
})
export class RocketsListComponent implements OnInit {
  @Input() rockets: Rocket[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(rocket: Rocket) {
    this.selected.emit(rocket);
  }

  delete(rocket: Rocket) {
    this.deleted.emit(rocket);
  }
}
