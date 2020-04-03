import { Component, OnInit } from '@angular/core';
import {tweet} from '../models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  miTweet: tweet;
  listaTweets = [];

  constructor() {
    
    this.miTweet = {
      id: 1,
      texto: "you know something",
      autor: "julian vargas"
    };
    //this.listaTweets.push(this.miTweet); 
  }

  adicionarTweet (addTweet){
    console.log("texto: ",addTweet.texto," autor: ", addTweet.autor );
    const newTweet = {
      ...addTweet,
      id: this.listaTweets.length+1
    }
    console.log(newTweet);
    this.listaTweets.push(newTweet);
  }

  ngOnInit(): void {
  }

}
