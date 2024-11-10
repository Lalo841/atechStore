import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-aside-panel',
  templateUrl: './filter-aside-panel.component.html',
  styleUrls: ['./filter-aside-panel.component.scss']
})
export class FilterAsidePanelComponent {
  addProductFrom: FormGroup;

  @Output() filtersChanged = new EventEmitter<{
    minPrice: number | null;
    maxPrice: number | null;
    minWarranty: number | null;
    maxWarranty: number | null;
  }>();

  constructor(private fb: FormBuilder) {
    this.addProductFrom = this.fb.group({
      minPrice: new FormControl(''),
      maxPrice: new FormControl(''),
      minWarranty: new FormControl(''),
      maxWarranty: new FormControl(''),
    });
  }

  sendToParent() {
    const minPrice = this.addProductFrom.value.minPrice ? +this.addProductFrom.value.minPrice : null;
    const maxPrice = this.addProductFrom.value.maxPrice ? +this.addProductFrom.value.maxPrice : null;
    const minWarranty = this.addProductFrom.value.minWarranty ? +this.addProductFrom.value.minWarranty : null;
    const maxWarranty = this.addProductFrom.value.maxWarranty ? +this.addProductFrom.value.maxWarranty : null;

    this.filtersChanged.emit({
      minPrice,
      maxPrice,
      minWarranty,
      maxWarranty
    });
  }
}