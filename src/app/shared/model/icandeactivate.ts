import { Observable } from "rxjs";


export interface Icandeactivate{
    candeactive : () => boolean | Promise<boolean> | Observable<boolean>;
}