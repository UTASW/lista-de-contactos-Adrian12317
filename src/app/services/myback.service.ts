import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class MybackService {

  constructor(public alert: AlertController) { }
  arrPersonas: Array<any> = [] as Array<JSON>;
  strNombre: string;
  intNumero: null;
  strCorreo: string;
  strNotas: string;
  strGenero: string;
  shownotes= false;
  showCard:boolean;
  date:Date;
  Nlnext:boolean;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  ngOnInit() {
    this.strNombre= '';
    this.intNumero= null;
    this.strCorreo= '';
    this.strNotas= '';
    this.strGenero= '';
  }
  addperson() {
    this.Nlnext=false;
    (this.strNombre) ? this.fnError() : this.fnError('ERROR: Ingrese nombre');
    (this.intNumero) ? this.fnError() : this.fnError('ERROR: Ingrese numero');
    (this.strCorreo) ? (this.regexp.test(this.strCorreo))? this.fnError() : this.fnError('ERROR: Ingrese correo'): this.fnError('ERROR: Complete el correo');
    (this.strNotas) ? this.fnError() : this.fnError('ERROR: Ingrese notas');
    (this.strGenero) ? this.fnError() : this.fnError('ERROR: Selecione genero');
    if(!this.Nlnext){
      const jsnPersona: any = {
        nombre: this.strNombre,
        numero: this.intNumero,
        correo: this.strCorreo,
        notas: this.strNotas,
        genero: this.strGenero,
        date : this.date
      };

      this.arrPersonas.push(jsnPersona);
      console.log(this.arrPersonas);
      this.datasave();
      this.strNombre= '';
      this.intNumero= null;
      this.strCorreo= '';
      this.strNotas= '';
      this.strGenero= '';

    }

  }
  async alertdata(msg){
    const alert = await this.alert.create({
      message: msg
    });
    alert.present();
  }
  fnError(msg?: string){
    if(msg) {
        this.alertdata(msg);
        this.Nlnext= true;
    } else if(this.Nlnext){
        this.Nlnext=true;
    } else {
        this.Nlnext=false;
    }
}

  async datasave(){
    const alert = await this.alert.create({
      message: 'Guardadó correctamente'
    });
    alert.present();
  }

  async eliminar(item){
  const alert =  await this.alert.create({
    message:'Confirmar eliminación',
    buttons:[
      {
        text:'Cancelar',
        role: 'cancel'
      },
      {
        text:'Aceptar',
        handler: ()=>{
          let i = this.arrPersonas.indexOf(item);
          this.arrPersonas.splice(i, 1);

        }
      }
    ]

  });
  alert.present();

}



  
}