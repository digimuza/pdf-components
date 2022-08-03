import * as P from 'ts-prime'
import { Content, Format } from '.'
import { flipDimensions } from '../utils'

export function getPageDimensions(format: Format, landscape: boolean) {
	const dimensions = {
		A3: [297, 420],
		A4: [210, 297],
		A5: [148, 210],
		A6: [105, 148],
	}

	if (P.isObject(format)) {
		return flipDimensions([format.width, format.height], landscape)
	}

	return flipDimensions(dimensions[format], landscape)
}

export interface RawContent {
	content: string
	format: Format
	landscape?: boolean
}

export function HtmlDoc(props: { pages: RawContent[] }) {
	const server = !!process.env.LIVE_SERVER
	const docStyle = server
		? {
				border: '1px solid #000',
				margin: 10,
		  }
		: {}
	return (
		<html>
			<head>
				<script src="https://cdn.tailwindcss.com"></script>
			</head>
			<body>
				{props.pages.map(({ content, landscape, format }) => {
					const dimensions = getPageDimensions(format, !!landscape)
					return (
						<div
							style={{
								...docStyle,
								...(server ? dimensions : {}),
							}}
							dangerouslySetInnerHTML={{
								__html: content,
							}}
						></div>
					)
				})}
			</body>
		</html>
	)
}
