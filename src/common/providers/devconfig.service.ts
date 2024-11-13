import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class DevConfigService{
    constructor(
        @Inject("CONFIG")
        private config: {port:string}
    ){}
    host = "localhost"
    
    getHost() {
        return `The host is ${this.host} and the port is ${this.config}`
    }
}