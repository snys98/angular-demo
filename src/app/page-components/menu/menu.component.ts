import { User } from 'app/user/user';

import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    @Input()
    public user: User;
    public activeMenu: MenuItem;
    public menuItems: Array<MenuItem>;
    constructor() {
        this.menuItems = [
            new MenuItem('首页', 'dashboard'),
            new MenuItem('股票管理', 'stock'),
        ];
        this.activeMenu = this.menuItems[0];
    }

    ngOnInit() {
    }

}

export class MenuItem {
    constructor(public name: string, public url: string) {

    }
}
