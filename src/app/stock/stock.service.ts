import { Stock } from 'app/stock/stock';
import { Injectable } from '@angular/core';
import { LoggerService } from 'app/common/services/logger.service';

@Injectable()
export class StockService {

    private stocks = [
        new Stock(0, '雪乃股', 8.88, 4.8, '"本来, 我们就搞不懂对方在想什么. 因为即使互相认识, 也不见得就一定能互相理解"', ['高冷', '女神', '御姐', '喵控', '反差萌', '早见大法好']),
        new Stock(1, '团子股', 3.1415926, 3.8, '"我不明白, 我不聪明, 很多事情, 你不清清楚楚说出来, 我就不明白"', ['狗控', '邻家小妹', '单纯', '温柔', '东山大法好']),
        new Stock(2, '一色股', 4.88, 4.2, '"难道说刚才是想追求我吗对不起虽然一瞬间有点心动但是仔细想想我们果然还是不可能的"', ['调皮', '小恶魔', '萝莉', '反差萌', '佐仓大法好']),
    ];

    constructor(public logger: LoggerService) { }

    public getStock(id: number): Stock {
        this.logger.log('getStock');
        return this.stocks.find((stock) => stock.id === id);
    }

    public getStocks(pageIndex: number, pageSize: number = 20): Array<Stock> {
        this.logger.log('getStocks');
        const relIndex = pageIndex - 1;
        return this.stocks.slice(relIndex * pageSize, relIndex * pageSize + pageSize);
    }
    public updateStock(stock: Stock): boolean {
        let target = this.stocks.find(x => x.id === stock.id);
        if (!target) {
            return false;
        }
        Object.assign(target, stock);
        return true;
    }
}
