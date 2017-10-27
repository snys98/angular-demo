import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    SimpleChanges,
    Input
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StockService } from 'app/stock/stock.service';
import { Stock } from 'app/stock/stock';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
    keyword: string;
    public stocks: Stock[];
    public page: number;
    public searchInput: FormControl = new FormControl();

    // private isPro: boolean;

    constructor(private routeInfo: ActivatedRoute,
        private router: Router,
        public stockService: StockService) {
        this.searchInput.valueChanges.debounceTime(500)
            .subscribe(keyword => this.filterStock(keyword));
    }

    ngOnInit() {
        // 每次变换路由都会激活
        this.routeInfo.params.subscribe((params: Params) => {
            this.page = params['page'] == null ? 1 : params['page'];
            this.stocks = this.stockService.getStocks(1);
        });
        // data不可见传值
        // this.isPro = this.routeInfo.snapshot.data[0]["isPro"];
        // 只激活一次
        // this.page = this.routeInfo.snapshot.params['page'];
    }
    /**
     * create
     */
    public create() {
        this.router.navigateByUrl('/stock/detail');
    }

    /**
     * update
     */
    public update(stock: Stock) {
        this.router.navigateByUrl('/stock/detail/' + stock.id);
    }

    /**
     * filterStock
     */
    public filterStock(keyword: string) {
        this.keyword = keyword;
    }
}


