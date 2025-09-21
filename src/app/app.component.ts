import { Component } from '@angular/core';
import { Icourse } from './shared/models/course';
import { Iplayers } from './shared/models/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
searchedVal:string="";
  courseInfo:Array<Icourse>=[{
  title: "JavaScript",
    students:30215645154,
    ratings: 4.7,
    releaseDate: "2023-06-15",
    price:9.99
},
{
  title: "Python",
    students:30254154515,
    ratings: 4.0,
    releaseDate:"1930-07-14",
    price:10.99
}
]
 players:Array<Iplayers> = [
  {
    name: "Lionel Messi",
    age: 36,
    position: "Forward",
    team: "Inter Miami",
    rating: 9.5
  },
  {
    name: "Cristiano Ronaldo",
    age: 38,
    position: "Forward",
    team: "Al-Nassr",
    rating: 9.3
  },
  {
    name: "Kevin De Bruyne",
    age: 32,
    position: "Midfielder",
    team: "Manchester City",
    rating: 9.0
  },
  {
    name: "Virgil van Dijk",
    age: 32,
    position: "Defender",
    team: "Liverpool",
    rating: 8.7
  },
  {
    name: "Thibaut Courtois",
    age: 31,
    position: "Goalkeeper",
    team: "Real Madrid",
    rating: 8.9
  }
];
}
