import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {
  
  clients? : Client[];
  //private clientService = new ClientService();

  constructor(private clientService: ClientService) {

   /* this.clients = [
      {idClient : 1, nomClient : "hamdi", prenomClient : "mahfoudh", numtelClient : 23712734 ,adresseClient :"rue l ommem l motahida"},
      {idClient : 2, nomClient : "ahmed", prenomClient : "lwsif", numtelClient : 45785932 ,adresseClient :"rue l bech"},
      {idClient : 3, nomClient : "mohsen", prenomClient : "chaari", numtelClient : 25255558 ,adresseClient :"rue landalos"},
    ];*/
    }

    ngOnInit(): void {
      this.clients = this.clientService.listeClient();

    }

    
}
