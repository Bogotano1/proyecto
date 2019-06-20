import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
User=
  {
    usuario: "Seb",
    password: "123"
  }
    constructor( public loadingCtrl : LoadingController, public NavCtrl: NavController){ }

      ngOnInit() {
    }

  async login(forma:NgForm)
  {
     if (forma.valid) 
    {
        const loading = await this.loadingCtrl.create({
          message: 'Validando...',
          spinner: 'bubbles',
          duration:  2000,
        });
        loading.present();
         
        console.log("ingrese a login"); 
      }
    if (this.User.usuario === forma.value.nombre && this.User.password === forma.value.Contraseña  )
    {
      console.log("verdadero");
      this.NavCtrl.navigateForward("/tabs/tab1");
      
    }
    else
    {
      console.log("falso");
    }
  }
}
