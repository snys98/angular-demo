import {
    Component,
    OnInit,
    Input,
    SimpleChanges,
    AfterContentInit,
    DoCheck,
    OnChanges,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
    @Input()
    rating: number = 0;
    @Input()
    editAble: boolean = false;
    @Output()
    ratingChange: EventEmitter<number> = new EventEmitter();
    starStates: Array<boolean>;
    constructor() {
        console.log('ctor');
     }

     /**
      * clickStar
      */
     public clickStar(index: number) {
         console.log(index);
         if (this.editAble) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
         }
     }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`ngOnChanges ${JSON.stringify(changes)}`);
        this.starStates = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= this.rating) {
                this.starStates.push(true);
            } else {
                this.starStates.push(false);
            }
        }
    }

}
