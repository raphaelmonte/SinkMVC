import {Observable} from "rxjs/Rx";
import {User} from "../../../../shared/models/user/user.model";

export interface ILoginService {
    
    login(user: User): Observable<Object>;
    
}