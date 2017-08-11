export class Util {

    public static createRandomNames(prefix: string): string {

        let id = prefix;
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < 8; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return id;

    }

}