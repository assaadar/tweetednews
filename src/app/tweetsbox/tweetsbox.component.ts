import { TweetsBox } from './../models/tweetsbox.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweetsbox',
  templateUrl: './tweetsbox.component.html',
  styleUrls: ['./tweetsbox.component.css']
})
export class TweetsboxComponent implements OnInit {
  tweetsBoxes: TweetsBox[] = [
    new TweetsBox('Reuters', [
      'Senate votes on proposals to end the government shutdown',
      'No-deal Brexit would betray UK referendum - Hammond https://reut.rs/2Ul9CpR ',
      '\'Three Little Pigs\' welcome the Lunar New Year'
    ]),
    new TweetsBox('Aljazeera', [
      'As demand for #palmoil increases, so does demand for land for plantations. @AJ101East investigates the ongoing conflict over land rights in #Indonesia',
      '#AlJazeera Media Network denounces this arbitrary decision which lacks any credible justification and contradicts the basic norms of #press #freedom'
    ]),
  ];

  constructor() { }

  ngOnInit() {
  }

}
