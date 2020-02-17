import { RocketsFacade } from './../../../../../../libs/core-state/src/lib/rockets/rockets.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '@mdv-twenty-two/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-two-rockets-item',
  templateUrl: './rockets-item.component.html',
  styleUrls: ['./rockets-item.component.scss']
})
export class RocketsItemComponent implements OnInit {
  rockets$: Observable<Rocket>;

  constructor(
    private route: ActivatedRoute,
    private rocketsFacade: RocketsFacade
  ) { }

  ngOnInit() {
    this.rocketsFacade.loadRockets();
    this.route.params.subscribe((param) => this.rocketsFacade.selectRocket(param['id']));
    this.rockets$ = this.rocketsFacade.selectedRocket$
  }

}
