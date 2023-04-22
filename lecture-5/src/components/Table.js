import React from 'react';
import TableHeader from './TableHeader'
import TableItem from './TableItem'

import data from '../assets/data'

const Table = (props) => {
	return (
		<table className={'Table'}>
			<thead>
				<TableHeader
					columns={props.columns}
				/>
			</thead>
			<tbody>
			{data.map((item, index) => {
				return (
					<TableItem key={index} columns={props.columns} item={item}/>
				)
			})}
			</tbody>
		</table>
	)
}

export default Table