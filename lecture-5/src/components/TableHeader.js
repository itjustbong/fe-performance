import React from 'react'

const TableHeader = (props) => {
	return (
		<tr className={'TableHeader'}>
			{props.columns.map((col, index) => {
				return (
					<th key={index}>{col.title}</th>
				)
			})}
		</tr>
	)
}

export default TableHeader