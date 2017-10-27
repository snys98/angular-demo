import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { User } from 'app/user/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router) {
        router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (event.url === '/dashboard') {
                this.pageTitle = 'Dashboard';
                this.pageDesc = 'Dashboard';
            } else if (event.url.startsWith('/stock')) {
                this.pageTitle = 'Stock';
                this.pageDesc = 'Stock';
            }
        });
    }
    pageTitle = 'auction';
    pageDesc = 'auction';
    user = new User('Lulus', '../assets/img/user2-160x160.jpg');
}
