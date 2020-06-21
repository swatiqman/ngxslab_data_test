import { StateRepository, DataAction, Payload, Named } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PersonModel, PersonService, BookModel } from './person.service';

@StateRepository()
@State<PersonModel>({
  name: 'person',
  defaults: { title: null, description: null, name: null }
})
@Injectable()
export class PersonState extends NgxsDataRepository<PersonModel> {
  constructor(private readonly personService: PersonService) {
    super();
  }

  @DataAction()
  public getContent(): Observable<PersonModel> {
    return this.personService.getContent().pipe(
      tap((content) => {
        // use setState instead ctx.setState
        this.setState(content);
      })
    );
  }
}


@StateRepository()
@State<BookModel>({
  name: 'book',
  defaults: { title: null, description: null }
})
@Injectable()
export class BookState extends NgxsDataRepository<BookModel> {
  constructor(private readonly personService: PersonService) {
    super();
  }

  @DataAction()
  public getBook(): Observable<BookModel> {
    return this.personService.getContent().pipe(
      tap((content) => {
        // use setState instead ctx.setState
        this.setState(content);
      })
    );
  }
}
