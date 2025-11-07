import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recetas } from './recetas/recetas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas-list',
  imports: [Recetas, CommonModule], 
  templateUrl: './recetas-list.html', 
  styleUrl: './recetas-list.scss', 
})
export class RecetasList {
  // Recibimos las recetas desde el componente padre
  @Input() recipes: any[] = [];

  // Evento que emitira el indice de la receta que se quiere eliminar
  @Output() deleteRecipe = new EventEmitter<number>();

  // Funcion que se llama cuando se quiere borrar una receta
  onDeleteRecipe(index: number) {
    // Emitimos el evento al componente padre con el indice de la receta
    this.deleteRecipe.emit(index);
  }
}
