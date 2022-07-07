import renderToString from 'preact-render-to-string'
import { Content } from './components'
import { HtmlDoc } from './components/html'

export function generatePdfBase(pages: Content[]) {
	return renderToString(<HtmlDoc pages={pages}></HtmlDoc>)
}
