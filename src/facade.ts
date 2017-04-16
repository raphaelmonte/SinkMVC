import {CommandMap} from "./command.map";
import {IProxy} from "./proxy.interface";
import {ProxyMap} from "./proxy.map";
import {Notifications} from "./notification";

export class Facade {

    public static notification: Notifications = new Notifications();
    public static commandMaps: CommandMap[] = [];
    public static proxyMaps: ProxyMap[] = [];

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
            this.notification.removeEventListener(notificationName);
        });

    }

    public static addEventListener(notificationName: string, listener: Function): void {

        this.notification.addEventListener(notificationName, listener);

    }

    public static removeEventListener(notificationName: string): void {

        this.notification.removeEventListener(notificationName);

    }

    public static removeAllEventListeners(): void {

        this.notification.removeAllEventListeners();

    }

    public static registerProxy(proxyClassRef: any): void {

        if(!this.getProxyMap(proxyClassRef)) {

            let proxyMap = new ProxyMap();
            proxyMap.name = proxyClassRef.name;
            proxyMap.instance = new proxyClassRef() as IProxy;

            this.proxyMaps.push(proxyMap);

        }

    }

    public static getProxy(proxyClassRef: Function): IProxy {

        let proxyMap = this.getProxyMap(proxyClassRef);

        if(!proxyMap) {

            this.registerProxy(proxyClassRef);
            return this.getProxy(proxyClassRef);

        }
        
        return proxyMap.instance;
        
    }

    private static getProxyMap(proxyClassRef: any): ProxyMap {

        for(let i: number = 0 ; i < this.proxyMaps.length ; i++) {
            if(this.proxyMaps[i].name == proxyClassRef.name) {
                return this.proxyMaps[i];
            }
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



}
