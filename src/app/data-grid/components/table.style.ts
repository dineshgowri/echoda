export const TABLE_STYLE = `
:host /deep/ td {
    border-bottom: 1px solid #ccc;
    padding: 5px;
    text-align: left; /* IE */
    }
    :host /deep/ td + td {
    border-left: 1px solid #ccc;
    }
    :host /deep/ th {
    padding: 0 5px;
    text-align: left; /* IE */
    }
    
    :host /deep/ th.first {
        width: 50px;
    }
:host /deep/ .header-background {
    border-bottom: 1px solid black;
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
    background-color: #D5ECFF;
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
    :host /deep/ .th-sort{
        position: absolute;
    }
    :host /deep/ .first .th-inner {
    border-left: none;
    padding-left: 6px;
    }
    :host /deep/ .wrapper {
        display: grid;
        grid-gap: 1px;
        grid-template-columns: auto auto auto auto;
        background-color: #fff;
        color: #444;
    }

    :host /deep/ .box {
        background-color: #444;
        color: #fff;
        padding: 5px;

    }
    :host /deep/ #resp-table {
        width: 100%;
        display: table;
        }
    :host /deep/ #resp-table-caption{
        display: table-caption;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        }
    :host /deep/ #resp-table-header{
        display: table-header-group;
        background-color: gray;
        font-weight: bold;
        font-size: 25px;
        }
    :host /deep/ .table-header-cell{
        display: table-cell;
        padding: 10px;
        text-align: justify;
        border-bottom: 1px solid black;
        }
    :host /deep/ #resp-table-body{
        display: table-row-group;
        }
    :host /deep/ .resp-table-row{
        display: table-row;
        }
    :host /deep/ .table-body-cell{
        display: table-cell;
        }
`;
