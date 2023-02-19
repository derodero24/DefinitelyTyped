declare module '@datagridxl/datagridxl2' {
    export class DataGridXL {
        constructor(
            targetId: string,
            options: {
                // ACTIONS: CELL
                allowEditCells?: boolean;
                allowFillCells?: boolean;
                fillCellsDirection?: 'xy' | 'x' | 'y';
                // ACTIONS: COLUMN
                allowDeleteCols?: boolean;
                allowFreezeCols?: boolean;
                allowHideCols?: boolean;
                allowInsertCols?: boolean;
                allowMoveCols?: boolean;
                allowResizeCols?: boolean;
                // ACTIONS: ROW
                allowDeleteRows?: boolean;
                allowFreezeRows?: boolean;
                allowHideRows?: boolean;
                allowInsertRows?: boolean;
                allowMoveRows?: boolean;
                // ACTIONS: SORT
                allowSort?: boolean;
                // ACTIVATION
                instantActivate?: boolean;
                // AXES: COLUMNS
                colAlign?: 'left' | 'center' | 'right';
                colHeaderHeight?: number;
                colHeaderLabelAlign?: 'left' | 'center' | 'right';
                colHeaderLabelFunction?: (index: any, coord: any, colRef: any, labels: any) => string;
                colHeaderLabelPrefix?: string;
                colHeaderLabelSuffix?: string;
                colHeaderLabelType?: 'numbers' | 'letters';
                colWidth?: number;
                frozenCols?: number;
                // AXES: ROWS
                frozenRows?: number;
                rowHeaderLabelAlign?: 'left' | 'center' | 'right';
                rowHeaderLabelFunction?: (index: any, coord: any, colRef: any, labels: any) => string;
                rowHeaderLabelPrefix?: string;
                rowHeaderLabelSuffix?: string;
                rowHeaderLabelType?: 'numbers' | 'letters';
                rowHeaderWidth?: number;
                rowHeight?: number;
                // CLIPBOARD
                allowCopy?: boolean;
                allowCut?: boolean;
                allowPaste?: boolean;
                expandSheetOnPaste?: boolean;
                instantCut?: boolean;
                // COLUMNS
                columns?: Array<{
                    title?: string;
                    field?: string;
                    align?: 'left' | 'center' | 'right';
                    width?: number;
                    source?: string | number;
                    _hide?: boolean;
                }>;
                // CONTEXT MENU
                contextMenuItems?: any[] | false;
                // CONTEXT MENU (TOUCH)
                contextMenuTouchItems?: any[] | false;
                // DATA
                data?: Array<Array<string | number | boolean | null>> | Array<Record<string, any>>;
                // FONT
                fontFamily?: string;
                fontSize?: number;
                // LOCALIZATION
                locale?: object;
                // THEME
                theme?: object;
            },
        );

        activate(): any;

        addCellRangeToSelection(t: any): any;

        addColRangeToSelection(t: any): any;

        addRowRangeToSelection(t: any): any;

        alertUser(t: any): any;

        clearCellValues(t: any): any;

        clearSearch(): any;

        closeCellEditor(): any;

        closeCellEditorAndSave(): any;

        copy(): any;

        cut(): any;

        deactivate(): any;

        deleteCols(t: any): any;

        deleteColsById(t: any): any;

        deleteRows(t: any): any;

        deleteRowsById(t: any): any;

        deselectAll(): any;

        destroy(): any;

        downloadDataAsCSV(t: any): any;

        downloadDataAsJSON(t: any): any;

        fillCells(t: any, e: any, i: any): any;

        freezeCols(t: any): any;

        freezeColsUntilId(t: any): any;

        freezeRows(t: any): any;

        freezeRowsUntilId(t: any): any;

        generateCssFromStyles(): any;

        getAnyRangesFromCellCoords(t: any): any;

        getCellCursorPosition(): any;

        getCellFromStore(t: any, e: any): any;

        getCellRangeData(t: any): any;

        getCellRangeText(t: any): any;

        getCellSelection(t: any): any;

        getCellValue(t: any): any;

        getColCoordById(t: any): any;

        getColFromStore(t: any): any;

        getColIdByCoord(t: any): any;

        getColIdByIndex(t: any): any;

        getColIndexByCoord(t: any): any;

        getColIndexById(t: any): any;

        getColPositionInViewport(t: any): any;

        getColRangesFromCoord(t: any): any;

        getColSectionFromCellCoords(t: any): any;

        getColSelection(t: any): any;

        getColWidthById(t: any): any;

        getData(t: any): any;

        getLocaleSetting(t: any): any;

        getPanePositionXfromCellCoords(t: any): any;

        getPanePositionYfromCellCoords(t: any): any;

        getRowCoordById(t: any): any;

        getRowFromStore(t: any): any;

        getRowHeightById(t: any): any;

        getRowIdByCoord(t: any): any;

        getRowIdByIndex(t: any): any;

        getRowIndexByCoord(t: any): any;

        getRowIndexById(t: any): any;

        getRowPositionInViewport(t: any): any;

        getRowRangesFromCoord(t: any): any;

        getRowSectionFromCellCoords(t: any): any;

        getRowSelection(t: any): any;

        getSelection(t: any): any;

        getSpreadsheetCoords(t: any): any;

        getThemeSetting(t: any): any;

        getViewportPosition(): any;

        hideCols(t: any): any;

        hideColsById(t: any): any;

        hideRows(t: any): any;

        hideRowsById(t: any): any;

        insertEmptyCols(t: any, e: any): any;

        insertEmptyRows(t: any, e: any): any;

        modifyActiveRange(t: any): any;

        moveCellCursor(t: any): any;

        moveCellCursorInsideSelection(t: any): any;

        moveCellCursorOneViewportDown(): any;

        moveCellCursorOneViewportUp(): any;

        moveCellCursorToColEnd(): any;

        moveCellCursorToColStart(): any;

        moveCellCursorToRowEnd(): any;

        moveCellCursorToRowStart(): any;

        moveCellCursorToSheetEnd(): any;

        moveCellCursorToSheetStart(): any;

        moveCols(t: any, e: any): any;

        moveRows(t: any, e: any): any;

        openCellEditor(t: any): any;

        openContextMenu(): any;

        paste(): any;

        redo(): any;

        redraw(): any;

        resize(): any;

        resizeCols(t: any, e: any): any;

        resizeColsToFit(t: any): any;

        search(t: any): any;

        searchNext(): any;

        searchPrev(): any;

        selectAll(t: any): any;

        setCellCursorPosition(t: any): any;

        setCellEditorValue(t: any): any;

        setCellRangeExtreme(t: any, e: any): any;

        setCellSelection(t: any): any;

        setCellValues(t: any, e: any, i: any, o: any): any;

        setColRangeExtreme(t: any, e: any): any;

        setColSelection(t: any): any;

        setRowRangeExtreme(t: any, e: any): any;

        setRowSelection(t: any): any;

        setViewportPosition(t: any): any;

        showColsById(t: any): any;

        showRowsById(t: any): any;

        sort(t: any, e: any): any;

        toggleFullscreen(): any;

        undo(): any;

        static createDummyData(t: any, e: any): any;

        static createEmptyData(t: any, e: any): any;

        static instances: any[];
    }
}
