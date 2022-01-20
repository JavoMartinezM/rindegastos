import { Injectable } from '@nestjs/common';

@Injectable()
export class AppRindegastos {

  async apiExchangeRate(data: any) {
    return 'Primer Cambio';
  }

  async diferenciaFechas (fechaCumple){

    const fechaActual = await this.calcularFechaActual();
    
    const primeraFecha = fechaActual.split('-');
    const segundaFecha = fechaCumple.fechaNacimiento.split('-');

    const formatoPrimeraFecha = Date.UTC(primeraFecha[2],primeraFecha[1]-1,primeraFecha[0]);
    const formatoSegundaFecha = Date.UTC(segundaFecha[2],segundaFecha[1]-1,segundaFecha[0]);
    const diferenciaDias = formatoSegundaFecha - formatoPrimeraFecha;

    const calcularDias = Math.floor(diferenciaDias / (1000 * 60 * 60 * 24));
    return 'Quedan '+ calcularDias + ' días para tu cumpleaños';
  }

  async calcularFechaActual():Promise<any>{

    const fechaActual = new Date();

    const year = fechaActual.getFullYear();
    let mes = '' + fechaActual.getMonth() + 1;
    let dia = '' + fechaActual.getDate();

    //Añade un 0 a día y mes si es que es menor a 2 dígitos
    if (dia.length<2) {
      dia = '0' + dia.toString();
    }
    if (mes.length<2) {
      mes = '0' + mes.toString();
    }

    //Formatea la fecha en 'dd-mm-aaaa'
    const fechaFinal = dia + '-' + mes + '-' + year;
    return fechaFinal;
  }
}