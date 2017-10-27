import { StockService } from 'app/stock/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'app/stock/stock';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Modal } from 'ngx-modialog/plugins/bootstrap/src/modal';


@Component({
    selector: 'app-stock-detail',
    templateUrl: './stock-detail.component.html',
    styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

    @Input()
    editable: boolean = true;
    stock: Stock;
    constructor(private routeInfo: ActivatedRoute,
        private stockService: StockService,
        private router: Router,
        public modal: Modal) {
        console.log("JSON.stringify(modal.overlay)");
    }

    ngOnInit() {
        let stockId: number = Number(this.routeInfo.snapshot.params['id']);
        this.stock = this.stockService.getStock(stockId);
        if (!this.stock) {
            this.stock = new Stock(0, '', 0, 0, '', []);
        }
    }

    /**
     * cancel
     */
    public cancel() {
        this.router.navigateByUrl('stock');
    }

    /**
     * save
     */
    public save() {
        this.stockService.updateStock(this.stock);
        this.router.navigateByUrl('stock');
    }

    /**
     * close
     */
    public close() {
        this.router.navigateByUrl('stock');
    }

    /**
     * removeTag
     */
    public removeTag(index: number) {
        const dialogRef = this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open()
            .then( a => {
                a.result.then( result => {
                    if (index >= 0) {
                        this.stock.tags.splice(index, 1);
                    }
                });
            });
    }
}
