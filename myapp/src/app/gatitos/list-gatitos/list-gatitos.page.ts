import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ServiceGatitosService } from 'src/app/services/service-gatitos.service';

@Component({
  selector: 'app-list-gatitos',
  templateUrl: './list-gatitos.page.html',
  styleUrls: ['./list-gatitos.page.scss'],
})
export class ListGatitosPage {

  gatitos=[]
  constructor(private gatitosServ: ServiceGatitosService, private loadingCtrl:LoadingController) { }



  ionViewWillEnter(){
    this.loadGatitos()

  }
  async loadGatitos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message:"Cargando...",
      spinner: "bubbles"
    });
    await loading.present();
    this.gatitosServ.listarGatitos().subscribe((res)=>{
      loading.dismiss();
      let listString = JSON.stringify(res)
      console.log(listString + "<- listString");
      this.gatitos = JSON.parse(listString)

      console.log(this.gatitos + "<- array de gatitos");
      event?.target.complete();
    }, (err)=>{
        console.log(err.message)
        loading.dismiss()
    });
  }
}
