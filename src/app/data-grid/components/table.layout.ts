export const TABLE_TEMPLATE = `
<div class="fixed-table-toolbar">
  <div class="navigation">
    <button (click)="navigate('left');" [disabled]="columnCountStart == 0"><</button>
    <button (click)="navigate('right');" [disabled]="columnCountEnd > dataGridColumns.length">></button>
  </div>
</div>
<div class="fixed-table-container">
    <div class="header-background"> </div>
    <div class="fixed-table-container-inner">
      <table cellspacing="10">
        <thead>
          <tr>
            <th class="first" *ngIf="collapse">
              <div class="th-inner"></div>
            </th>
            <th *ngFor="let item of dataGridColumns; let i = index" [hidden]="!item.visible || !(i >= columnCountStart && i <= columnCountEnd)">
                <div class="th-inner">
                  {{item.title}} - {{i}}
                </div>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of _items; let index=index" class="data-table-row-wrapper" dataGridRow #row [item]="item" [columns]="dataGridColumns" [index]="index" [collapse]="collapse" [visible]="visible" [columnCountStart]="columnCountStart" [columnCountEnd]="columnCountEnd"></tr>
        </tbody>
      </table>
    </div>
  </div>
`;
