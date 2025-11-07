import { Component,Output,EventEmitter   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './recetas-form.html',
  styleUrl: './recetas-form.scss',
})
export class RecetasForm {
  // Campos del formulario
  title = '';
  description = '';
  image = '';
  ingredientsText = '';

  // Evento hacia el padre
  @Output() addRecipe = new EventEmitter<any>();

  onSubmit() {
    if (!this.title || !this.description) return;

    const newRecipe = {
      title: this.title,
      description: this.description,
      image: this.image || 'https://via.placeholder.com/400x300?text=Receta',
      ingredients: this.ingredientsText
        ? this.ingredientsText.split(',').map(i => i.trim())
        : []
    };

    this.addRecipe.emit(newRecipe);

    // limpiar formulario
    this.title = '';
    this.description = '';
    this.image = '';
    this.ingredientsText = '';
  }

}
