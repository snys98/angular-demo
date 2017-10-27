import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SchemaMetadata } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-components/header/header.component';
import { MenuComponent } from './page-components/menu/menu.component';
import { SidebarComponent } from './page-components/sidebar/sidebar.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { RatingComponent } from './common/components/rating/rating.component';

import { AppRoutingModule } from './app-routing.module';
import { Code404Component } from './common/components/code404/code404.component';
import { StockDetailComponent } from './stock/stock-detail/stock-detail.component';
import { ConsultComponent } from './common/components/consult/consult.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockService } from './stock/stock.service';
import { LoggerService } from './common/services/logger.service';
import { MultiplePipe } from './common/pipes/multiple.pipe';
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { GetTypePipe } from './common/pipes/get-type.pipe';
import { Bool2DisabledPipe } from './common/pipes/bool2disabled.pipe';
import { ModalModule, OverlayRenderer } from 'ngx-modialog';
import { BootstrapModalModule, BSModalContainer, BSMessageModal } from 'ngx-modialog/plugins/bootstrap';
import { Modal } from 'ngx-modialog/plugins/bootstrap/src/modal';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        FooterComponent,
        StockListComponent,
        RatingComponent,
        Code404Component,
        StockDetailComponent,
        ConsultComponent,
        DashboardComponent,
        MultiplePipe,
        StockFilterPipe,
        GetTypePipe,
        Bool2DisabledPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserModule,
        1,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
    ],
    providers: [StockService, Modal,
        {
            provide: LoggerService, useFactory: (isDev: boolean) => {
                console.log(isDev);
                if (isDev) {
                    return new LoggerService('http://localhost/');
                } else {
                    return new LoggerService('https://log.microex.net/');
                }
            }, deps: ['IS_DEV_ENV']
        },
        { provide: 'IS_DEV_ENV', useValue: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
