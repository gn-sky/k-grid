import { Component } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { process, State } from '@progress/kendo-data-query';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k-grid';

  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
};

public gridData: GridDataResult = process(products, this.state);

public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(products, this.state);
}  
}
