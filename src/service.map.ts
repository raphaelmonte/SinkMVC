import {IService} from "./service.interface";

export class ServiceMap {

    private _name: string;
    private _instance: IService;

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get instance():IService {
        return this._instance;
    }

    set instance(value:IService) {
        this._instance = value;
    }
    
}