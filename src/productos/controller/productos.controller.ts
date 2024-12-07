import { Controller, Body, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductosService } from '../service/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post('create')
  async create(@Body() productos: any): Promise<void> {
    await this.productosService.create(productos);
  }

  @Get('getData')
  async getData(): Promise<any> {
    return await this.productosService.getProductos();
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatedData: any
  ): Promise<void> {
    await this.productosService.updateProducto(id, updatedData);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productosService.deleteProducto(id);
  }
}
