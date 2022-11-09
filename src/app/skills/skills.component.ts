import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.css',
  ],
})
export class SkillsComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    
    $('.services').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 6,
        },
      },
    });
  }
}
