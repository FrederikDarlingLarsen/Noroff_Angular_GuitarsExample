export interface Guitar {
    id: string;
    model: string;
    manufacturer: string;
    bodyType: string;
    materials: GuitarMaterials;
    string: number;
    image: string;

}

export interface GuitarMaterials{
    neck: string;
    fretboard: string;
    body: string;
}