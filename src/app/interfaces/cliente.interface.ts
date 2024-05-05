export default interface Cliente {
    id?: string;
    nombre: string;
    apellidos: string;
    placa: string;
    marca: string;
    modelo: string;
    color: string;
    isPremium: boolean;
    premiumId: string;
    entrada: string;
    salida: string;
}