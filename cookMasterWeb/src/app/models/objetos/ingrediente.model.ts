export class Ingrediente{
    id: number;
    descricao: string;

    constructor(
        id: number = 0,
        descricao: string = ''
    ){
        this.id = id;
        this.descricao = descricao;
    }
}
