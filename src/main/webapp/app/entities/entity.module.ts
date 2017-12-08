import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterUserExtraModule } from './user-extra/user-extra.module';
import { JhipsterEventModule } from './event/event.module';
import { JhipsterCarModule } from './car/car.module';
import { JhipsterTripModule } from './trip/trip.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterUserExtraModule,
        JhipsterEventModule,
        JhipsterCarModule,
        JhipsterTripModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterEntityModule {}
