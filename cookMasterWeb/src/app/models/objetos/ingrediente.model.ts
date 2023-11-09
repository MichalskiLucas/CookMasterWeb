export class Ingrediente{
    id: number;
    descricao: string;
    ativo: boolean;

    constructor(
        id: number = 0,
        descricao: string = '',
        ativo: boolean = true,
    ){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
    }
}
