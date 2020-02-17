import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Rocket } from '@mdv-twenty-two/core-data';

@Component({
  selector: 'mdv-twenty-two-rockets-details',
  templateUrl: './rockets-details.component.html',
  styleUrls: ['./rockets-details.component.scss']
})
export class RocketsDetailsComponent implements OnInit {
  originalName;
  currentRocket: Rocket

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set rocket(value) {
    if (value) this.originalName = value.rocket_name;
      this.currentRocket = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(rocket: Rocket) {
    this.saved.emit(rocket);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
