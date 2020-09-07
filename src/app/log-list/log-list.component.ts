import {Component, OnInit, ViewChild} from '@angular/core';
import { GetLogListService} from '../get-log-list/get-log-list.service';
import { TdPagingBarComponent, IPageChangeEvent } from '@covalent/core/paging';
import { ITdDataTableColumn, TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent, } from '@covalent/core/data-table';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  @ViewChild(TdPagingBarComponent, { static: true }) pagingBar: TdPagingBarComponent;
  logs: any[];
  selectable = true;
  clickable = false;
  multiple = true;
  resizableColumns = false;

  filteredData: any[];
  filteredTotal: number;
  selectedRows: any[] = [];

  filterTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 50;

  columns: ITdDataTableColumn[] = [
    { name: 'date', label: 'when', width: { min: 50, max: 400 }},
    { name: 'reporter', label: 'who', tooltip: 'This is a person', sortable: true, width: { min: 50, max: 400 } },
    { name: 'report', label: 'what', width: 200 },
  ];
  sortBy = 'reporter';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  constructor(private service: GetLogListService, private DataTableService: TdDataTableService) {
    this.logs = service.getLogList();
    this.refreshTable();
  }

  ngOnInit(): void {}

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.refreshTable();
  }

  filter(filterTerm: string): void {
    this.filterTerm = filterTerm;
    this.pagingBar.navigateToPage(1);
    this.refreshTable();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.refreshTable();
  }

  refreshTable(): void {
    let newData: any[] = this.logs;
    const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return (
          (column.filter === undefined && column.hidden === true) ||
          (column.filter !== undefined && column.filter === false)
        );
      })
      .map((column: ITdDataTableColumn) => {
        return column.name;
      });
    newData = this.DataTableService.filterData(newData, this.filterTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this.DataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this.DataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
}
