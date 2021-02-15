import React from 'react'
import { DetailsList } from '@fluentui/react'
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling'
import 'office-ui-fabric-react/dist/css/fabric.css';

const oparations = [
    {
        from: '0000 0284 9987 9976',
        to: '0000 0067 4567 0098',
        amount: '£1 678',
        date: '20-5-2019'
    },
    {
        from: '0000 0284 9987 9976',
        to: '0000 0067 4567 0098',
        amount: '£678',
        date: '13-5-2019'
    },
    {
        from: '0000 0284 9987 9976',
        to: '0000 0067 4567 0098',
        amount: '£2 878',
        date: '07-5-2019'
    },
    {
        from: '0000 0284 9987 9976',
        to: '0000 0067 4567 0098',
        amount: '£278',
        date: '03-5-2019'
    },
]

const columns = [
    {
        key: 'column1',
        name: 'From',
        fieldName: 'from',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true
    },
    {
        key: 'column2',
        name: 'To',
        fieldName: 'to',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true
    },
    {
        key: 'column3',
        name: 'Amount',
        fieldName: 'amount',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true
    },
    {
        key: 'column4',
        name: 'Date',
        fieldName: 'date',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true
    },
]

const classNames = mergeStyleSets({
    table: {
        margin: 'auto',

    }
})

const OperationsTable = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${classNames.table}`}>
                <DetailsList
                    items={oparations}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div>
    )
}

export default OperationsTable;
