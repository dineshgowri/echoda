export const TABLE_TEMPLATE = `
<input [(ngModel)]="searchText" placeholder="search text goes here" style="display:none;" (keyup)="searchFilter()">
<div class="data-table-wrapper">
    <data-table-header *ngIf="header"></data-table-header>

    <div class="data-table-box">
    <div class="fixed-table-container">
      <div class="header-background"> </div>
      <div class="fixed-table-container-inner">
        <table class="table table-condensed table-bordered data-table">
            <thead>
                <tr>
                    <th [hide]="!expandColumnVisible" class="expand-column-header" class="first">
                    <th [hide]="!indexColumnVisible" class="index-column-header" class="first">
                    <div class="th-inner"><span [textContent]="indexColumnHeader"></span></div>
                    </th>
                    <th [hide]="!selectColumnVisible" class="select-column-header" class="first">
                    <div class="th-inner" [hide]="multiSelect"><input [hide]="multiSelect" type="checkbox" [(ngModel)]="selectAllCheckbox"/></div>
                    </th>
                    <th *ngFor="let column of columns" #th [hide]="!column.visible" (click)="headerClicked(column, $event)"
                        [class.sortable]="column.sortable" [class.resizable]="column.resizable"
                        [ngClass]="column.styleClassObject" class="column-header" [style.width]="column.width | px" class="first">
                        <div class="th-inner" *ngIf="!column.headerTemplate" [textContent]="column.header"></div>
                        <div class="th-inner" *ngIf="column.headerTemplate" [ngTemplateOutlet]="column.headerTemplate" [ngOutletContext]="{column: column}"></div>
                        <div class="th-inner column-sort-icon" *ngIf="column.sortable">
                            <span class="glyphicon glyphicon-sort column-sortable-icon" [hide]="column.property === sortBy"></span>
                            <span [hide]="column.property !== sortBy">
                                <span class="glyphicon glyphicon-triangle-top" [hide]="sortAsc"></span>
                                <span class="glyphicon glyphicon-triangle-bottom" [hide]="!sortAsc"></span>
                            </span>
                        </div>
                        <span *ngIf="column.resizable" class="column-resize-handle" (mousedown)="resizeColumnStart($event, column, th)"></span>
                    </th>
                </tr>
            </thead>
            <tbody *ngFor="let item of items; let index=index" class="data-table-row-wrapper"
                   dataTableRow #row [item]="item" [index]="index" (selectedChange)="onRowSelectChanged(row)">
            </tbody>
            <tbody *ngIf="itemCount === 0 && noDataMessage">
                <tr>
                    <td [attr.colspan]="columnCount">{{ noDataMessage }}</td>
                </tr>
            </tbody>
            <tbody class="substitute-rows" *ngIf="pagination && substituteRows">
                <tr *ngFor="let item of substituteItems, let index = index"
                    [class.row-odd]="(index + items.length) % 2 === 0"
                    [class.row-even]="(index + items.length) % 2 === 1"
                    >
                    <td [hide]="!expandColumnVisible"></td>
                    <td [hide]="!indexColumnVisible">&nbsp;</td>
                    <td [hide]="!selectColumnVisible"></td>
                    <td *ngFor="let column of columns" [hide]="!column.visible">
                </tr>
            </tbody>
        </table>
        <div class="loading-cover" *ngIf="showReloading && reloading"></div>
        </div>
        </div>
    </div>
    <data-table-pagination
        *ngIf="pagination"
        [show_range]="pagination_range"
        [show_limit]="pagination_limit"
        [show_input]="pagination_input"
        [show_numbers]="pagination_numbers"></data-table-pagination>
</div>
`;
