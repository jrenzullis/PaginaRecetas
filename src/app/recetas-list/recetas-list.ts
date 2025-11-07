import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Recetas } from './recetas/recetas';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-recetas-list',
  imports: [Recetas, CommonModule],
  templateUrl: './recetas-list.html',
  styleUrl: './recetas-list.scss',
})
export class RecetasList {
  @Input() recipes: any[] = [];
  @Output() deleteRecipe = new EventEmitter<number>();

  onDeleteRecipe(index: number) {
  this.deleteRecipe.emit(index);
}

}
