import { Component } from '@angular/core';
import { Ingrediente } from 'src/app/models/objetos/ingrediente.model';
import { IngredienteService } from 'src/app/services/ingrediente.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent {
  constructor(private ingredienteService: IngredienteService) {}

  ngOnInit(): void {
    this.ingredienteService.findAllIngredientes().subscribe({
      next: (response: Ingrediente[]) => {
        this.listaIngredientes = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  listaIngredientes: Ingrediente[] = [];
  
  onClickEnable(ingredient: Ingrediente, index: number){
    ingredient.ativo = true;
    this.ingredienteService.enableIngredient(ingredient).subscribe({
      next: () => {
        console.log('Atualizado');
        this.listaIngredientes.splice(index, 1);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  onClickDelete(ingredient: Ingrediente, index: number){
    this.ingredienteService.deleteIngredient(ingredient).subscribe({
      next: () => {
        console.log('Deletado');
        this.listaIngredientes.splice(index, 1);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
