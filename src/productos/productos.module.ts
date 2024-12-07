import { Module } from '@nestjs/common';
import { ProductosService } from './service/productos.service';
import { ProductosController } from './controller/productos.controller';

@Module({
  providers: [ProductosService],
  controllers: [ProductosController]
})
export class ProductosModule {}
