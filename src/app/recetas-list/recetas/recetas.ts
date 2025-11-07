import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-recetas',
  imports: [CommonModule],
  templateUrl: './recetas.html',
  styleUrl: './recetas.scss',
})
export class Recetas {
  @Input() recipe: any;   // cada receta
  @Input() index!: number; 
  @Output() delete = new EventEmitter<number>();

  onDelete() {
  this.delete.emit(this.index); // emite el índice al padre
}

}
