import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductosService } from '../service/productos.service';
import { get } from 'http';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post('create')
  async create(@Body() productos: any): Promise<void> {
    await this.productosService.create(productos);
  }


  @Get('getData')
  async getData(): Promise<any> {
    return await this.productosService.getProductos(); // Usamos el método corregido
  }
}