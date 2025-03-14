import { Component } from '@angular/core';
import { PetsService } from '../../services/pets/pets.service';
import { Pets } from '../../models/pets';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pet: Pets = {
    id: 0,
    name_mascota: '',
    breed_mascota: ''
  }

  constructor(private petsService: PetsService) { }

  onSubmit() {
    this.petsService.addPets(this.pet).subscribe(response => {
      console.log('Mascota guardada:', response);
      alert('Mascota registrada con éxito');
      this.pet = { id: 0, name_mascota: '', breed_mascota: '' }; // Reiniciar formulario
    }, error => {
      console.error('Error al registrar mascota:', error);
      alert('Hubo un error al registrar la mascota.');
    });
  }
}
