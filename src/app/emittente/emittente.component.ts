import { Component, Input } from '@angular/core';
import { Emittente } from './emittente.model';

@Component({
  selector: 'app-emittente',
  templateUrl: './emittente.component.html',
  styleUrls: ['./emittente.component.css']
})
export class EmittenteComponent {
  @Input() emittente: Emittente;

  ngInit() {
  
  }
}
