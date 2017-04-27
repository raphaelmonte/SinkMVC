import {User} from "./user.model";

export class UserFactory {

    public createUsers(response: Object[]): User[] {

        let users: User[] = [];
        let i: number = 0;
        let length: number = response.length;

        for(; i < length ; i++) {
            let user: User = this.createUser(response[i]);
            users.push(user);
        }

        return users;

    }

    public createUser(response: Object): User {

        let user: User = new User(response);
        return user;

    }

}