import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ingrediente } from 'src/app/models/objetos/ingrediente.model';
import { IngredienteService } from 'src/app/services/ingrediente.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss',
  "node_modules/ngx-toastr/toastr.scss"]
})
export class IngredientComponent {
  constructor(private ingredienteService: IngredienteService,
              private toastr: ToastrService) {}

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
        this.toastr.success("Ingrediente aceito!", "Sucesso");
        this.listaIngredientes.splice(index, 1);
      },
      error: (error: any) => {
        this.toastr.error(error, "Erro");
      }
    });
  }

  onClickDelete(ingredient: Ingrediente, index: number){
    this.toastr.success("Ingrediente recusado!", "Ingredientes");
    this.toastr.warning("warn", "Ingredientes");
    this.toastr.error("error!", "Ingredientes");
    this.toastr.info("info!", "Ingredientes");
return;
    this.ingredienteService.deleteIngredient(ingredient).subscribe({
      next: () => {
        this.listaIngredientes.splice(index, 1);
        this.toastr.success("Ingrediente recusado!", "Ingredientes");
      },
      error: (error: any) => {
        this.toastr.error(error, "Erro");
      }
    });
  }
}
