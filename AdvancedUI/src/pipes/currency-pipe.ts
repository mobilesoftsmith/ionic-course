import { Pipe } from '@angular/core';

@Pipe ({
    name: 'currencyAnnotation'
})

export class CurrencyAnnotation {
    transform(value, args) {
        if (args == 'cdn') {
            return 'CD $' + value;
        }else{
            return '$' + value;
        }
    }
}