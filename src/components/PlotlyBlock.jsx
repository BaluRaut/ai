import React from 'react'
import Plot from 'react-plotly.js'
export default function PlotlyBlock({ data, layout }) {
  if (!data) return null
  return (
    <Plot
      data={data}
      layout={{ autosize: true, margin: { l: 30, r: 10, t: 30, b: 30 }, ...layout }}
      style={{ width: '100%', height: 360 }}
      useResizeHandler
      config={{ displaylogo: false, responsive: true }}
    />
  )
}
