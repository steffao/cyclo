import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CyclistsModule } from './cyclists/cyclists.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.SQL_DB_HOSTNAME,
      port: 3306,
      username: process.env.SQL_DB_USER,
      password: process.env.SQL_DB_PWD,
      database: process.env.SQL_DB_NAME,
      models: [],
    }), 
    CyclistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
