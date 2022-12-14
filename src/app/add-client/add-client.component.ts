import { Component } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
})
export class AddClientComponent {

  newClient = new Client();

  message!: string;

  constructor(private clientService: ClientService) {

  }

  addClient(){
    //console.log(this.newClient);
    this.clientService.ajouterProduit(this.newClient);
    this.message = "Client " + this.newClient.nomClient +" ajouté avec succes";
    }
  

}
