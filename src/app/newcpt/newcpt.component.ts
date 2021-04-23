import { Component, OnInit } from '@angular/core';
import { Novos } from './Novo';

@Component({
  selector: 'app-newcpt',
  templateUrl: './newcpt.component.html',
  styleUrls: ['./newcpt.component.css']
})
export class NewcptComponent implements OnInit {
  new: Novos = {
    nome: "Roberto",
    idade: 20
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
