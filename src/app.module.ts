import { MiddlewareConsumer, Module, NestModule, Post, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SongsController } from './songs/songs.controller';
import { SongsService } from './songs/songs.service';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';

@Module({
  imports: [SongsModule],
  controllers: [AppController, SongsController],
  providers: [AppService, SongsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs')
    // consumer.apply(LoggerMiddleware).forRoutes({path:"songs", method: RequestMethod.POST  })
    consumer.apply(LoggerMiddleware).forRoutes(SongsController)//provide controller
  }
}
