import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor(private logServerUrl: string) { }

    /**
     * log
     */
    public log(message: string) {
        console.log(this.logServerUrl + message);
    }
}
