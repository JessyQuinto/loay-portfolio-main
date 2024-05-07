import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [
    {
      imgs:[
        '../../../../assets/images/medmatch/screenshot.png',
        '../../../../assets/images/medmatch/screenshot (1).png',
        '../../../../assets/images/medmatch/screenshot (2).png',
        '../../../../assets/images/medmatch/screenshot (3).png'],
      Title:'proyect',
      Description:'description.',
      Technologies:['skills'],
      ghLink:'https://github.com/JessyQuinto',
      demoLink:'https://github.com/JessyQuinto'
    },

    {
      imgs:[
        '../../../../assets/images/todo-app/1.PNG',
        '../../../../assets/images/todo-app/2.PNG',
        '../../../../assets/images/todo-app/3.PNG',
      ],
      Title:'proyect',
      Description:'description.',
      Technologies:['skills'],
      ghLink:'https://github.com/JessyQuinto',
      demoLink:'https://github.com/JessyQuinto'
    },
    {
      imgs:[
      
        '../../../../assets/images/recipe-book/screenshot (1).png',
        '../../../../assets/images/recipe-book/screenshot (2).png',
        '../../../../assets/images/recipe-book/screenshot (3).png',
      ],
      Title:'proyects',
      Description:'description.',
      Technologies:['skills'],
      ghLink:'https://github.com/JessyQuinto',
      demoLink:'https://github.com/JessyQuinto'
    },
    {
      imgs:[
        '../../../../assets/images/design-show/1.png',
        '../../../../assets/images/design-show/2.png',
        '../../../../assets/images/design-show/4.PNG',
      ],
      Title:'proyects',
      Description:'description',
      Technologies:['skills'],
      ghLink:'',
      demoLink:'https://github.com/JessyQuinto'
    },

  
    {
      imgs:[
      
        '../../../../assets/images/typing-speed/1.png',
   
      ],
      Title:'proyects',
      Description:`description.`,
      Technologies:['skills'],
      ghLink:'https://github.com/JessyQuinto',
      demoLink:'https://github.com/JessyQuinto'
    },

    


  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
