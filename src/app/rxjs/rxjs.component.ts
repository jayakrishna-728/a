import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit{

  sampleArrayForOf =[1,2,3,4];

  ngOnInit(): void {
    const data$ = of(this.sampleArrayForOf); // Observable emitting values 1, 2, 3, 4
    data$.subscribe(value => console.log(value)); // Output: 1, 2, 3, 4    
  }



}
