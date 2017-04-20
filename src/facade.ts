import {CommandMap} from "./command.map";
import {IProxy} from "./proxy.interface";
import {ProxyMap} from "./proxy.map";
import {Notifications} from "./notification";
import {ServiceMap} from "./service.map";
import {IService} from "./service.interface";

export class Facade {

    public static notification: Notifications = new Notifications();
    public static commandMaps: CommandMap[] = [];
    public static serviceMaps: ServiceMap[] = [];
    public static proxyMaps: ProxyMap[] = [];

    //Commands
    public static registerCommand(commandClassRef: any): void {

        if(!this.getCommand(commandClassRef)) {
            
            let commandMap = new CommandMap();
            commandMap.name = commandClassRef.name;
            commandMap.commandClassRef = commandClassRef;

            this.commandMaps.push(commandMap);
            
        }

    }
    
    public static getCommand(commandClassRef: Function): any {

        let commandMaps: CommandMap = this.getCommandMap(commandClassRef);
        if(commandMaps) {
            return commandMaps.commandClassRef;
        }

        return null;
        
    }

    private static getCommandMap(commandClassRef: any): CommandMap {

        for(let i: number = 0 ; i < this.commandMaps.length ; i++) {
            if(this.commandMaps[i].name == commandClassRef.name) {
                return this.commandMaps[i];
            }
        }

        return null;

    }

    //Proxy
    public static registerProxy(proxy: any): void {

        if(!this.getProxyMap(proxy)) {

            let proxyMap: ProxyMap = new ProxyMap();
            let serviceName: string = proxy.constructor.name;
            let instance: IService = proxy;

            if(typeof proxy != "object") {
                serviceName = proxy.name;
                instance = new proxy();
            }

            proxyMap.name = serviceName;
            proxyMap.instance = instance;

            this.proxyMaps.push(proxyMap);

        }

    }

    public static getProxy(proxy: any): IProxy {

        let proxyMap: ProxyMap = this.getProxyMap(proxy);
        if(proxyMap) {
            return proxyMap.instance;
        }

        return null;
        
    }

    private static getProxyMap(proxy: any): ProxyMap {

        let proxyName: string = proxy.constructor.name;
        if(typeof proxy != "object") {
            proxyName = proxy.name;
        }

        for(let i: number = 0 ; i < this.proxyMaps.length ; i++) {
            if(this.proxyMaps[i].name == proxyName) {
                return this.proxyMaps[i];
            }
        }

        return null;

    }

    //Services
    public static registerService(service: any): void {

        if(!this.getServiceMap(service)) {

            let serviceMap: ServiceMap = new ServiceMap();
            let serviceName: string = service.constructor.name;
            let instance: IService = service;

            if(typeof service != "object") {
                serviceName = service.name;
                instance = new service();
            }

            serviceMap.name = serviceName;
            serviceMap.instance = instance;

            this.serviceMaps.push(serviceMap);

        }

    }

    public static getService(service: any): any {

        let serviceMap: ServiceMap = this.getServiceMap(service);
        if(serviceMap) {
            return serviceMap.instance;
        }

        return null;

    }

    private static getServiceMap(service: any): ServiceMap {

        let serviceName: string = service.constructor.name;
        if(typeof service != "object") {
            serviceName = service.name;
        }

        for(let i: number = 0 ; i < this.serviceMaps.length ; i++) {
            if(this.serviceMaps[i].name == serviceName) {
                return this.serviceMaps[i];
            }
        }

        return null;

    }

    //Broadcast
    public static sendNotification(notificationName: string, params: any): void {

        let notificationInterests: string[] = [];

        this.commandMaps.forEach((commandMap: CommandMap) => {

            let listNotificationInterests: string[] = commandMap.commandClassRef.listNotificationInterests();
            if(listNotificationInterests.indexOf(notificationName) >= 0) {

                notificationInterests.push(notificationName);

                let command = new commandMap.commandClassRef();
                command.setNotificationName(notificationName);
                command.execute();

            }

        });

        this.notification.sendNotification(notificationName, params);

        notificationInterests.forEach((notificationName: string) => {
            this.notification.removeListener(notificationName);
        });

    }

    public static addListener(notificationName: string, listener: Function): void {

        this.notification.addListener(notificationName, listener);

    }

    public static removeListener(notificationName: string): void {

        this.notification.removeListener(notificationName);

    }

    public static removeAllListeners(): void {

        this.notification.removeAllListeners();

    }

}
