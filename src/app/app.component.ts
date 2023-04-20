import { Component } from '@angular/core';
import { Emittente } from './emittente/emittente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Verifica di recupero 20/04/2023';
  emittenti: Emittente[] =
  [
    {
       "nome": "Radio Maria",
       "frequenza": 95.1,
       "genere": "religiosa",
       "anno": 1991
    },
    {
       "nome": "Rai Radio 1",
       "frequenza": 87.6,
       "genere": "varie",
       "anno": 1966
    },
    {
       "nome": "Virgin Radio",
       "frequenza": 98.7,
       "genere": "musica",
       "anno": 1999
    },
    {
       "nome": "RTL 102.5",
       "frequenza": 92.4,
       "genere": "musica",
       "anno": 1989
    },
    {
       "nome": "Radio ZETA Italiana",
       "frequenza": 88.9,
       "genere": "musica",
       "anno": 1984
    },
    {
       "nome": "Radio Monte Carlo",
       "frequenza": 106.1,
       "genere": "musica",
       "anno": 1977
    }
   ];

   sortByAlphabet: boolean = true;
   sortLabel: string = "In Ordine Alfabetico";

   onSortClick() {
      if (this.sortByAlphabet)
      {
         this.emittenti = this.emittenti.sort((a, b) => {
            const nameA = a.nome.toUpperCase();
            const nameB = b.nome.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
         });
         this.sortLabel = "In Ordine Alfabetico";
      }
      else
      {
         this.emittenti = this.emittenti.sort((a, b) => a.frequenza - b.frequenza);
         this.sortLabel = "Ordinato secondo la frequenza (crescente)";
      }
      this.sortByAlphabet = !this.sortByAlphabet;
   }
   ngInit() {
      this.onSortClick();
   }
}