import { BaseEntity, User } from './../../shared';

export class UserExtra implements BaseEntity {
    constructor(
        public id?: number,
        public isOrga?: boolean,
        public hasDoneWebTour?: boolean,
        public phone?: string,
        public user?: User,
        public cars?: BaseEntity[],
        public eventsOrganiseds?: BaseEntity[],
        public trips?: BaseEntity[],
    ) {
        this.isOrga = false;
        this.hasDoneWebTour = false;
    }
}
