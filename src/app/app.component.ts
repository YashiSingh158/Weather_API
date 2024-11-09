import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare let dataLayer: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-API-Weather';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        dataLayer.push({
          event: 'pageview',
          pagePath: event.urlAfterRedirects,
        });
        console.log('GTM pageview event:', event.urlAfterRedirects);
      }
    });
  }
}
