import { BaseEntity } from './../../shared';

export class Event implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public city?: string,
        public postalCode?: string,
        public streetNumber?: string,
        public moreInfoLocation?: string,
        public lattitude?: string,
        public longitude?: string,
        public idMaps?: string,
        public trips?: BaseEntity[],
        public owner?: BaseEntity,
    ) {
    }
}
