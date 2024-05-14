import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule ]
})
export class BusquedaComponent {
  termino: string = '';
  resultados: any[] = [];

  constructor(private http: HttpClient) {}

  buscarDestinos() {
    this.http.get(`https://api.opentripmap.com/.../${this.termino}`).subscribe((data: any) => {
      this.resultados = data.results;
    });
  }

  agregarDestino(destino: any) {
    // Implementa la lógica para agregar el destino a la lista de favoritos
    // Por ejemplo:
    console.log('Destino agregado:', destino);
  }
  
}
