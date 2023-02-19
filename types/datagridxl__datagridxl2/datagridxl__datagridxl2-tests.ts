import { DataGridXL } from '@datagridxl/datagridxl2';

const data = [
    ['A', 'B', 'C'],
    ['D', 'E', 1],
    ['G', null, true],
    ['J', 1, null],
];

const grid = new DataGridXL('grid', {
    // ACTIONS: CELL
    allowEditCells: true,
    allowFillCells: true,
    fillCellsDirection: 'xy',
    // ACTIONS: COLUMN
    allowDeleteCols: true,
    allowFreezeCols: true,
    allowHideCols: true,
    allowInsertCols: true,
    allowMoveCols: true,
    allowResizeCols: true,
    // ACTIONS: ROW
    allowDeleteRows: true,
    allowFreezeRows: true,
    allowHideRows: true,
    allowInsertRows: true,
    allowMoveRows: true,
    // ACTIONS: SORT
    allowSort: true,
    // ACTIVATION
    instantActivate: true,
    // AXES: COLUMNS
    colAlign: 'left',
    colHeaderHeight: 0,
    colHeaderLabelAlign: 'left',
    colHeaderLabelFunction: () => '',
    colHeaderLabelPrefix: '',
    colHeaderLabelSuffix: '',
    colHeaderLabelType: 'numbers',
    colWidth: 0,
    frozenCols: 0,
    // AXES: ROWS
    frozenRows: 0,
    rowHeaderLabelAlign: 'left',
    rowHeaderLabelFunction: () => '',
    rowHeaderLabelPrefix: '',
    rowHeaderLabelSuffix: '',
    rowHeaderLabelType: 'numbers',
    rowHeaderWidth: 0,
    rowHeight: 0,
    // CLIPBOARD
    allowCopy: true,
    allowCut: true,
    allowPaste: true,
    expandSheetOnPaste: true,
    instantCut: true,
    // COLUMNS
    columns: [
        {
            title: '',
            field: '',
            align: 'left',
            width: 0,
            source: '',
            _hide: true,
        },
    ],
    // CONTEXT MENU
    contextMenuItems: false,
    // CONTEXT MENU (TOUCH)
    contextMenuTouchItems: false,
    // DATA
    data: data,
    // FONT
    fontFamily: '',
    fontSize: 0,
    // LOCALIZATION
    locale: {},
    // THEME
    theme: {},
});
