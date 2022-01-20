import { Body, Controller, Get } from '@nestjs/common';
import { AppRindegastos } from './app.service';

@Controller('rindegastos')
export class RindegastosController {
  constructor(private readonly appService: AppRindegastos) {}

  @Get('/getConvertedAmount')
  async getConvertedAmount(@Body() datosRetorno){
  }

  @Get('/getDaysUntilMyBirthday')
  async getDaysUntilMyBirthday(@Body() fechaCumple: any){
    return await this.appService.diferenciaFechas (fechaCumple);
  }

  @Get('/getTheNumber')
  async getTheNumber(){
  }

}