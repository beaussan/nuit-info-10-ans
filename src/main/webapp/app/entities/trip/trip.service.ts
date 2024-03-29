import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { Trip } from './trip.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class TripService {

    private resourceUrl = SERVER_API_URL + 'api/trips';

    constructor(private http: Http, private dateUtils: JhiDateUtils) { }

    create(trip: Trip): Observable<Trip> {
        const copy = this.convert(trip);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(trip: Trip): Observable<Trip> {
        const copy = this.convert(trip);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Trip> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Trip.
     */
    private convertItemFromServer(json: any): Trip {
        const entity: Trip = Object.assign(new Trip(), json);
        entity.startDate = this.dateUtils
            .convertDateTimeFromServer(json.startDate);
        return entity;
    }

    /**
     * Convert a Trip to a JSON which can be sent to the server.
     */
    private convert(trip: Trip): Trip {
        const copy: Trip = Object.assign({}, trip);

        copy.startDate = this.dateUtils.toDate(trip.startDate);
        return copy;
    }
}
