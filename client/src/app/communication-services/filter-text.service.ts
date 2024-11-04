import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterTextService {
  private textSubject = new BehaviorSubject<string>('Все');
  currentText$ = this.textSubject.asObservable();
  updateText(newText: string) {
    this.textSubject.next(newText);
  }
}
