import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export function RichTextContent({ data }: { data: unknown }) {
  return <RichText className="rich-text" data={data as SerializedEditorState} />
}
