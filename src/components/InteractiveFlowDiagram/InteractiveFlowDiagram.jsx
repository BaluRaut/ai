import { Box, Paper, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

/**
 * InteractiveFlowDiagram - Creates interactive flow diagrams for database concepts
 * Uses SVG for custom interactive diagrams without external dependencies
 */
const InteractiveFlowDiagram = ({ type, title }) => {
  const svgRef = useRef(null);

  const renderQueryExecutionFlow = () => {
    return (
      <svg width="100%" height="500" viewBox="0 0 800 500">
        {/* SQL Query Input */}
        <rect x="300" y="20" width="200" height="60" fill="#1976d2" rx="8" />
        <text x="400" y="55" fill="white" fontSize="16" textAnchor="middle" fontWeight="bold">
          SQL Query
        </text>

        {/* Arrow */}
        <path d="M 400 80 L 400 120" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Parser */}
        <rect x="300" y="120" width="200" height="60" fill="#388e3c" rx="8" />
        <text x="400" y="155" fill="white" fontSize="16" textAnchor="middle" fontWeight="bold">
          Parser & Validator
        </text>

        {/* Arrow */}
        <path d="M 400 180 L 400 220" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Query Optimizer */}
        <rect x="300" y="220" width="200" height="60" fill="#f57c00" rx="8" />
        <text x="400" y="255" fill="white" fontSize="16" textAnchor="middle" fontWeight="bold">
          Query Optimizer
        </text>

        {/* Arrow splits */}
        <path d="M 400 280 L 400 300" stroke="#666" strokeWidth="2" />
        <path d="M 400 300 L 200 320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 400 300 L 600 320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Execution Plan A */}
        <rect x="80" y="320" width="240" height="50" fill="#7b1fa2" rx="8" />
        <text x="200" y="350" fill="white" fontSize="14" textAnchor="middle">
          Plan A: Index Scan
        </text>

        {/* Execution Plan B */}
        <rect x="480" y="320" width="240" height="50" fill="#7b1fa2" rx="8" />
        <text x="600" y="350" fill="white" fontSize="14" textAnchor="middle">
          Plan B: Table Scan
        </text>

        {/* Arrows converge */}
        <path d="M 200 370 L 400 400" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <path d="M 600 370 L 400 400" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Result */}
        <rect x="300" y="400" width="200" height="60" fill="#d32f2f" rx="8" />
        <text x="400" y="435" fill="white" fontSize="16" textAnchor="middle" fontWeight="bold">
          Result Set
        </text>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#666" />
          </marker>
        </defs>

        {/* Labels */}
        <text x="420" y="100" fill="#666" fontSize="12">Syntax Check</text>
        <text x="420" y="200" fill="#666" fontSize="12">Validate Schema</text>
        <text x="420" y="305" fill="#666" fontSize="12">Choose Best Plan</text>
      </svg>
    );
  };

  const renderTransactionFlow = () => {
    return (
      <svg width="100%" height="600" viewBox="0 0 900 600">
        {/* BEGIN TRANSACTION */}
        <rect x="350" y="20" width="200" height="50" fill="#1976d2" rx="8" />
        <text x="450" y="50" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          BEGIN TRANSACTION
        </text>

        {/* Arrow */}
        <path d="M 450 70 L 450 100" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead2)" />

        {/* Operations */}
        <rect x="350" y="100" width="200" height="50" fill="#388e3c" rx="8" />
        <text x="450" y="130" fill="white" fontSize="14" textAnchor="middle">
          Execute Operations
        </text>

        {/* Arrow */}
        <path d="M 450 150 L 450 180" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead2)" />

        {/* Decision Diamond */}
        <path d="M 450 180 L 550 230 L 450 280 L 350 230 Z" fill="#f57c00" stroke="#333" strokeWidth="2" />
        <text x="450" y="235" fill="white" fontSize="13" textAnchor="middle" fontWeight="bold">
          Error?
        </text>

        {/* Yes path - Rollback */}
        <path d="M 350 230 L 200 230" stroke="#d32f2f" strokeWidth="3" markerEnd="url(#arrowhead2)" />
        <text x="270" y="220" fill="#d32f2f" fontSize="12" fontWeight="bold">Yes</text>
        
        <rect x="50" y="200" width="150" height="60" fill="#d32f2f" rx="8" />
        <text x="125" y="225" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          ROLLBACK
        </text>
        <text x="125" y="245" fill="white" fontSize="11" textAnchor="middle">
          Undo Changes
        </text>

        {/* No path - Commit */}
        <path d="M 550 230 L 700 230" stroke="#388e3c" strokeWidth="3" markerEnd="url(#arrowhead2)" />
        <text x="620" y="220" fill="#388e3c" fontSize="12" fontWeight="bold">No</text>
        
        <rect x="700" y="200" width="150" height="60" fill="#388e3c" rx="8" />
        <text x="775" y="225" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          COMMIT
        </text>
        <text x="775" y="245" fill="white" fontSize="11" textAnchor="middle">
          Save Changes
        </text>

        {/* End points */}
        <path d="M 125 260 L 125 320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead2)" />
        <path d="M 775 260 L 775 320" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead2)" />

        <ellipse cx="125" cy="340" rx="60" ry="30" fill="#999" />
        <text x="125" y="345" fill="white" fontSize="12" textAnchor="middle">Cancelled</text>

        <ellipse cx="775" cy="340" rx="60" ry="30" fill="#4caf50" />
        <text x="775" y="345" fill="white" fontSize="12" textAnchor="middle">Success</text>

        {/* ACID Properties Box */}
        <rect x="50" y="420" width="800" height="150" fill="#f5f5f5" stroke="#1976d2" strokeWidth="2" rx="8" />
        <text x="450" y="445" fill="#1976d2" fontSize="16" textAnchor="middle" fontWeight="bold">
          ACID Properties
        </text>

        {/* ACID Grid */}
        <text x="100" y="475" fill="#333" fontSize="13" fontWeight="bold">Atomicity:</text>
        <text x="100" y="495" fill="#666" fontSize="11">All or nothing</text>

        <text x="300" y="475" fill="#333" fontSize="13" fontWeight="bold">Consistency:</text>
        <text x="300" y="495" fill="#666" fontSize="11">Valid state</text>

        <text x="500" y="475" fill="#333" fontSize="13" fontWeight="bold">Isolation:</text>
        <text x="500" y="495" fill="#666" fontSize="11">No interference</text>

        <text x="700" y="475" fill="#333" fontSize="13" fontWeight="bold">Durability:</text>
        <text x="700" y="495" fill="#666" fontSize="11">Permanent save</text>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#666" />
          </marker>
        </defs>
      </svg>
    );
  };

  const renderNormalizationFlow = () => {
    return (
      <svg width="100%" height="700" viewBox="0 0 800 700">
        {/* Title */}
        <text x="400" y="30" fill="#1976d2" fontSize="20" textAnchor="middle" fontWeight="bold">
          Database Normalization Process
        </text>

        {/* Unnormalized */}
        <rect x="250" y="60" width="300" height="80" fill="#d32f2f" rx="8" />
        <text x="400" y="90" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          Unnormalized Data
        </text>
        <text x="400" y="115" fill="white" fontSize="11" textAnchor="middle">
          Repeating groups, redundancy
        </text>

        {/* Arrow */}
        <path d="M 400 140 L 400 180" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead3)" />

        {/* 1NF */}
        <rect x="250" y="180" width="300" height="80" fill="#f57c00" rx="8" />
        <text x="400" y="210" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          First Normal Form (1NF)
        </text>
        <text x="400" y="235" fill="white" fontSize="11" textAnchor="middle">
          ✓ Atomic values, ✓ No repeating groups
        </text>

        {/* Arrow */}
        <path d="M 400 260 L 400 300" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead3)" />

        {/* 2NF */}
        <rect x="250" y="300" width="300" height="80" fill="#ff9800" rx="8" />
        <text x="400" y="330" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          Second Normal Form (2NF)
        </text>
        <text x="400" y="355" fill="white" fontSize="11" textAnchor="middle">
          ✓ 1NF, ✓ No partial dependencies
        </text>

        {/* Arrow */}
        <path d="M 400 380 L 400 420" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead3)" />

        {/* 3NF */}
        <rect x="250" y="420" width="300" height="80" fill="#388e3c" rx="8" />
        <text x="400" y="450" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          Third Normal Form (3NF)
        </text>
        <text x="400" y="475" fill="white" fontSize="11" textAnchor="middle">
          ✓ 2NF, ✓ No transitive dependencies
        </text>

        {/* Arrow */}
        <path d="M 400 500 L 400 540" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead3)" />

        {/* BCNF */}
        <rect x="250" y="540" width="300" height="80" fill="#1976d2" rx="8" />
        <text x="400" y="570" fill="white" fontSize="14" textAnchor="middle" fontWeight="bold">
          Boyce-Codd Normal Form (BCNF)
        </text>
        <text x="400" y="595" fill="white" fontSize="11" textAnchor="middle">
          ✓ 3NF, ✓ Every determinant is a key
        </text>

        {/* Benefits box */}
        <rect x="50" y="60" width="150" height="250" fill="#e3f2fd" stroke="#1976d2" strokeWidth="2" rx="8" />
        <text x="125" y="85" fill="#1976d2" fontSize="13" textAnchor="middle" fontWeight="bold">
          Benefits:
        </text>
        <text x="60" y="110" fill="#666" fontSize="11">• Reduce redundancy</text>
        <text x="60" y="135" fill="#666" fontSize="11">• Improve integrity</text>
        <text x="60" y="160" fill="#666" fontSize="11">• Easier updates</text>
        <text x="60" y="185" fill="#666" fontSize="11">• Better organization</text>
        <text x="60" y="210" fill="#666" fontSize="11">• Consistent data</text>

        {/* Trade-offs box */}
        <rect x="600" y="60" width="150" height="250" fill="#fff3e0" stroke="#f57c00" strokeWidth="2" rx="8" />
        <text x="675" y="85" fill="#f57c00" fontSize="13" textAnchor="middle" fontWeight="bold">
          Trade-offs:
        </text>
        <text x="610" y="110" fill="#666" fontSize="11">• More tables</text>
        <text x="610" y="135" fill="#666" fontSize="11">• Complex queries</text>
        <text x="610" y="160" fill="#666" fontSize="11">• More JOINs</text>
        <text x="610" y="185" fill="#666" fontSize="11">• Possible overhead</text>

        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#666" />
          </marker>
        </defs>
      </svg>
    );
  };

  const renderJoinTypesFlow = () => {
    return (
      <svg width="100%" height="600" viewBox="0 0 1000 600">
        {/* Title */}
        <text x="500" y="30" fill="#1976d2" fontSize="20" textAnchor="middle" fontWeight="bold">
          SQL JOIN Types Visual Guide
        </text>

        {/* INNER JOIN */}
        <g transform="translate(100, 80)">
          <circle cx="80" cy="80" r="60" fill="#1976d2" opacity="0.7" stroke="#333" strokeWidth="2" />
          <circle cx="140" cy="80" r="60" fill="#388e3c" opacity="0.7" stroke="#333" strokeWidth="2" />
          <text x="110" y="190" textAnchor="middle" fontSize="14" fontWeight="bold">INNER JOIN</text>
          <text x="110" y="210" textAnchor="middle" fontSize="11" fill="#666">Only matching rows</text>
        </g>

        {/* LEFT JOIN */}
        <g transform="translate(400, 80)">
          <circle cx="80" cy="80" r="60" fill="#1976d2" opacity="0.9" stroke="#333" strokeWidth="2" />
          <circle cx="140" cy="80" r="60" fill="#388e3c" opacity="0.3" stroke="#333" strokeWidth="2" />
          <text x="110" y="190" textAnchor="middle" fontSize="14" fontWeight="bold">LEFT JOIN</text>
          <text x="110" y="210" textAnchor="middle" fontSize="11" fill="#666">All left + matching</text>
        </g>

        {/* RIGHT JOIN */}
        <g transform="translate(700, 80)">
          <circle cx="80" cy="80" r="60" fill="#1976d2" opacity="0.3" stroke="#333" strokeWidth="2" />
          <circle cx="140" cy="80" r="60" fill="#388e3c" opacity="0.9" stroke="#333" strokeWidth="2" />
          <text x="110" y="190" textAnchor="middle" fontSize="14" fontWeight="bold">RIGHT JOIN</text>
          <text x="110" y="210" textAnchor="middle" fontSize="11" fill="#666">All right + matching</text>
        </g>

        {/* FULL OUTER JOIN */}
        <g transform="translate(250, 350)">
          <circle cx="80" cy="80" r="60" fill="#1976d2" opacity="0.7" stroke="#333" strokeWidth="2" />
          <circle cx="140" cy="80" r="60" fill="#388e3c" opacity="0.7" stroke="#333" strokeWidth="2" />
          <text x="110" y="190" textAnchor="middle" fontSize="14" fontWeight="bold">FULL OUTER JOIN</text>
          <text x="110" y="210" textAnchor="middle" fontSize="11" fill="#666">All rows from both</text>
        </g>

        {/* CROSS JOIN */}
        <g transform="translate(600, 350)">
          <rect x="40" y="40" width="80" height="80" fill="#d32f2f" opacity="0.7" stroke="#333" strokeWidth="2" />
          <rect x="100" y="60" width="80" height="80" fill="#f57c00" opacity="0.7" stroke="#333" strokeWidth="2" />
          <text x="110" y="190" textAnchor="middle" fontSize="14" fontWeight="bold">CROSS JOIN</text>
          <text x="110" y="210" textAnchor="middle" fontSize="11" fill="#666">Cartesian product</text>
        </g>

        {/* Legend */}
        <rect x="50" y="520" width="900" height="60" fill="#f5f5f5" stroke="#1976d2" strokeWidth="2" rx="8" />
        <circle cx="100" cy="550" r="15" fill="#1976d2" opacity="0.7" />
        <text x="125" y="555" fontSize="12">Table A</text>
        
        <circle cx="250" cy="550" r="15" fill="#388e3c" opacity="0.7" />
        <text x="275" y="555" fontSize="12">Table B</text>
        
        <text x="450" y="555" fontSize="12" fill="#666">Darker area = rows included in result</text>
      </svg>
    );
  };

  const renderDiagram = () => {
    switch (type) {
      case 'query-execution':
        return renderQueryExecutionFlow();
      case 'transaction':
        return renderTransactionFlow();
      case 'normalization':
        return renderNormalizationFlow();
      case 'joins':
        return renderJoinTypesFlow();
      default:
        return null;
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3, my: 2 }}>
      {title && (
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      )}
      <Box
        ref={svgRef}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          '& svg': {
            maxWidth: '100%',
            height: 'auto',
          },
        }}
      >
        {renderDiagram()}
      </Box>
    </Paper>
  );
};

export default InteractiveFlowDiagram;
