import { Component, OnInit } from '@angular/core';
import { combineLatest, concatMap, debounceTime, delay, filter, forkJoin, interval, map, mergeMap, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit{

  sampleArrayForOf =[1,2,3,4];
  sampleArrayForMap:any = '1,2,3';

  ngOnInit(): void {

    //of operator
    const data$ = of(1,2,34); // Observable emitting values 1, 2, 3, 4
    data$.subscribe(value => console.log(value)); // Output: 1, 2, 3, 4   
    
    
    //map operator
    of(1,2,3,4).pipe(
      map(value => value * 2)
    ).subscribe(console.log);
    // Output: 2, 4, 6 //converts each value to observable 


    of(1, 2, 3, 4, 5).pipe(
      filter(value => value % 2 === 0)
    ).subscribe(console.log);  //filter can be emmited based on condition 
    // Output: 2, 4



    of('A', 'B').pipe(
      mergeMap(value => of(`${value}1`, `${value}2`))
    ).subscribe(console.log); //in real time if 2 async calls take place we can combine them and handle with mergemaps 
    // Output: A1, A2, B1, B2

    
    of('A', 'B').pipe(
      switchMap(value => of(`${value}1`, `${value}2`).pipe(delay(1000)))
    ).subscribe(console.log);   //cancels the previous a1,a2 observable and emit latest is switch map


    of('A', 'B').pipe(
      concatMap(value => of(`${value}1`, `${value}2`))
    ).subscribe(console.log);



//     // Simulating an observable for stock A price
// const stockAPrice$ = interval(1000).pipe(
//   map(i => (100 + i * 2)) // Price increments by 2 every second
// );

// // Simulating an observable for stock B price
// const stockBPrice$ = interval(1500).pipe(
//   map(i => (200 + i * 3)) // Price increments by 3 every second
// );

// // Combining the latest values from both stock observables
// combineLatest([stockAPrice$, stockBPrice$]).pipe(
//   map(([stockA, stockB]) => ({
//     stockA,
//     stockB,
//     combinedPrice: stockA + stockB
//   }))
// ).subscribe({
//   next: (result) => {
//     console.log(`Stock A Price: $${result.stockA}, Stock B Price: $${result.stockB}`);
//     console.log(`Combined Price: $${result.combinedPrice}`);
//   },
//   error: (err) => console.error(err),
//   complete: () => console.log('All prices processed.')
// });


of(1, 2, 3, 4, 5).pipe(
  take(3)
).subscribe(console.log);
// Output: 1, 2, 3


of(44, 55, 66).pipe(
  debounceTime(1000)
).subscribe(console.log );
// Output (after 1 second): 3


forkJoin({
  first: of(1),
  second: of(2)
}).subscribe(console.log);

    
  }



}
