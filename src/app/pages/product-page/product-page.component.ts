import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

   films: any[] = [{ id: 1,
    nom: "La cité de la peur",
    real: "Alain Berbérian",
    synopsis: "Odile Deray, attachée de presse, vient au festival de Canne pour promouvoir le film ...",
    annee: 1994,
    img: "https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
    details: ""
    },
    {
    id: 2,
    nom: "Le parrain",
    real: "Francis Ford Coppola",
    synopsis: "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone ...",
    annee: 1972,
    img: "https://fr.web.img4.acsta.net/r_1920_1080/medias/nmedia/18/35/57/73/18660716.jpg",
    details: ""
    },
    {
    id: 3,
    nom: "Fight Club",
    real: "David Fincher",
    synopsis: "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerf retrouve un équilibre ...",
    annee: 1999,
    img: "https://m.media-amazon.com/images/I/71zEIB3ekZL._AC_SL1245_.jpg",
    details: ""
    }
   ];
   
  albums: any[] =  [{
    "id": 4,
    "nom": "The Dark Side of the Moon",
    "artiste": "Pink Floyd",
    "annee": 1973,
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/langfr-220px-The_Dark_Side_of_the_Moon_Cover.svg.png",
    "details": ""
  },
  {
    "id": 5,
    "nom": "Space Oddity",
    "artiste": "David Bowie",
    "annee": 1969,
    "img": "https://m.media-amazon.com/images/I/81GaOhfPyFL._SL1300_.jpg",
    "details": ""
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
