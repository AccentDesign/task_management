import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class APIService {

    constructor(private http: HttpClient) { }

    private get headers() {
        return new HttpHeaders({'Content-Type': 'application/json'});
    }

    all(url: string): Observable<any> {
        return this.http.get(`${url}`, { headers: this.headers });
    }

    one(url: string, id: number): Observable<any> {
        return this.http.get(`${url}${id}/`, { headers: this.headers });
    }

    create(url: string, object: any): Observable<any> {
        return this.http.post(`${url}`, object, { headers: this.headers });

    }

    update(url: string, object: any): Observable<any> {
        return this.http.put(`${url}${object.id}/`, object, { headers: this.headers });
    }

    patch(url: string, object: any): Observable<any> {
        return this.http.patch(`${url}${object.id}/`, object, { headers: this.headers });
    }

    remove(url: string, object: any): Observable<any> {
        // Here we are returning the object back as a delete response has no content
        return this.http.delete(`${url}${object.id}/`, { headers: this.headers })
        .pipe(map(() => object));
    }

    options(url: string): Observable<any> {
        return this.http.options(`${url}`, { headers: this.headers });
    }

    post(url: string, object: any): Observable<any> {
        return this.http.post(`${url}`, object, { headers: this.headers });
    }

}
