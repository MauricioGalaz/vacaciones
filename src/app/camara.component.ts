import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
  standalone: true,
  imports: [ IonicModule ]
})
export class CamaraComponent {
  imagenCapturada: string | undefined;

  constructor() {}

  async capturarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.imagenCapturada = image.webPath;
  }
}
