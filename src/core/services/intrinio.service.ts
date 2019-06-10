import { HttpService, Injectable } from '@nestjs/common';
import { INTRINIO_API_BASE } from '../helpers/constants';

@Injectable()
export class IntrinioService {
    constructor(private http: HttpService) {}

    get(url: string, data = {}) {
        return this.http.get(`${INTRINIO_API_BASE}/${url}`, { data: { ...data, api_key: process.env.INTRINIO_API_KEY } }).toPromise();
    }

}
