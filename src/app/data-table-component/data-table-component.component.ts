import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "data-table",
  templateUrl: "./data-table-component.component.html",
  styleUrls: ["./data-table-component.component.scss"]
})
export class DataTableComponent implements OnInit {
  title = "data-table";
  @Input() options: any;
  @Input() dataSource: any;
  @Output() selectedRowsEvent = new EventEmitter();
  tableHeaders: any = [];
  objectKeys = Object.keys;
  sortObj = {};
  pageNumbers = [];
  startLimit = 0;
  endLimit = 0;
  activePageNumber;
  rowsOnPage;
  selectedAll = false;
  constructor() {}

  ngOnInit() {
    this.activePageNumber = this.options.paginationOptions.activePage;
    this.rowsOnPage = this.options.paginationOptions.rowsOnPage;
    this.startLimit = 0;
    this.endLimit = this.options.paginationOptions.rowsOnPage;
    this.preparePageNumers();
    if (this.options.headers) {
      for (let key in this.options.headers) {
        this.tableHeaders.push(this.options.headers[key]);
      }
    }
  }

  onClickSortIcon(header?) {
    console.log(header);
  }

  onClickNumberOfRows(number?) {
    console.log("Displaying rows: ", number);
    this.rowsOnPage = number;
    let maxCount = (this.activePageNumber - 1) * number;
    if (maxCount > this.dataSource.length) {
      this.activePageNumber = 1;
      this.startLimit = (this.activePageNumber - 1) * number;
      this.endLimit = (this.activePageNumber - 1) * number + number;
    } else {
      this.startLimit = (this.activePageNumber - 1) * number;
      this.endLimit = (this.activePageNumber - 1) * number + number;
    }
    this.preparePageNumers();
  }

  onClickPageNumber(number?) {
    console.log(number);
    this.activePageNumber = number;
    number--;
    this.startLimit = this.rowsOnPage * number;
    this.endLimit = this.rowsOnPage * number + this.rowsOnPage;
    this.checkForSelectAll();
  }

  preparePageNumers() {
    this.pageNumbers = [];
    console.log(this.dataSource.length);
    let numberOfPages = Math.ceil(this.dataSource.length / this.rowsOnPage);
    if (numberOfPages > 1) {
      for (let i = 1; i <= numberOfPages; i++) {
        this.pageNumbers.push(i);
      }
    }
    this.checkForSelectAll();
  }

  onClickSelectAll() {
    this.selectedAll = !this.selectedAll;
    let startIndex = this.rowsOnPage * (this.activePageNumber - 1);
    let endIndex =
      this.rowsOnPage * (this.activePageNumber - 1) + this.rowsOnPage;
    for (let i = startIndex; i < endIndex; i++) {
      this.dataSource[i]["selected"] = this.selectedAll == true ? true : false;
    }
    console.log(this.dataSource);
  }

  onClickCheckBox(rowClicked?) {
    this.dataSource.forEach(_ => {
      if (rowClicked.firstName == _.firstName) _.selected = !_.selected;
    });
    this.checkForSelectAll();
  }

  checkForSelectAll() {
    let flag = -1;
    this.selectedAll = !this.selectedAll;
    let startIndex = this.rowsOnPage * (this.activePageNumber - 1);
    let endIndex =
      this.rowsOnPage * (this.activePageNumber - 1) + this.rowsOnPage;
    for (let i = startIndex; i < endIndex; i++) {
      if (!this.dataSource[i]["selected"]) {
        flag = 1;
        break;
      }
    }
    this.selectedAll = flag == 1 ? false : true;
    console.log(this.dataSource);
  }

  resetSelection() {
    this.selectedAll = false;
    this.dataSource.forEach(_ => {
      if (_.selected) _.selected = false;
    });
  }
}
