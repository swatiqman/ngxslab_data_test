import { Component, OnInit } from '@angular/core';
import { PersonState, BookState } from './pesron.states';
import { Actions, ofActionSuccessful, ofActionCompleted } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxs-lab-data-test01';


  constructor(private personState: PersonState, private bookState: BookState, private actions$: Actions) { }

  isNew = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this.isNew.subscribe(() => {
      console.log('do wateva');
    });
    this.actions$.pipe(ofActionCompleted({ type: '@person.setState(stateValue)' })).subscribe((mmm) => {
      console.log('please show me smtn nice', mmm);
      // this.isNew.next(true);
      this.bookState.getBook().subscribe();
    });

    this.actions$.pipe(ofActionCompleted({ type: '@book.setState(stateValue)' })).subscribe((mmm) => {
      console.log('please show me smtn nice..again', mmm);
      this.isNew.next(true);
    });

    setTimeout(() => {
      this.personState.getContent().subscribe();
    }, 5000);

  }


}
