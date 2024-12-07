import { Injectable } from '@nestjs/common';
import { DataSnapshot, push, ref, set, get, update, remove } from 'firebase/database';
import { firebaseDataBase } from 'src/firebase.config';

@Injectable()
export class ProductosService {
  async create(productos: any): Promise<void> {
    try {
      const dataRef = ref(firebaseDataBase, 'Productos');
      const newElementRef = push(dataRef);
      await set(newElementRef, productos);
      console.log('Producto creado con éxito:', productos);
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw new Error('No se pudo crear el producto.');
    }
  }

  async getProductos(): Promise<any> {
    try {
      const dataRef = ref(firebaseDataBase, 'Productos');
      const snapshot: DataSnapshot = await get(dataRef);
      return snapshot.val();
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('No se pudo obtener los productos.');
    }
  }

  async updateProducto(id: string, updatedData: any): Promise<void> {
    try {
      const productRef = ref(firebaseDataBase, `Productos/${id}`);
      await update(productRef, updatedData);
      console.log(`Producto con ID ${id} actualizado con éxito.`);
    } catch (error) {
      console.error(`Error al actualizar el producto con ID ${id}:`, error);
      throw new Error('No se pudo actualizar el producto.');
    }
  }

  async deleteProducto(id: string): Promise<void> {
    try {
      const productRef = ref(firebaseDataBase, `Productos/${id}`);
      await remove(productRef);
      console.log(`Producto con ID ${id} eliminado con éxito.`);
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
      throw new Error('No se pudo eliminar el producto.');
    }
  }
}
