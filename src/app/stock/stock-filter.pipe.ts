import { Stock } from './stock';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

    transform(stockList: Stock[], field: string, keyword: string): any {
        if (!keyword || keyword.length === 0 || !field) {
            return stockList;
        } else {
            return stockList.filter(x => x[field].toLowerCase().indexOf(keyword) >= 0);
        }
    }
}
