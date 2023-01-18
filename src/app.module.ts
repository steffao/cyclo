import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CyclistsModule } from './cyclists/cyclists.module';

@Module({
  imports: [CyclistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
