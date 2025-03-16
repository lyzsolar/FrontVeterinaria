import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets/pets.service';
import { Pets } from '../../models/pets';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PetListComponent } from "../../components/pet-list/pet-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, HeaderComponent, FooterComponent, PetListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  pet: Pets = {
    id: 0,
    name_mascota: '',
    breed_mascota: ''
  }

  pets: Pets[] = []; 
  isPetsVisible: boolean = false;

  constructor(private petsService: PetsService) { }

  
  ngOnInit() {
    this.loadPets();  
  }


  onSubmit() {
    this.petsService.addPets(this.pet).subscribe(response => {
      console.log('Mascota guardada:', response);
      alert('Mascota registrada con éxito');
      this.pet = { id: 0, name_mascota: '', breed_mascota: '' }; 
      this.loadPets();
    }, error => {
      console.error('Error al registrar mascota:', error);
      alert('Hubo un error al registrar la mascota.');
    });
  }

  
    loadPets() {
      this.petsService.getPets().subscribe(pets => {
        this.pets = pets;  
      });
    }

    togglePetsVisibility() {
      this.isPetsVisible = !this.isPetsVisible;
    }
}
