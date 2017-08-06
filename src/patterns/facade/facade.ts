import {CommandMap} from "../../models/command.map";
import {ProxyMap} from "../../models/proxy.map";
import {Broadcast} from "../observer/broadcast";
import {Notification} from "../observer/notification";

export class Facade {

    public static commandMaps: CommandMap[] = [];
    public static proxyMaps: ProxyMap[] = [];

    private static broadcast: Broadcast = new Broadcast();
    
    public static registerCommand(notificationName: string, commandClassRef: any): void {

        let commandMap: CommandMap = this.getCommandMap(commandClassRef);
        if(!commandMap) {
            
            let commandMap = new CommandMap();
            commandMap.name = commandClassRef.name;
            commandMap.commandClassRef = commandClassRef;
            commandMap.listNotificationInterests = [notificationName];

            this.commandMaps.push(commandMap);
            
        }else {

            if(commandMap.listNotificationInterests.indexOf(notificationName) < 0) {
                commandMap.listNotificationInterests.push(notificationName);
            }
            
        }

    }
    
    public static getCommand(commandClassRef: any): any {

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

    public static registerProxy(proxy: any, realSubject?: any): void {

        if(!this.getProxyMap(proxy)) {

            let proxyMap: ProxyMap = new ProxyMap();
            let proxyName: string = proxy.constructor.name;
            let instance = proxy;

            if(typeof proxy != "object") {
                proxyName = proxy.name;
                instance = new proxy(realSubject);
            }

            proxyMap.name = proxyName;
            proxyMap.instance = instance;

            this.proxyMaps.push(proxyMap);

        }

    }

    public static hasProxy(proxy: any): boolean {

        if(this.getProxy(proxy)) {
            return true;
        }

        return false;

    }

    public static getProxy(proxy: any): any {

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

    public static sendNotification(notificationName: string, params?: any): void {

        this.commandMaps.forEach((commandMap: CommandMap) => {

            let listNotificationInterests: string[] = commandMap.listNotificationInterests;
            if(listNotificationInterests.indexOf(notificationName) >= 0) {

                let notification: Notification = new Notification();
                notification.setName(notificationName);
                notification.setBody(params);

                let command = new commandMap.commandClassRef();
                command.execute(notification);

            }
            
        });

        this.broadcast.sendNotification(notificationName, params);

    }

    public static addListener(notificationName: string, listener: Function, mediatorName: string): void {

        this.broadcast.addListener(notificationName, listener, mediatorName);

    }

    public static removeListener(notificationName: string, mediatorName: string): void {

        this.broadcast.removeListener(notificationName, mediatorName);

    }

    public static removeAllListeners(mediatorName: string): void {

        this.broadcast.removeAllListeners(mediatorName);

    }

}
