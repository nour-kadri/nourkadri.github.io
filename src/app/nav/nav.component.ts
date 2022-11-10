import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { navService } from './nav.service';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { Store } from '@ngrx/store';
import {trigger, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  template: ``,
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class NavComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (
      window.pageYOffset > 75 &&
      element.classList.contains('mavba') == false
    ) {
      element.classList.add('navba');
    } else {
      element.classList.remove('navba');
    }
  }
  count$: Observable<number>;
  constructor(
    service: navService,
    private el: ElementRef,
    private store: Store<{ count: number }>
  ) {
    // this.courses = service.getCourses();
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  title = 'List';
  toggleMobileMenu = (event: any) => {
    let element = document.querySelector('#navbar') as HTMLElement;
    let el = document.querySelector('.navbar') as HTMLElement;
    if (element.classList.contains('collapse')) {
      el.classList.add('navba');
      element.classList.remove('collapse');
    } else {
      el.classList.remove('navba');
      element.classList.add('collapse');
    }
  };
  ngOnInit(): void {}
}
