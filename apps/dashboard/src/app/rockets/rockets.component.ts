import { RocketsFacade } from './../../../../../libs/core-state/src/lib/rockets/rockets.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Rocket } from '@mdv-twenty-two/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
selector: 'mdv-twenty-two-rockets',
templateUrl: './rockets.component.html',
styleUrls: ['./rockets.component.scss']
})
export class RocketsComponent implements OnInit {
form: FormGroup;
selectedRocket$: Observable<Rocket> = this.rocketsFacade.selectedRocket$;
rockets$: Observable<Rocket[]> = this.rocketsFacade.allRockets$;

constructor(
    private fb: FormBuilder,
    private rocketsFacade: RocketsFacade
) { }

ngOnInit() {
    this.initForm();
    this.rocketsFacade.loadRockets();
    this.selectRocket({ id: null } as Rocket);
}

selectRocket(rocket: Rocket) {
    this.form.patchValue(rocket);
    this.rocketsFacade.selectRocket(rocket.id);
}

cancel() {
    this.selectRocket({ id: null } as Rocket);
    this.form.reset();
}

saveRocket(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    if (this.form.value.id) {
        this.rocketsFacade.updateRocket(this.form.value);
        this.selectRocket({ id: null } as Rocket);
    } else {
        this.rocketsFacade.createRocket(this.form.value);
        this.selectRocket({ id: null } as Rocket);
    }
}

deleteRocket(rocket: Rocket) {
    this.rocketsFacade.deleteRocket(rocket);
}

initForm() {
    this.form = this.fb.group({
        id: [''],
        rocket_name: ['', Validators.required],
        description: ['', Validators.required],
        company: [''],
        first_flight: [''],
        success_rate_pct: [''],
    })
}

}
