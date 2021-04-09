import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql', 
        host: 'localhost',
        username: 'root',
        password: 'password', 
        database: 'test',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }
    ),
    DoctorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
