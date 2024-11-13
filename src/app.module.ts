import { MiddlewareConsumer, Module, NestModule, OnModuleInit, Post, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { DbModule } from './db/db.module';
import { DevConfigService } from './common/providers/devconfig.service';

const devconfig = 3000;
const prodConfig = 4000;

@Module({
  imports: [SongsModule, DbModule],
  controllers: [AppController, SongsController],
  providers: [
    AppService,
    SongsService,
    {
      provide: DevConfigService,
      useClass: DevConfigService
    },
    {
      provide: "CONFIG",
      useFactory: () => {
        return process.env.NODE_ENV === 'development' ? devconfig : prodConfig
      }
    }
  ],
})
export class AppModule implements NestModule, OnModuleInit{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs')
    // consumer.apply(LoggerMiddleware).forRoutes({path:"songs", method: RequestMethod.POST  })
    consumer.apply(LoggerMiddleware).forRoutes(SongsController)//provide controller
  }

  onModuleInit() {
    console.log("App module initialized");
  }
}
