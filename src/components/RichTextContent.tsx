type RichNode = {
  children?: RichNode[]
  tag?: string
  text?: string
  type?: string
}

function renderNode(node: RichNode, key: number | string): React.ReactNode {
  if (node.text) return node.text

  const children = node.children?.map((child, index) => renderNode(child, index))

  switch (node.type) {
    case 'heading':
      if (node.tag === 'h2') return <h2 key={key}>{children}</h2>
      if (node.tag === 'h3') return <h3 key={key}>{children}</h3>
      return <h4 key={key}>{children}</h4>
    case 'list':
      return node.tag === 'ol' ? <ol key={key}>{children}</ol> : <ul key={key}>{children}</ul>
    case 'listitem':
      return <li key={key}>{children}</li>
    case 'quote':
      return <blockquote key={key}>{children}</blockquote>
    case 'paragraph':
      return <p key={key}>{children}</p>
    default:
      return <div key={key}>{children}</div>
  }
}

export function RichTextContent({ data }: { data: unknown }) {
  const root = data as { root?: RichNode }
  return <div className="rich-text">{root.root?.children?.map((node, index) => renderNode(node, index))}</div>
}
