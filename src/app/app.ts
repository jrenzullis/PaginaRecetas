import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetesPage } from './recetes-page/recetes-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecetesPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PaginaRecetas');
}
