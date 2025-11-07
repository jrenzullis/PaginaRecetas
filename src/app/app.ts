import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetasList } from './recetas-list/recetas-list'
import { RecetasForm } from './recetas-form/recetas-form';

interface Recipe {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecetasList,RecetasForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Recetario Angular 🍳';

 recipes = [
  {
    title: 'Tortilla de Patatas',
    description: 'Huevos, patatas y cebolla (opcional 😋).',
    image: 'https://images.unsplash.com/photo-1584270354949-3e6ed1d6dca2?fit=crop&w=400&h=300',
    ingredients: ['Huevos', 'Patatas', 'Cebolla', 'Aceite', 'Sal']
  },
  {
    title: 'Pasta Carbonara',
    description: 'Pasta, panceta, huevo y queso parmesano.',
    image: 'https://images.unsplash.com/photo-1604908177522-1158dc690d3d?fit=crop&w=400&h=300',
    ingredients: ['Pasta', 'Panceta', 'Huevo', 'Queso parmesano', 'Pimienta']
  },
  {
    title: 'Ensalada César',
    description: 'Lechuga, pollo, picatostes, parmesano y salsa césar.',
    image: 'https://images.unsplash.com/photo-1589308078057-8797b4f19869?fit=crop&w=400&h=300',
    ingredients: ['Lechuga', 'Pollo', 'Picatostes', 'Queso parmesano', 'Salsa César']
  },
  {
    title: 'Gazpacho Andaluz',
    description: 'Tomate, pepino, pimiento, ajo y aceite de oliva.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?fit=crop&w=400&h=300',
    ingredients: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva', 'Vinagre']
  }
];
addRecipe(newRecipe: any) {
  this.recipes.push(newRecipe);

}
onDeleteRecipe(index: number) {
  this.recipes.splice(index, 1);
}


}
