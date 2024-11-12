import { MiddlewareConsumer, Module, NestModule, OnModuleInit, Post, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { DbModule } from './db/db.module';

@Module({
  imports: [SongsModule, DbModule],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService],
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
