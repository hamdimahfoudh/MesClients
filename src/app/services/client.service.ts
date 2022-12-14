import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients : Client[];
  
  constructor() { 
    console.log("creation de service client")
    this.clients = [
      {idClient : 1, nomClient : "hamdi", prenomClient : "mahfoudh", numtelClient : 23712734 ,adresseClient :"rue l ommem l motahida"},
      {idClient : 2, nomClient : "ahmed", prenomClient : "lwsif", numtelClient : 45785932 ,adresseClient :"rue l bech"},
      {idClient : 3, nomClient : "mohsen", prenomClient : "chaari", numtelClient : 25255558 ,adresseClient :"rue landalos"},
    ];
  }

  listeClient():Client[]{
    return this.clients;
  }

  ajouterProduit( prod: Client){
    this.clients.push(prod);
    }
    

}
