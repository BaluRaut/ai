// Database Design Example 5: Inventory Management System
export const databaseDesignExamples5 = [
  {
    id: 'inventory',
    title: 'Inventory Management System',
    description: 'Warehouse inventory tracking with stock levels, suppliers, and purchase orders',
    difficulty: 'Intermediate',
    technologies: ['PostgreSQL', 'Redis'],
    tables: [
      {
        name: 'warehouses',
        schema: `CREATE TABLE warehouses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(10) UNIQUE NOT NULL,
  address TEXT,
  city VARCHAR(50),
  capacity_units INT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'products',
        schema: `CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  sku VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  category_id INT REFERENCES categories(id),
  unit_price DECIMAL(10,2),
  unit_of_measure VARCHAR(20) DEFAULT 'unit',
  min_stock_level INT DEFAULT 10,
  max_stock_level INT DEFAULT 1000,
  reorder_point INT DEFAULT 20,
  is_active BOOLEAN DEFAULT true
);`
      },
      {
        name: 'inventory',
        schema: `CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id),
  warehouse_id INT REFERENCES warehouses(id),
  quantity INT NOT NULL DEFAULT 0,
  reserved_qty INT DEFAULT 0,
  available_qty INT GENERATED ALWAYS AS (quantity - reserved_qty) STORED,
  last_counted_at TIMESTAMP,
  UNIQUE(product_id, warehouse_id)
);`
      },
      {
        name: 'stock_movements',
        schema: `CREATE TABLE stock_movements (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id),
  warehouse_id INT REFERENCES warehouses(id),
  movement_type VARCHAR(20) NOT NULL, -- 'IN', 'OUT', 'TRANSFER', 'ADJUSTMENT'
  quantity INT NOT NULL,
  reference_type VARCHAR(50), -- 'purchase_order', 'sales_order', 'transfer'
  reference_id INT,
  notes TEXT,
  created_by INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);`
      },
      {
        name: 'suppliers',
        schema: `CREATE TABLE suppliers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact_person VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(20),
  address TEXT,
  payment_terms INT DEFAULT 30,
  is_active BOOLEAN DEFAULT true
);`
      },
      {
        name: 'purchase_orders',
        schema: `CREATE TABLE purchase_orders (
  id SERIAL PRIMARY KEY,
  po_number VARCHAR(20) UNIQUE NOT NULL,
  supplier_id INT REFERENCES suppliers(id),
  warehouse_id INT REFERENCES warehouses(id),
  status VARCHAR(20) DEFAULT 'draft', -- draft, sent, partial, received, cancelled
  order_date DATE DEFAULT CURRENT_DATE,
  expected_date DATE,
  total_amount DECIMAL(12,2),
  notes TEXT,
  created_by INT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE purchase_order_items (
  id SERIAL PRIMARY KEY,
  po_id INT REFERENCES purchase_orders(id),
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL,
  received_qty INT DEFAULT 0,
  unit_price DECIMAL(10,2),
  total_price DECIMAL(12,2)
);`
      }
    ],
    relationships: [
      'Products belong to Categories (many-to-one)',
      'Inventory links Products to Warehouses (many-to-many with quantity)',
      'Stock Movements track all inventory changes',
      'Purchase Orders come from Suppliers',
      'Purchase Order Items reference Products'
    ],
    indexes: [
      'CREATE INDEX idx_inventory_product ON inventory(product_id);',
      'CREATE INDEX idx_inventory_warehouse ON inventory(warehouse_id);',
      'CREATE INDEX idx_movements_product ON stock_movements(product_id, created_at);',
      'CREATE INDEX idx_movements_type ON stock_movements(movement_type, created_at);',
      'CREATE INDEX idx_products_sku ON products(sku);',
      'CREATE INDEX idx_po_supplier ON purchase_orders(supplier_id, status);'
    ],
    sampleQueries: [
      {
        name: 'Low Stock Alert',
        query: `SELECT p.sku, p.name, i.quantity, p.reorder_point, w.name as warehouse
FROM inventory i
JOIN products p ON i.product_id = p.id
JOIN warehouses w ON i.warehouse_id = w.id
WHERE i.available_qty <= p.reorder_point
ORDER BY (i.available_qty::float / p.reorder_point) ASC;`
      },
      {
        name: 'Stock Movement History',
        query: `SELECT sm.created_at, sm.movement_type, p.sku, p.name,
       sm.quantity, sm.reference_type, u.name as moved_by
FROM stock_movements sm
JOIN products p ON sm.product_id = p.id
JOIN users u ON sm.created_by = u.id
WHERE sm.product_id = $1
ORDER BY sm.created_at DESC
LIMIT 50;`
      },
      {
        name: 'Inventory Valuation',
        query: `SELECT w.name as warehouse, 
       SUM(i.quantity * p.unit_price) as total_value,
       COUNT(DISTINCT i.product_id) as product_count
FROM inventory i
JOIN products p ON i.product_id = p.id
JOIN warehouses w ON i.warehouse_id = w.id
GROUP BY w.id
ORDER BY total_value DESC;`
      }
    ],
    commonMistakes: [
      { mistake: 'Not tracking stock movements', consequence: 'Cannot audit inventory discrepancies', solution: 'Log every stock change with user, timestamp, and reason' },
      { mistake: 'Updating quantity directly', consequence: 'Race conditions cause incorrect stock levels', solution: 'Use atomic operations: UPDATE SET quantity = quantity + $1' },
      { mistake: 'No reserved quantity tracking', consequence: 'Overselling when multiple orders process', solution: 'Separate quantity and reserved_qty columns' }
    ],
    designTips: [
      'Use computed columns for available_qty (quantity - reserved)',
      'Implement stock movement triggers for automatic logging',
      'Cache frequently accessed stock levels in Redis',
      'Use database transactions for multi-warehouse transfers'
    ]
  }
];
