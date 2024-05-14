import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'

export class DestinosModule {}

@Component({
  selector: 'app-editar-costo-modal',
  templateUrl: './editar-costo-modal.component.html',
  styleUrls: ['./editar-costo-modal.component.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule ]
})
export class EditarCostoModalComponent {
  costo: number | undefined;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  guardarCosto() {
    // Lógica para guardar el costo del viaje
    this.modalController.dismiss(this.costo);
  }
}
