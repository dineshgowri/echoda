export const TABLE_ROW_TEMPLATE = `
<td *ngIf="collapse"></td>
<td *ngFor="let column of columns; let i=index" [hidden]="!column.visible || !(i >= columnCountStart && i <= columnCountEnd)">
    <div [textContent]="item[column.property]"></div>
</td>
`;
