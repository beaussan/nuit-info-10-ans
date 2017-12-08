import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Trip } from './trip.model';
import { TripPopupService } from './trip-popup.service';
import { TripService } from './trip.service';
import { Event, EventService } from '../event';
import { UserExtra, UserExtraService } from '../user-extra';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-trip-dialog',
    templateUrl: './trip-dialog.component.html'
})
export class TripDialogComponent implements OnInit {

    trip: Trip;
    isSaving: boolean;

    events: Event[];

    userextras: UserExtra[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private tripService: TripService,
        private eventService: EventService,
        private userExtraService: UserExtraService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.eventService.query()
            .subscribe((res: ResponseWrapper) => { this.events = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.userExtraService.query()
            .subscribe((res: ResponseWrapper) => { this.userextras = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.trip.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tripService.update(this.trip));
        } else {
            this.subscribeToSaveResponse(
                this.tripService.create(this.trip));
        }
    }

    private subscribeToSaveResponse(result: Observable<Trip>) {
        result.subscribe((res: Trip) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Trip) {
        this.eventManager.broadcast({ name: 'tripListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackEventById(index: number, item: Event) {
        return item.id;
    }

    trackUserExtraById(index: number, item: UserExtra) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-trip-popup',
    template: ''
})
export class TripPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tripPopupService: TripPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tripPopupService
                    .open(TripDialogComponent as Component, params['id']);
            } else {
                this.tripPopupService
                    .open(TripDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
