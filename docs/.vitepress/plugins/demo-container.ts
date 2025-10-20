import fs from 'fs'
import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import path from 'path'

export default (md: MarkdownIt): void => {
  md.use(container, 'demo', {
    validate(params: string) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens: Token[], idx: number) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          const filePath = path.resolve(__dirname, '../../components', `${sourceFile}.vue`)
          try {
            source = fs.readFileSync(filePath, 'utf-8')
          } catch (e) {
            console.error(`Failed to read file: ${filePath}`)
            throw e
          }
        }

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        const componentName = sourceFile.replace(/\//g, '-')

        return `<DemoBlock source="${encodeURIComponent(source)}" path="${sourceFile}" description="${encodeURIComponent(description)}">
          <template #source>
            <${componentName} />
          </template>
        `
      } else {
        return '</DemoBlock>\n'
      }
    },
  })
}
