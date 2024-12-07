import { Injectable } from '@nestjs/common';
import { DataSnapshot, push, ref, set, get } from 'firebase/database';
import { firebaseDataBase } from 'src/firebase.config';

@Injectable()
export class ProductosService {
  
  
  async create(productos: any): Promise<void> {
    try {
      const dataRef = ref(firebaseDataBase, 'Productos'); // Referencia a la colección 'Productos'
      const newElementRef = push(dataRef); // Crea una nueva referencia en la colección
      await set(newElementRef, productos); // Guarda el objeto en la referencia recién creada
      console.log('Producto creado con éxito:', productos);
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw new Error('No se pudo crear el producto.');
    }
  }

  async getProductos(): Promise<any> {
    try {
      const dataRef = ref(firebaseDataBase, 'Productos'); // Ajusté el nombre para que coincida
      const snapshot: DataSnapshot = await get(dataRef); // Aquí usamos get de Firebase
      return snapshot.val(); // Devuelve los datos
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      throw new Error('No se pudo obtener los productos.');
    }
  }
}
