import { Module } from '@nestjs/common';
import { RindegastosController } from './app.controller';
import { AppRindegastos } from './app.service';

@Module({
  imports: [],
  controllers: [RindegastosController],
  providers: [AppRindegastos],
})
export class RindegastosModule {}
