import { Component, ViewChild, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { } from '@types/googlemaps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.startGoogleMap();
  }

  startGoogleMap() {
    const location =new google.maps.LatLng(170141);
    const mapProp= {

        center: location,
        zoom: 12,
        mapaoTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(this.gmapElement.nativeElement, mapeoProp);
    var marcador = new google.maps.Marker({
    position:location,
    mapeo:mapeo,
    title:"My home",
   });

  }
}
