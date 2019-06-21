import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MapspopoverComponent } from '../mapspopover/mapspopover.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor(public popoverController:PopoverController ) { }

  async presentPopover(event){
   const popover = await this.popoverController.create ({
     component: MapspopoverComponent,
     event
   });
   return await popover.present ();
  }
  ngOnInit() {
  }

}
