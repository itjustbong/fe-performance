import React from 'react';
import Tag from './Tag'
import {zeroPad} from '../helpers'

const TableItem = (props) => {

	const processItem = (value, type) => {
		if(type === 'date') {
			const date = new Date(value * 1000)
			return date.getFullYear() + '.' + zeroPad(date.getMonth(), 2) + '.' + zeroPad(date.getDate(), 2)
		}
		else if(type === 'tag') {
			const data = JSON.parse(value.replace(/\'/gi, '"'))
			let tags = []
			for(let i=0; i<data.length && i<4; i++) {
				tags.push(<Tag key={'tag' + i}>{data[i]}</Tag>)
			}
			if(data.length > 4) {
				tags.push(<span key={'tag-end'}>+{data.length - 4}</span>)
			}
			return tags
		}
		else {
			return value
		}
	}

	return (
		<tr>
			{props.columns.map((col, index) => {
				return (
					<td key={index} style={{border: "1px solid black", padding: '2px', margin: '2px'}}>
						{processItem(props.item[col.key], col.type)}
					</td>
				)
			})}
		</tr>
	)
}

export default TableItem