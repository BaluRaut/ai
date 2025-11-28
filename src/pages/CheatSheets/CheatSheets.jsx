import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MemoryIcon from '@mui/icons-material/Memory';

const CheatSheets = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id, language }) => (
    <Box sx={{ position: 'relative' }}>
      <Paper
        sx={{
          p: 2,
          bgcolor: 'grey.900',
          borderRadius: 1,
          overflow: 'auto',
          '& pre': {
            m: 0,
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: '#e0e0e0',
            whiteSpace: 'pre-wrap',
          },
        }}
      >
        <pre>{code}</pre>
      </Paper>
      <Tooltip title={copiedCode === id ? 'Copied!' : 'Copy'}>
        <IconButton
          size="small"
          onClick={() => copyToClipboard(code, id)}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: 'rgba(255,255,255,0.1)',
            color: copiedCode === id ? 'success.main' : 'grey.400',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );

  const sqlCheatSheet = {
    sections: [
      {
        title: '📊 SELECT Basics',
        items: [
          { label: 'Select all columns', code: 'SELECT * FROM table_name;' },
          { label: 'Select specific columns', code: 'SELECT col1, col2 FROM table_name;' },
          { label: 'Select distinct values', code: 'SELECT DISTINCT column FROM table_name;' },
          { label: 'Select with alias', code: 'SELECT column AS alias_name FROM table_name;' },
        ],
      },
      {
        title: '🔍 WHERE Clause',
        items: [
          { label: 'Equals', code: "SELECT * FROM users WHERE status = 'active';" },
          { label: 'Not equals', code: "SELECT * FROM users WHERE status <> 'inactive';" },
          { label: 'Greater/Less than', code: 'SELECT * FROM products WHERE price > 100;' },
          { label: 'BETWEEN', code: 'SELECT * FROM orders WHERE amount BETWEEN 100 AND 500;' },
          { label: 'IN', code: "SELECT * FROM users WHERE country IN ('USA', 'UK', 'Canada');" },
          { label: 'LIKE (pattern)', code: "SELECT * FROM users WHERE email LIKE '%@gmail.com';" },
          { label: 'IS NULL', code: 'SELECT * FROM users WHERE phone IS NULL;' },
          { label: 'AND / OR', code: "SELECT * FROM products WHERE price > 50 AND category = 'Electronics';" },
        ],
      },
      {
        title: '🔗 JOINs',
        items: [
          { label: 'INNER JOIN', code: 'SELECT * FROM orders o\nINNER JOIN customers c ON o.customer_id = c.id;' },
          { label: 'LEFT JOIN', code: 'SELECT * FROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id;' },
          { label: 'RIGHT JOIN', code: 'SELECT * FROM orders o\nRIGHT JOIN customers c ON o.customer_id = c.id;' },
          { label: 'FULL OUTER JOIN', code: 'SELECT * FROM table1\nFULL OUTER JOIN table2 ON table1.id = table2.id;' },
          { label: 'Self JOIN', code: 'SELECT e.name, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;' },
        ],
      },
      {
        title: '📈 Aggregations',
        items: [
          { label: 'COUNT', code: 'SELECT COUNT(*) FROM orders;' },
          { label: 'SUM', code: 'SELECT SUM(amount) FROM orders;' },
          { label: 'AVG', code: 'SELECT AVG(price) FROM products;' },
          { label: 'MIN / MAX', code: 'SELECT MIN(price), MAX(price) FROM products;' },
          { label: 'GROUP BY', code: 'SELECT category, COUNT(*)\nFROM products\nGROUP BY category;' },
          { label: 'HAVING', code: 'SELECT category, COUNT(*) as cnt\nFROM products\nGROUP BY category\nHAVING COUNT(*) > 5;' },
        ],
      },
      {
        title: '📝 Data Modification',
        items: [
          { label: 'INSERT', code: "INSERT INTO users (name, email)\nVALUES ('John', 'john@example.com');" },
          { label: 'INSERT multiple', code: "INSERT INTO users (name, email) VALUES\n  ('John', 'john@example.com'),\n  ('Jane', 'jane@example.com');" },
          { label: 'UPDATE', code: "UPDATE users\nSET status = 'active'\nWHERE id = 1;" },
          { label: 'DELETE', code: "DELETE FROM users\nWHERE status = 'inactive';" },
        ],
      },
      {
        title: '🏗️ Table Operations',
        items: [
          { label: 'CREATE TABLE', code: 'CREATE TABLE users (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);' },
          { label: 'ALTER TABLE', code: 'ALTER TABLE users ADD COLUMN phone VARCHAR(20);' },
          { label: 'DROP TABLE', code: 'DROP TABLE IF EXISTS table_name;' },
          { label: 'CREATE INDEX', code: 'CREATE INDEX idx_email ON users(email);' },
        ],
      },
      {
        title: '🔄 Subqueries & CTEs',
        items: [
          { label: 'Subquery in WHERE', code: 'SELECT * FROM products\nWHERE price > (SELECT AVG(price) FROM products);' },
          { label: 'Subquery in FROM', code: 'SELECT * FROM (\n  SELECT category, AVG(price) as avg_price\n  FROM products GROUP BY category\n) AS category_avg;' },
          { label: 'CTE (WITH)', code: 'WITH top_customers AS (\n  SELECT customer_id, SUM(amount) as total\n  FROM orders GROUP BY customer_id\n)\nSELECT * FROM top_customers WHERE total > 1000;' },
        ],
      },
    ],
  };

  const mongoCheatSheet = {
    sections: [
      {
        title: '📊 Find Operations',
        items: [
          { label: 'Find all', code: 'db.collection.find()' },
          { label: 'Find with filter', code: 'db.users.find({ status: "active" })' },
          { label: 'Find one', code: 'db.users.findOne({ email: "john@example.com" })' },
          { label: 'Projection', code: 'db.users.find({}, { name: 1, email: 1, _id: 0 })' },
          { label: 'Limit & Skip', code: 'db.users.find().limit(10).skip(20)' },
          { label: 'Sort', code: 'db.users.find().sort({ createdAt: -1 })' },
        ],
      },
      {
        title: '🔍 Query Operators',
        items: [
          { label: 'Comparison', code: 'db.products.find({ price: { $gt: 100 } })\n// $eq, $ne, $gt, $gte, $lt, $lte' },
          { label: '$in / $nin', code: 'db.users.find({ country: { $in: ["USA", "UK"] } })' },
          { label: '$and / $or', code: 'db.products.find({\n  $and: [\n    { price: { $gt: 50 } },\n    { category: "Electronics" }\n  ]\n})' },
          { label: '$exists', code: 'db.users.find({ phone: { $exists: true } })' },
          { label: '$regex', code: 'db.users.find({ email: { $regex: /@gmail\\.com$/ } })' },
          { label: 'Array contains', code: 'db.posts.find({ tags: "mongodb" })' },
          { label: '$elemMatch', code: 'db.orders.find({\n  items: { $elemMatch: { qty: { $gt: 5 } } }\n})' },
        ],
      },
      {
        title: '📝 Insert Operations',
        items: [
          { label: 'Insert one', code: 'db.users.insertOne({\n  name: "John",\n  email: "john@example.com"\n})' },
          { label: 'Insert many', code: 'db.users.insertMany([\n  { name: "John", email: "john@example.com" },\n  { name: "Jane", email: "jane@example.com" }\n])' },
        ],
      },
      {
        title: '✏️ Update Operations',
        items: [
          { label: 'Update one', code: 'db.users.updateOne(\n  { email: "john@example.com" },\n  { $set: { status: "active" } }\n)' },
          { label: 'Update many', code: 'db.users.updateMany(\n  { status: "pending" },\n  { $set: { status: "active" } }\n)' },
          { label: '$inc', code: 'db.products.updateOne(\n  { _id: 1 },\n  { $inc: { views: 1, stock: -1 } }\n)' },
          { label: '$push / $pull', code: 'db.posts.updateOne(\n  { _id: 1 },\n  { $push: { tags: "new-tag" } }\n)' },
          { label: 'Upsert', code: 'db.users.updateOne(\n  { email: "new@example.com" },\n  { $set: { name: "New User" } },\n  { upsert: true }\n)' },
        ],
      },
      {
        title: '🗑️ Delete Operations',
        items: [
          { label: 'Delete one', code: 'db.users.deleteOne({ email: "john@example.com" })' },
          { label: 'Delete many', code: 'db.users.deleteMany({ status: "inactive" })' },
        ],
      },
      {
        title: '📈 Aggregation Pipeline',
        items: [
          { label: '$match', code: 'db.orders.aggregate([\n  { $match: { status: "completed" } }\n])' },
          { label: '$group', code: 'db.orders.aggregate([\n  { $group: {\n      _id: "$customerId",\n      total: { $sum: "$amount" },\n      count: { $sum: 1 }\n    }\n  }\n])' },
          { label: '$lookup (join)', code: 'db.orders.aggregate([\n  { $lookup: {\n      from: "customers",\n      localField: "customerId",\n      foreignField: "_id",\n      as: "customer"\n    }\n  }\n])' },
          { label: '$project', code: 'db.users.aggregate([\n  { $project: {\n      fullName: { $concat: ["$firstName", " ", "$lastName"] },\n      email: 1\n    }\n  }\n])' },
          { label: '$sort & $limit', code: 'db.products.aggregate([\n  { $sort: { sales: -1 } },\n  { $limit: 10 }\n])' },
        ],
      },
      {
        title: '📊 Indexes',
        items: [
          { label: 'Create index', code: 'db.users.createIndex({ email: 1 })' },
          { label: 'Compound index', code: 'db.orders.createIndex({ customerId: 1, createdAt: -1 })' },
          { label: 'Unique index', code: 'db.users.createIndex({ email: 1 }, { unique: true })' },
          { label: 'Text index', code: 'db.articles.createIndex({ title: "text", content: "text" })' },
          { label: 'List indexes', code: 'db.collection.getIndexes()' },
        ],
      },
    ],
  };

  const redisCheatSheet = {
    sections: [
      {
        title: '📝 Strings',
        items: [
          { label: 'SET / GET', code: 'SET key "value"\nGET key' },
          { label: 'Set with expiry', code: 'SETEX key 3600 "value"  # expires in 1 hour\nSET key "value" EX 60   # alternative syntax' },
          { label: 'Multiple get/set', code: 'MSET key1 "val1" key2 "val2"\nMGET key1 key2' },
          { label: 'Increment', code: 'INCR counter\nINCRBY counter 5\nDECR counter' },
          { label: 'Append', code: 'APPEND key " more text"' },
        ],
      },
      {
        title: '📋 Lists',
        items: [
          { label: 'Push left/right', code: 'LPUSH mylist "value"\nRPUSH mylist "value"' },
          { label: 'Pop left/right', code: 'LPOP mylist\nRPOP mylist' },
          { label: 'Get range', code: 'LRANGE mylist 0 -1  # all elements\nLRANGE mylist 0 9    # first 10' },
          { label: 'Get length', code: 'LLEN mylist' },
          { label: 'Get by index', code: 'LINDEX mylist 0' },
          { label: 'Blocking pop', code: 'BLPOP mylist 30  # wait 30 seconds' },
        ],
      },
      {
        title: '🗂️ Hashes',
        items: [
          { label: 'Set field', code: 'HSET user:1 name "John" age "30"' },
          { label: 'Get field', code: 'HGET user:1 name' },
          { label: 'Get all', code: 'HGETALL user:1' },
          { label: 'Multiple set/get', code: 'HMSET user:1 name "John" email "john@example.com"\nHMGET user:1 name email' },
          { label: 'Increment field', code: 'HINCRBY user:1 age 1' },
          { label: 'Delete field', code: 'HDEL user:1 phone' },
          { label: 'Check exists', code: 'HEXISTS user:1 email' },
        ],
      },
      {
        title: '🎯 Sets',
        items: [
          { label: 'Add members', code: 'SADD myset "member1" "member2"' },
          { label: 'Get members', code: 'SMEMBERS myset' },
          { label: 'Check member', code: 'SISMEMBER myset "member1"' },
          { label: 'Set operations', code: 'SINTER set1 set2      # intersection\nSUNION set1 set2      # union\nSDIFF set1 set2       # difference' },
          { label: 'Remove member', code: 'SREM myset "member1"' },
          { label: 'Random member', code: 'SRANDMEMBER myset 3  # 3 random' },
        ],
      },
      {
        title: '🏆 Sorted Sets',
        items: [
          { label: 'Add with score', code: 'ZADD leaderboard 100 "player1" 200 "player2"' },
          { label: 'Get range', code: 'ZRANGE leaderboard 0 -1 WITHSCORES\nZREVRANGE leaderboard 0 9  # top 10' },
          { label: 'Get rank', code: 'ZRANK leaderboard "player1"\nZREVRANK leaderboard "player1"' },
          { label: 'Get score', code: 'ZSCORE leaderboard "player1"' },
          { label: 'Increment score', code: 'ZINCRBY leaderboard 50 "player1"' },
          { label: 'Range by score', code: 'ZRANGEBYSCORE leaderboard 100 200' },
        ],
      },
      {
        title: '⏰ Keys & Expiration',
        items: [
          { label: 'Set expiry', code: 'EXPIRE key 3600    # seconds\nEXPIREAT key 1735689600  # unix timestamp' },
          { label: 'Check TTL', code: 'TTL key    # seconds remaining\nPTTL key   # milliseconds' },
          { label: 'Remove expiry', code: 'PERSIST key' },
          { label: 'Key operations', code: 'EXISTS key\nDEL key\nKEYS pattern*\nSCAN 0 MATCH user:*' },
          { label: 'Rename', code: 'RENAME oldkey newkey' },
          { label: 'Type', code: 'TYPE key' },
        ],
      },
      {
        title: '🔄 Transactions',
        items: [
          { label: 'Basic transaction', code: 'MULTI\nSET key1 "value1"\nSET key2 "value2"\nEXEC' },
          { label: 'Discard transaction', code: 'MULTI\nSET key1 "value1"\nDISCARD' },
          { label: 'Watch (optimistic lock)', code: 'WATCH mykey\nMULTI\nSET mykey "newvalue"\nEXEC' },
        ],
      },
      {
        title: '📡 Pub/Sub',
        items: [
          { label: 'Subscribe', code: 'SUBSCRIBE channel1 channel2' },
          { label: 'Publish', code: 'PUBLISH channel1 "Hello!"' },
          { label: 'Pattern subscribe', code: 'PSUBSCRIBE news.*' },
        ],
      },
    ],
  };

  const tabs = [
    { label: 'SQL', icon: <StorageIcon />, data: sqlCheatSheet },
    { label: 'MongoDB', icon: <DataObjectIcon />, data: mongoCheatSheet },
    { label: 'Redis', icon: <MemoryIcon />, data: redisCheatSheet },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          📋 Cheat Sheets
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Quick reference cards for common database operations. Click to copy!
        </Typography>

        <Paper sx={{ mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={(e, v) => setActiveTab(v)}
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon}
                label={tab.label}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Paper>

        <Box>
          {tabs[activeTab].data.sections.map((section, sectionIndex) => (
            <Accordion key={sectionIndex} defaultExpanded={sectionIndex < 3}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {section.items.map((item, itemIndex) => (
                    <Grid item xs={12} md={6} key={itemIndex}>
                      <Card variant="outlined">
                        <CardContent sx={{ pb: '16px !important' }}>
                          <Typography
                            variant="subtitle2"
                            color="primary"
                            gutterBottom
                          >
                            {item.label}
                          </Typography>
                          <CodeBlock
                            code={item.code}
                            id={`${sectionIndex}-${itemIndex}`}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default CheatSheets;
