import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mapspopover',
  templateUrl: './mapspopover.component.html',
  styleUrls: ['./mapspopover.component.scss'],
})
export class MapspopoverComponent implements OnInit {

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {}

  doc(){
    window.open("", "_blank")
    this.popoverController.dismiss();
  }
  close(){
    window.open("", "_blank")
    this.popoverController.dismiss();
  }

}

