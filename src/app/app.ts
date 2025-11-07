import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetasList } from './recetas-list/recetas-list';
import { RecetasForm } from './recetas-form/recetas-form';
import { Navbar } from './nav-bar/nav-bar';

// Definimos la interfaz para las recetas
interface Recipe {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecetasList, RecetasForm, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Titulo principal de la aplicacion
  title = 'Recetario Angular';

  // Lista inicial de recetas
  recipes = [
    {
      title: 'Tortilla de Patatas',
      description: 'Huevos, patatas y cebolla.',
      image: 'https://images.unsplash.com/photo-1639669794539-952631b44515?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2121',
      ingredients: ['Huevos', 'Patatas', 'Cebolla', 'Aceite', 'Sal']
    },
    {
      title: 'Pasta Carbonara',
      description: 'Pasta, panceta, huevo y queso parmesano.',
      image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
      ingredients: ['Pasta', 'Panceta', 'Huevo', 'Queso parmesano', 'Pimienta']
    },
    {
      title: 'Ensalada Cesar',
      description: 'Lechuga, pollo, picatostes, parmesano y salsa cesar.',
      image: 'https://plus.unsplash.com/premium_photo-1664478283448-94d7b72a23ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
      ingredients: ['Lechuga', 'Pollo', 'Picatostes', 'Queso parmesano', 'Salsa Cesar']
    },
    {
      title: 'Gazpacho Andaluz',
      description: 'Tomate, pepino, pimiento, ajo y aceite de oliva.',
      image: 'https://plus.unsplash.com/premium_photo-1722427244478-d40cfe83cc9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=924',
      ingredients: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva', 'Vinagre']
    }
  ];

  // Funcion para agregar una nueva receta a la lista
  addRecipe(newRecipe: any) {
    this.recipes.push(newRecipe);
  }

  // Funcion para eliminar una receta de la lista por su indice
  onDeleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

}
