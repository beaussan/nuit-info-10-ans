import { BaseEntity } from './../../shared';

export class Car implements BaseEntity {
    constructor(
        public id?: number,
        public nmbPlace?: number,
        public name?: string,
        public owner?: BaseEntity,
    ) {
    }
}
