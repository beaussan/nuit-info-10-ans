import { BaseEntity } from './../../shared';

export class Trip implements BaseEntity {
    constructor(
        public id?: number,
        public startDate?: any,
        public originCity?: string,
        public event?: BaseEntity,
        public members?: BaseEntity[],
    ) {
    }
}
