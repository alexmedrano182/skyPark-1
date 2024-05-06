export default interface Cliente {
    id?: string;
    lugar: number;
    nombre: string;
    apellidos: string;
    correo: string;
    placa: string;
    marca: string;
    modelo: string;
    color: string;
    isPremium: boolean;
    premiumId: string;
    entrada: string;
    salida: string;
}