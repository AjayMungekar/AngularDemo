import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import { IProduct } from "src/app/table/interfaces/product.interface";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html"
})
export class TableComponent implements OnInit {
  @Input() rows: Array<IProduct> = [];
  displayedColumns: string[] = ["ProductId", "ProductName", "ProductPrice"];
  displayRows: Array<IProduct> = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.displayRows = this.rows;
  }

  sort(column: any, sortType) {
    if (sortType == "asc") {
      this.displayRows.sort((a, b) => {
        if (a[column] > b[column]) {
          return 1;
        }
        if (a[column] < b[column]) {
          return -1;
        }
        return 0;
      });
    } else {
      this.displayRows.sort((a, b) => {
        if (a[column] < b[column]) {
          return 1;
        }
        if (a[column] > b[column]) {
          return -1;
        }
        return 0;
      });
    }
    this.displayRows = this.displayRows.slice();
  }

  onKeyUp(event, column) {
    let filtereddata = [];
    let value = event.target.value;
    if (value === "") {
      this.displayRows = this.rows;
    } else {
      if(!Number(value))
      {
        value = value.toLowerCase();
        filtereddata = this.displayRows.filter(x => !x[column].toLowerCase().indexOf(value));
      }
      else
      {
        filtereddata = this.displayRows.filter(x => !x[column].toString().indexOf(value));
      }
      this.displayRows = filtereddata;
    }
  }
}
