export const TABLE_STYLE = `
/* bootstrap override: */

:host /deep/ .data-table.table > tbody+tbody {
    border-top: none;
}
:host /deep/ .data-table.table td {
    vertical-align: middle;
}
:host /deep/ .data-table.table td {
    border-bottom: 1px solid #ccc;
    padding: 5px;
    text-align: left; /* IE */
}
:host /deep/ .data-table.table td + td {
    border-left: 1px solid #ccc;   
}
:host /deep/ .data-table.table th {
    padding: 0 5px;
    text-align: left; /* IE */
}
:host /deep/ .header-background {
    border-bottom: 1px solid black;
}
:host /deep/ .fixed-table-container-inner table th:first-child,:host /deep/ .fixed-table-container-inner table th:nth-child(2),:host /deep/ .fixed-table-container-inner table th:nth-child(3){
    width: 50px;
}
:host /deep/ .column-sort-icon .glyphicon{
    left: 250px;
}
:host /deep/ .fixed-table-container {
    width: 100%;
    height: 200px;
    border: 1px solid black;
    margin: 10px auto;
    background-color: white;
    /* above is decorative or flexible */
    position: relative; /* could be absolute or relative */
    padding-top: 30px; /* height of header */
  }
  
  :host /deep/ .fixed-table-container-inner {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
  
  :host /deep/ .header-background {
    background-color: #d5ecff;
    height: 30px; /* height of header */
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  
  :host /deep/ table {
    background-color: white;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  :host /deep/ .th-inner {
    position: absolute;
    top: 0;
    line-height: 30px; /* height of header */
    text-align: left;
    border-left: 1px solid black;
    padding-left: 5px;
    margin-left: -5px;
  }
  :host /deep/ .first .th-inner {
    border-left: none;
    padding-left: 6px;
  }
  
:host /deep/ .data-table > thead > tr > th,
:host /deep/ .data-table > tbody > tr > td {
	overflow: hidden;
}

/* I can't use the bootstrap striped table, because of the expandable rows */
:host /deep/ .row-odd {
    background-color: #F6F6F6;
}
:host /deep/ .row-even {
}

.data-table .substitute-rows > tr:hover,
:host /deep/ .data-table .data-table-row:hover {
    background-color: #ECECEC;
}
/* table itself: */

.data-table {
    box-shadow: 0 0 15px rgb(236, 236, 236);
    table-layout: fixed;
}

/* header cells: */

.column-header {
    position: relative;
}
.expand-column-header {
	width: 50px;
}
.select-column-header {
	width: 50px;
	text-align: center;
}
.index-column-header {
	width: 40px;
}
.column-header.sortable {
    cursor: pointer;
}
.column-header .column-sort-icon {
	float: right;
}
.column-header.resizable .column-sort-icon {
    margin-right: 8px;
}
.column-header .column-sort-icon .column-sortable-icon {
    color: lightgray;
}
.column-header .column-resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    width: 8px;
    height: 100%;
    cursor: col-resize;
}

/* cover: */

.data-table-box {
    position: relative;
}

.loading-cover {
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.3);
   top: 0;
}
`;
