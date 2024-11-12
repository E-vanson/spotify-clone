import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { Connection, connection } from 'src/common/constants/connection';

const mockSongsService = {
findAll() {
return [{
id: 1,
title: "Lasting lover"
}];
},
};

@Module({
  controllers: [SongsController],
  // providers: [SongsService] //Standard provider
  // providers: [
  //   {
  //     provide: SongsService,
  //     useClass: SongsService  // Other syntax for standard providers
  //   }
  // ]
  
  // value providers implementation
  // providers: [
  //   {
  //     provide: SongsService,
  //     useValue: mockSongsService
  //   }
  // ]

  // non class providers that can be injected and used as dependency
  providers: [
    SongsService,
    {
      provide: "CONNECTION",
      useValue: connection
    }
  ]
})
export class SongsModule implements OnModuleInit {
  constructor(
    @Inject("CONNECTION")
    private connection: Connection,
    private songsService: SongsService
  ) {

  }

  onModuleInit() {
    console.log("Songs module initialized")
    // console.log("The connection ", this.connection)
    // console.log("The service ", this.songsService)
  }
}
