import React, { useMemo, useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  MarkerType,
  ConnectionLineType,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Box, Paper, Typography, useTheme } from '@mui/material';

// Custom node for database tables with connection handles
const TableNode = ({ data }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        minWidth: 180, 
        bgcolor: isDark ? 'grey.800' : 'background.paper',
        border: '2px solid',
        borderColor: data.color || 'primary.main',
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Connection handles on all sides */}
      <Handle type="target" position={Position.Top} style={{ background: data.color || '#1976d2', width: 8, height: 8 }} />
      <Handle type="source" position={Position.Bottom} style={{ background: data.color || '#1976d2', width: 8, height: 8 }} />
      <Handle type="target" position={Position.Left} id="left" style={{ background: data.color || '#1976d2', width: 8, height: 8 }} />
      <Handle type="source" position={Position.Right} id="right" style={{ background: data.color || '#1976d2', width: 8, height: 8 }} />
      
      <Box sx={{ 
        bgcolor: data.color || 'primary.main', 
        color: 'white', 
        px: 1.5, 
        py: 0.75,
        fontWeight: 600,
        fontSize: '0.85rem'
      }}>
        {data.label}
      </Box>
      <Box sx={{ p: 1 }}>
        {data.columns?.map((col, i) => (
          <Box 
            key={i} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              py: 0.25,
              borderBottom: i < data.columns.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
              gap: 2
            }}
          >
            <Typography variant="caption" sx={{ 
              fontWeight: col.pk ? 600 : 400,
              color: col.pk ? 'primary.main' : col.fk ? 'secondary.main' : 'text.primary'
            }}>
              {col.pk && '🔑 '}{col.fk && '🔗 '}{col.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {col.type}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

const nodeTypes = { tableNode: TableNode };

// Edge colors for different relationship types
const getEdgeColor = (label) => {
  if (label?.includes('1:N') || label?.includes('1:M')) return '#4caf50';
  if (label?.includes('N:M') || label?.includes('M:N')) return '#ff9800';
  if (label?.includes('1:1')) return '#2196f3';
  return '#9c27b0';
};

const ERDiagram = ({ tables, relationships, height = 400 }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const { nodes, edges } = useMemo(() => {
    // Create nodes from tables
    const nodes = tables.map((table, index) => ({
      id: table.id,
      type: 'tableNode',
      position: table.position || { 
        x: (index % 3) * 280 + 50, 
        y: Math.floor(index / 3) * 220 + 50 
      },
      data: {
        label: table.name,
        columns: table.columns,
        color: table.color
      }
    }));

    // Create edges from relationships with better styling
    const edges = relationships.map((rel, index) => {
      const edgeColor = getEdgeColor(rel.label);
      return {
        id: `e${index}`,
        source: rel.from,
        target: rel.to,
        sourceHandle: rel.sourceHandle || null,
        targetHandle: rel.targetHandle || null,
        label: rel.label,
        type: 'smoothstep',
        animated: rel.animated || false,
        style: { 
          stroke: edgeColor, 
          strokeWidth: 2,
        },
        labelStyle: { 
          fontSize: 11, 
          fill: isDark ? '#fff' : '#333',
          fontWeight: 500,
          background: isDark ? '#333' : '#fff',
          padding: '2px 4px',
        },
        labelBgStyle: {
          fill: isDark ? '#333' : '#fff',
          fillOpacity: 0.9,
        },
        labelBgPadding: [4, 4],
        labelBgBorderRadius: 4,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: edgeColor,
          width: 20,
          height: 20,
        },
        markerStart: rel.bidirectional ? {
          type: MarkerType.ArrowClosed,
          color: edgeColor,
          width: 20,
          height: 20,
        } : undefined,
      };
    });

    return { nodes, edges };
  }, [tables, relationships, isDark]);

  return (
    <Box sx={{ 
      height, 
      width: '100%', 
      bgcolor: isDark ? 'grey.900' : 'grey.100', 
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'divider'
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        attributionPosition="bottom-left"
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: false,
        }}
      >
        <Background 
          color={isDark ? '#444' : '#ccc'} 
          gap={16} 
          variant="dots"
        />
        <Controls 
          style={{ 
            background: isDark ? '#333' : '#fff',
            border: '1px solid',
            borderColor: isDark ? '#555' : '#ddd',
          }}
        />
      </ReactFlow>
    </Box>
  );
};

export default ERDiagram;
