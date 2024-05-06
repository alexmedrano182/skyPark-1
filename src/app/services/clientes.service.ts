import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Cliente from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private firestore: Firestore) { }

  addCliente(cliente: Cliente) {
    const clienteRef = collection(this.firestore, 'EntradasBasicas');
    return addDoc(clienteRef, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    const clienteRef = collection(this.firestore, 'EntradasBasicas');
    return collectionData(clienteRef, { idField: 'id' }) as Observable<Cliente[]>;
  }

  deleteCliente(cliente: Cliente) {
    const clienteRef = doc(this.firestore, `EntradasBasicas/${cliente.id}`);
    const clienteDocRef = doc(this.firestore, `EntradasBasicas/${cliente.id}`);
    return clienteRef;
    //return deleteDoc(clienteDocRef);
  }

}
