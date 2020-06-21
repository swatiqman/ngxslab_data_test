import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { timeout } from 'rxjs/operators'

export interface PersonModel {
  title: string;
  description: string;
  name: string;
}

export interface BookModel {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
person: PersonModel[] = [{title: 'sdf', description: 'sdsdsdd', name: 'stepohen'}, {title: 'dcgsdsdf', description: 'sfjyfqywivdvds', name: 'max'}, {title: 'lkj', description: 'cdkgdskjshdskdjsgd', name: 'manford'}]

  getContent(): Observable<PersonModel> {
    return of({title: 'sdf', description: 'sdsdsdd', name: 'stepohen'}).pipe(timeout(1000));
  }

  getBook(): Observable<BookModel> {
    return of({title: 'sdf', description: 'sdsdsdd'}).pipe(timeout(5000));
  }
}
