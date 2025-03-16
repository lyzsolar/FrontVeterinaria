import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  standalone: true,
  imports: [CommonModule] })
export class PetListComponent {
  @Input() pets: { name_mascota: string, breed_mascota: string }[] = [];  // Usar @Input para recibir los datos
}
