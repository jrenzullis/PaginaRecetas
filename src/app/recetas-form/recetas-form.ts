import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './recetas-form.html',
  styleUrl: './recetas-form.scss',
})
export class RecetasForm {
  // Campos del formulario para crear una nueva receta
  title = '';           
  description = '';     
  image = '';           
  ingredientsText = ''; 

  // Evento que se envia al componente padre cuando se añade una receta
  @Output() addRecipe = new EventEmitter<any>();

  // Funcion que se llama al enviar el formulario
  onSubmit() {
    // validar que los campos obligatorios no esten vacios
    if (!this.title || !this.description) return;

    // crear el objeto de la nueva receta
    const newRecipe = {
      title: this.title,
      description: this.description,
      image: this.image || 'https://via.placeholder.com/400x300?text=Receta', // placeholder si no hay imagen
      ingredients: this.ingredientsText
        ? this.ingredientsText.split(',').map(i => i.trim()) // convertir texto a array
        : []
    };

    // emitir la receta hacia el componente padre
    this.addRecipe.emit(newRecipe);

    // limpiar los campos del formulario para la siguiente receta
    this.title = '';
    this.description = '';
    this.image = '';
    this.ingredientsText = '';
  }

}
