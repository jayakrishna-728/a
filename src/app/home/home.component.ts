import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { selectStatus } from '../store/status.selector';
import { approveStatus, rejectStatus } from '../store/status.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  status:Observable<string> = new Observable<string>;
  arr:any = [1,24,34,55];

  constructor(private store:Store<AppState>,private router:Router){
    this.status = this.store.select(selectStatus);

  }


  ngOnInit() {
    const data$ = of(this.arr); // Observable emitting values 1, 2, 3, 4
    data$.subscribe(value => console.log(value)); // Output: 1, 2, 3, 4    
    
  }


  approveApplication(){
    this.store.dispatch(approveStatus());
  }

  rejectApplication(){
    this.store.dispatch(rejectStatus());
  }


  onSubmit(){
    // this.router.navigateByUrl('/admin');
  }


  



}
