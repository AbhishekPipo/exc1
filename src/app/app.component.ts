import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string="abhishek";
 
  favFlop = {
    title: "chirutha",
    yearReleased: 2007,
    rating: 5.3,
    imdbLink: "https://www.imdb.com/title/tt1105721/",

soundtrack:{
  spotifyLink: "https://accounts.spotify.com/en/login?error=errorGoogleAccount&flow_ctx=696c8974-5468-493e-8bdd-5589097c3ea8%3A1686827737&continue=https%3A%2F%2Fopen.spotify.com%2Falbum%2F5KEPglkfQDPC5xMCqrrKpa"
}


 
  }

// oncheckout method()

onCheckout(event: any){
  console.log("check out",event.target);
}


titleHover(message: string){
  console.log(message);
}


// onYearReleasedClick(year: number){
// console.log(`clicked ${year}`);
// }
// onRatingClick(rating: number){
//   console.log(rating);
// }
onYearReleasedClick(event:any){
  console.log(event.target.innerText);
}

onRatingClick(event:any){
  console.log(event.target.innerText);
  
   


}
}
