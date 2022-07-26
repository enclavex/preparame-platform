function adjustColumnsAndRowsRegister(fields, fieldsAdjusted) {
    const columns = fields.registerColumns ? fields.registerColumns : fields

    const rowsCount = Object.values(columns)
        .map((column) => {
            return column.row;
        })
        .filter((row, index, self) => {
            return self.indexOf(row) === index;
        });

    rowsCount.forEach((rowNumber) => {
        const cols = Object.values(columns).filter((column) => {
            return column.row === rowNumber;
        });

        fieldsAdjusted.push({
            row: rowNumber,
            cols: cols,
        });
    });
}

export { adjustColumnsAndRowsRegister }