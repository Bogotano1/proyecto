import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { format } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
User=
  {
    usuario: "Sebastian",
    password: "123456"
  }
    constructor( public loadingCtrl : LoadingController){ }

      ngOnInit() {
    }

  async login(forma:NgForm)
  {
     if (forma.valid) 
    {
        const loading = await this.loadingCtrl.create({
          message: 'Validando...',
          spinner: 'bubbles'
        });
        loading.present();
        //this.User.correo = forma.value.email;
        //this.User.password = forma.value.clave; 
        console.log("ingrese a login"); 
    }
    if (this.User.usuario === forma.value.user)
    {
      console.log("verdadero");
      //this.user.correo. = forma.value.email
      //this.user.contraseña = forma.value.clave;
    }
    else
    {
      console.log("falso");
    }
  }
}
