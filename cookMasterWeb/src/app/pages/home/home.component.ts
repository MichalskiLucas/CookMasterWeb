import { Component, OnInit } from '@angular/core';
import { IngredienteService } from '../../services/ingrediente.service';
import { Ingrediente } from '../../models/objetos/ingrediente.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
}
