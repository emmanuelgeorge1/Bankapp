import { Component, OnInit } from '@angular/core';
import{ animate, state, style,transition,trigger} from '@angular/animations'
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'300px',
        background:'red'
      })),
      state('close',style({
        height:'100px',
        background:'green'
      })),
      transition('open=>closed',[
        animate('1s')
      ]),
      transition('closed=>open',[
        animate('2s')
      ]),

    ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen=!this.isOpen
  }

}
