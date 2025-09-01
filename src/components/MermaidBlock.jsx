import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'
mermaid.initialize({ startOnLoad: false, theme: 'default' })
export default function MermaidBlock({ chart, id }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!chart) return
    const el = ref.current
    if (!el) return
    const render = async () => {
      try {
        const { svg } = await mermaid.render(id || `mmd-${Math.random().toString(36).slice(2)}`, chart)
        el.innerHTML = svg
      } catch (e) { el.innerText = 'Mermaid render error: ' + e.message }
    }
    render()
  }, [chart, id])
  return <div className="mermaid" ref={ref} />
}
