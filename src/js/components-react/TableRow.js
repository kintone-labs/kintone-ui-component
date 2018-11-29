import {Component, PropTypes} from 'react';
import IconButton from './IconButton';

class TableRow extends Component {
    addRow = () => {
        this.props.onRowAdd(this.props.index);
    }

    removeRow = () => {
        this.props.onRowRemove(this.props.index);
    }

    handleOnCellChange = (value, cellIndex) => {
        const rowValue = this.props.value.slice();
        rowValue[cellIndex] = value;
        this.props.onCellChange(rowValue, this.props.index, cellIndex);
    }

    handleOnCellClick = (cellIndex) => {
        const rowIndex = this.props.index;
        this.props.onCellClick(rowIndex, cellIndex);
    }

    render() {
        const addIcon = (
            <span style={{marginRight: '5px'}}>
                <IconButton
                    type="insert"
                    color="blue"
                    size="small"
                    onClick={this.addRow}
                />
            </span>
        );

        let removeIcon = null;
        if (this.props.enableRemove) {
            removeIcon = (
                <span>
                    <IconButton
                        type="remove"
                        color="gray"
                        size="small"
                        onClick={this.removeRow}
                    />
                </span>
            );
        }

        return (
            <div className="kuc-table-tr">
                {
                    this.props.template.map((cell, index) => {
                        return (
                            <div
                                key={index}
                                className="kuc-table-td"
                            >
                                {cloneElement(cell,
                                    {
                                        value: this.props.value[index],
                                        onChange: (value) => {
                                            this.handleOnCellChange(value, index);
                                        },
                                        onClick:() => {
                                            this.handleOnCellClick(index);
                                        },
                                        name: cell.props.name + '_' + this.props.index + '_' + index
                                    }
                                )}
                            </div>
                        );
                    })
                }

                <div className="kuc-table-td action-group">
                    {addIcon}
                    {removeIcon}
                </div>
            </div>
        );
    }
}

TableRow.propTypes = {
    index: PropTypes.number,
    enableRemove: PropTypes.bool,
    template: PropTypes.arrayOf(PropTypes.element),
    value: PropTypes.array,
    onRowAdd: PropTypes.func,
    onRowRemove: PropTypes.func,
    onCellChange: PropTypes.func,
    onCellClick: PropTypes.func
};

export default TableRow;
