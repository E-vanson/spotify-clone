import { Global, Module, OnModuleInit } from '@nestjs/common';
import { connection } from 'src/common/constants/connection';

@Global()
    @Module({
        providers: [
            {
                provide: "CONNECTION",
                useValue: connection
        }
        ],
        exports:['CONNECTION']
})
export class DbModule implements OnModuleInit {
    onModuleInit() {
        console.log("DB module initialized")
    }
}
