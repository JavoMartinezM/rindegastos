import { Test, TestingModule } from '@nestjs/testing';
import { RindegastosController } from './app.controller';
import { AppRindegastos } from './app.service';

describe('RindegastosController', () => {
  let appController: RindegastosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RindegastosController],
      providers: [AppRindegastos],
    }).compile();

    appController = app.get<RindegastosController>(RindegastosController);
  });

});
