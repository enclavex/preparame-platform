function adjustColumnsAndRowsRegister(fields, fieldsAdjusted) {
    const rowsCount = Object.values(fields.registerColumns)
        .map((column) => {
            return column.row;
        })
        .filter((row, index, self) => {
            return self.indexOf(row) === index;
        });

    rowsCount.forEach((rowNumber) => {
        const cols = Object.values(fields.registerColumns).filter((column) => {
            return column.row === rowNumber;
        });

        fieldsAdjusted.push({
            row: rowNumber,
            cols: cols,
        });
    });
}

export { adjustColumnsAndRowsRegister }