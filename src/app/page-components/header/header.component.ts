import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/user/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input()
    private user: User;
    constructor() { }

    ngOnInit() {
    }
}
