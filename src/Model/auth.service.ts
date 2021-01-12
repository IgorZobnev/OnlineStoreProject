import { Observable } from 'rxjs';
import { RestDatasource } from './rest.datasource';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor(private datasource: RestDatasource){
    }

    authenticate(username: string, password: string) : Observable<boolean> {
        return this.datasource.authenticate(username, password);
    }

    get authenticated() : boolean {
        return this.datasource.authToken != null;
    }

    clear() {
        this.datasource.authToken = null;
    }
}