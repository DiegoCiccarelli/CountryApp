import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject()

  @Input()
  public termino: string = ''

  @Input()
  public placeholder : string = ''

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor)
    });
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }
}
