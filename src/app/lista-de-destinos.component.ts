import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarCostoModalComponent } from '../editar-costo-modal/editar-costo-modal.component';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { SearchbarChangeEventDetail } from '@ionic/core';
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-lista-de-destinos',
  templateUrl: './lista-de-destinos.component.html',
  styleUrls: ['./lista-de-destinos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule ]
})
export class ListaDeDestinosComponent {
  @Input() destinos: any[] | undefined; 
welcomeImageUrl: any;
destinosRecientes: any;



  constructor(private modalController: ModalController) {}

  async editarCosto(destino: any) {
    const modal = await this.modalController.create({
      component: EditarCostoModalComponent,
      componentProps: { destino },
    });
    await modal.present();
  }

  eliminarDestino(destino: any) {
    if (this.destinos) {
      const index = this.destinos.indexOf(destino);
      if (index > -1) {
        this.destinos.splice(index, 1);
      }
    }
  }

  buscarDestinos(event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
    console.log('Buscar destinos:', event.target.value);
    // Implementa la lógica de búsqueda aquí
  }
}
