// Time-Series Database Topics

export const timeSeriesTopics = [
  {
    id: 'timeseries-intro',
    title: 'Introduction to Time-Series Databases',
    category: 'Time-Series Databases',
    difficulty: 'beginner',
    description: 'Learn what time-series databases are and when to use them',
    content: `
# Introduction to Time-Series Databases

Time-series databases (TSDB) are optimized for storing and querying data that changes over time.

## What is Time-Series Data?

Time-series data is a sequence of data points indexed by time:

\`\`\`
timestamp              | value
-----------------------|-------
2024-01-01 00:00:00   | 45.2
2024-01-01 00:01:00   | 45.8
2024-01-01 00:02:00   | 46.1
2024-01-01 00:03:00   | 45.9
\`\`\`

### Characteristics
- **Time-ordered**: Data arrives sequentially by time
- **Append-only**: New data is added, rarely modified
- **High volume**: Often millions of data points per day
- **Recent data**: Most queries focus on recent data

## Common Use Cases

### IoT & Sensors
\`\`\`
Temperature: 72.5°F at 2024-01-01 10:00:00
Humidity: 45% at 2024-01-01 10:00:00
Pressure: 1013 hPa at 2024-01-01 10:00:00
\`\`\`

### Application Metrics
\`\`\`
CPU Usage: 45% at timestamp T
Memory: 8.2 GB at timestamp T
Request Count: 1523 at timestamp T
Error Rate: 0.02% at timestamp T
\`\`\`

### Financial Data
\`\`\`
Stock Price: $150.25 at 2024-01-01 09:30:00
Volume: 1,250,000 shares
Bid: $150.20
Ask: $150.30
\`\`\`

### Other Use Cases
- Network monitoring
- Industrial telemetry
- Smart city infrastructure
- Healthcare monitoring
- Energy consumption

## Why Not Use a Regular Database?

| Aspect | Relational DB | Time-Series DB |
|--------|--------------|----------------|
| Write Speed | 1000s/sec | Millions/sec |
| Compression | General purpose | Time-aware |
| Aggregation | Manual queries | Built-in functions |
| Retention | Manual | Automatic policies |
| Query Patterns | General | Time-window optimized |

## Popular Time-Series Databases

### InfluxDB
- Open-source, purpose-built for metrics
- SQL-like query language (InfluxQL/Flux)
- Automatic retention policies

### TimescaleDB
- PostgreSQL extension
- Full SQL support
- Automatic partitioning

### Prometheus
- Pull-based metrics collection
- Built-in alerting
- Kubernetes native

### Others
- **QuestDB** - High-performance, SQL interface
- **ClickHouse** - Analytics-focused
- **Amazon Timestream** - AWS managed service
- **Azure Time Series Insights** - Azure managed

## Key Concepts

### Timestamp
The time component of each data point:
\`\`\`
2024-01-15T10:30:00.000Z  // ISO 8601 format
1705315800000              // Unix milliseconds
\`\`\`

### Measurement/Metric
What you're measuring:
\`\`\`
cpu_usage
temperature
stock_price
\`\`\`

### Tags (Indexed Metadata)
Identifying information for filtering:
\`\`\`
host=server1
location=datacenter1
sensor_id=temp-001
\`\`\`

### Fields (Values)
The actual measured values:
\`\`\`
value=45.2
min=42.0
max=48.5
count=120
\`\`\`
    `,
    quiz: [
      {
        question: 'What is the primary characteristic of time-series data?',
        options: [
          'It contains only numeric values',
          'It is indexed and ordered by time',
          'It requires relational joins',
          'It must be structured in tables'
        ],
        correct: 1,
        explanation: 'Time-series data is fundamentally organized around timestamps, with data points arriving in time order.'
      },
      {
        question: 'Which is NOT a typical use case for time-series databases?',
        options: [
          'IoT sensor readings',
          'Stock price tracking',
          'User authentication records',
          'Server CPU metrics'
        ],
        correct: 2,
        explanation: 'User authentication is event-based, not continuous time-series data. TSDBs are for metrics that change continuously over time.'
      },
      {
        question: 'What is the main advantage of TSDBs over relational databases for time-series data?',
        options: [
          'Better ACID compliance',
          'More flexible schema',
          'Optimized write speed and time-based compression',
          'Better join performance'
        ],
        correct: 2,
        explanation: 'TSDBs can handle millions of writes per second and use time-aware compression to reduce storage.'
      },
      {
        question: 'In time-series terminology, what are "tags" used for?',
        options: [
          'Storing the actual measured values',
          'Indexed metadata for filtering and grouping',
          'Time zone information',
          'Database connection settings'
        ],
        correct: 1,
        explanation: 'Tags are indexed metadata like host=server1 that allow efficient filtering and grouping of data.'
      },
      {
        question: 'Which database is built as a PostgreSQL extension for time-series?',
        options: [
          'InfluxDB',
          'Prometheus',
          'TimescaleDB',
          'QuestDB'
        ],
        correct: 2,
        explanation: 'TimescaleDB extends PostgreSQL with time-series optimizations while maintaining full SQL compatibility.'
      }
    ]
  },
  {
    id: 'influxdb-basics',
    title: 'InfluxDB Fundamentals',
    category: 'Time-Series Databases',
    difficulty: 'beginner',
    description: 'Learn InfluxDB concepts and basic queries',
    content: `
# InfluxDB Fundamentals

InfluxDB is one of the most popular open-source time-series databases.

## Data Model

### Organization
Top-level container (like a database cluster):
\`\`\`
Organization: "MyCompany"
\`\`\`

### Bucket
Stores time-series data with retention policy:
\`\`\`
Bucket: "server_metrics"
Retention: 30 days
\`\`\`

### Measurement
Like a table, groups related data:
\`\`\`
Measurement: "cpu"
\`\`\`

### Tags (Indexed)
Key-value pairs for filtering:
\`\`\`
host=server1
region=us-west
\`\`\`

### Fields (Not Indexed)
Actual data values:
\`\`\`
usage=45.2
idle=54.8
\`\`\`

### Timestamp
When the data was recorded:
\`\`\`
time: 2024-01-15T10:30:00Z
\`\`\`

## Line Protocol

InfluxDB's text-based format for writing data:

\`\`\`
<measurement>[,<tag_key>=<tag_value>...] <field_key>=<field_value>[,<field_key>=<field_value>...] [<timestamp>]
\`\`\`

### Examples

\`\`\`
# CPU measurement
cpu,host=server1,region=us-west usage=45.2,idle=54.8 1705315800000000000

# Temperature sensor
temperature,sensor=temp-001,location=room-a value=72.5 1705315800000000000

# Multiple fields
weather,location=NYC temp=68.5,humidity=45,pressure=1013.2 1705315800000000000
\`\`\`

## InfluxQL Queries

### Basic SELECT

\`\`\`sql
-- Get all CPU data
SELECT * FROM cpu

-- Get specific fields
SELECT usage, idle FROM cpu

-- With time range
SELECT usage FROM cpu 
WHERE time > now() - 1h

-- With tag filter
SELECT usage FROM cpu 
WHERE host = 'server1'
\`\`\`

### Aggregations

\`\`\`sql
-- Average CPU usage per host
SELECT MEAN(usage) FROM cpu 
WHERE time > now() - 1h 
GROUP BY host

-- Maximum temperature last 24h
SELECT MAX(value) FROM temperature 
WHERE time > now() - 24h

-- Count readings per hour
SELECT COUNT(value) FROM temperature 
WHERE time > now() - 1d 
GROUP BY time(1h)
\`\`\`

### Time-Based Grouping

\`\`\`sql
-- Average per 5 minutes
SELECT MEAN(usage) FROM cpu 
WHERE time > now() - 1h 
GROUP BY time(5m)

-- Fill missing values
SELECT MEAN(usage) FROM cpu 
WHERE time > now() - 1h 
GROUP BY time(5m) fill(previous)

-- Multiple aggregations
SELECT MEAN(usage), MAX(usage), MIN(usage) 
FROM cpu 
WHERE time > now() - 1d 
GROUP BY time(1h)
\`\`\`

## Flux Query Language

InfluxDB 2.x uses Flux, a more powerful query language:

\`\`\`flux
// Basic query
from(bucket: "server_metrics")
  |> range(start: -1h)
  |> filter(fn: (r) => r._measurement == "cpu")

// Aggregation
from(bucket: "server_metrics")
  |> range(start: -1h)
  |> filter(fn: (r) => r._measurement == "cpu")
  |> filter(fn: (r) => r._field == "usage")
  |> mean()

// Group and aggregate
from(bucket: "server_metrics")
  |> range(start: -1d)
  |> filter(fn: (r) => r._measurement == "cpu")
  |> aggregateWindow(every: 1h, fn: mean)
  |> group(columns: ["host"])
\`\`\`

## Retention Policies

Automatically expire old data:

\`\`\`sql
-- Create bucket with retention (InfluxDB 2.x)
influx bucket create -n high_res_data -r 7d

-- Create retention policy (InfluxDB 1.x)
CREATE RETENTION POLICY "one_week" 
ON "mydb" DURATION 7d REPLICATION 1 DEFAULT
\`\`\`

## Best Practices

1. **Use tags for metadata** you'll filter/group by
2. **Use fields for values** you'll aggregate
3. **Keep cardinality low** - avoid high-cardinality tags
4. **Batch writes** for better performance
5. **Set appropriate retention** to manage storage
    `,
    quiz: [
      {
        question: 'What is Line Protocol in InfluxDB?',
        options: [
          'A network communication protocol',
          'A text-based format for writing data points',
          'A backup format',
          'A security protocol'
        ],
        correct: 1,
        explanation: 'Line Protocol is InfluxDB\'s text-based format: measurement,tags fields timestamp'
      },
      {
        question: 'What is the difference between tags and fields in InfluxDB?',
        options: [
          'Tags are numeric, fields are strings',
          'Tags are indexed for filtering, fields store actual values',
          'Fields are required, tags are optional',
          'There is no difference'
        ],
        correct: 1,
        explanation: 'Tags are indexed metadata for efficient filtering, while fields store the actual measured values.'
      },
      {
        question: 'Which Flux function is used to select a time window?',
        options: [
          'filter()',
          'window()',
          'range()',
          'time()'
        ],
        correct: 2,
        explanation: 'range(start: -1h) selects data from the specified time window in Flux queries.'
      },
      {
        question: 'What does GROUP BY time(5m) do in InfluxQL?',
        options: [
          'Limits results to 5 minutes',
          'Groups data into 5-minute intervals for aggregation',
          'Delays query execution by 5 minutes',
          'Sets the time zone offset'
        ],
        correct: 1,
        explanation: 'GROUP BY time(interval) divides data into time buckets for aggregation calculations.'
      },
      {
        question: 'Why should you avoid high-cardinality tags in InfluxDB?',
        options: [
          'Tags cannot store large values',
          'High cardinality increases index size and slows queries',
          'Tags are limited to 100 unique values',
          'High cardinality causes data loss'
        ],
        correct: 1,
        explanation: 'Each unique tag combination creates an index entry. High cardinality (like user IDs) bloats indexes and degrades performance.'
      }
    ]
  },
  {
    id: 'timescaledb-basics',
    title: 'TimescaleDB Fundamentals',
    category: 'Time-Series Databases',
    difficulty: 'intermediate',
    description: 'Learn TimescaleDB, the PostgreSQL extension for time-series',
    content: `
# TimescaleDB Fundamentals

TimescaleDB extends PostgreSQL with time-series optimizations while maintaining full SQL compatibility.

## Why TimescaleDB?

- **Full SQL support** - Use familiar PostgreSQL
- **Automatic partitioning** - Hypertables manage chunks
- **Compression** - Up to 95% storage reduction
- **Continuous aggregates** - Materialized real-time rollups
- **Works with existing tools** - pg_dump, replication, etc.

## Hypertables

The core TimescaleDB abstraction that automatically partitions data:

\`\`\`sql
-- Create regular table
CREATE TABLE sensor_data (
    time        TIMESTAMPTZ NOT NULL,
    sensor_id   TEXT NOT NULL,
    temperature DOUBLE PRECISION,
    humidity    DOUBLE PRECISION
);

-- Convert to hypertable
SELECT create_hypertable('sensor_data', 'time');

-- With chunk interval (default is 7 days)
SELECT create_hypertable(
    'sensor_data', 
    'time',
    chunk_time_interval => INTERVAL '1 day'
);
\`\`\`

## Inserting Data

Standard SQL INSERT works:

\`\`\`sql
-- Single row
INSERT INTO sensor_data (time, sensor_id, temperature, humidity)
VALUES (NOW(), 'sensor-001', 72.5, 45.0);

-- Batch insert
INSERT INTO sensor_data (time, sensor_id, temperature, humidity)
VALUES 
    ('2024-01-15 10:00:00', 'sensor-001', 72.5, 45.0),
    ('2024-01-15 10:01:00', 'sensor-001', 72.8, 44.5),
    ('2024-01-15 10:02:00', 'sensor-001', 73.1, 44.0);

-- COPY for bulk loading
COPY sensor_data FROM '/path/to/data.csv' CSV HEADER;
\`\`\`

## Querying Data

Use standard SQL with time-series functions:

\`\`\`sql
-- Basic query with time range
SELECT * FROM sensor_data
WHERE time > NOW() - INTERVAL '1 hour'
ORDER BY time DESC;

-- Aggregation
SELECT 
    sensor_id,
    AVG(temperature) as avg_temp,
    MAX(temperature) as max_temp,
    MIN(temperature) as min_temp
FROM sensor_data
WHERE time > NOW() - INTERVAL '24 hours'
GROUP BY sensor_id;
\`\`\`

## Time Bucket Function

Group data into time intervals:

\`\`\`sql
-- Average temperature per 5 minutes
SELECT 
    time_bucket('5 minutes', time) AS bucket,
    sensor_id,
    AVG(temperature) as avg_temp
FROM sensor_data
WHERE time > NOW() - INTERVAL '1 hour'
GROUP BY bucket, sensor_id
ORDER BY bucket DESC;

-- With gap filling
SELECT 
    time_bucket_gapfill('1 hour', time) AS bucket,
    sensor_id,
    AVG(temperature) as avg_temp,
    locf(AVG(temperature)) as filled_temp  -- Last observation carried forward
FROM sensor_data
WHERE time BETWEEN '2024-01-01' AND '2024-01-02'
GROUP BY bucket, sensor_id;
\`\`\`

## Continuous Aggregates

Materialized views that auto-update:

\`\`\`sql
-- Create continuous aggregate
CREATE MATERIALIZED VIEW sensor_hourly
WITH (timescaledb.continuous) AS
SELECT 
    time_bucket('1 hour', time) AS bucket,
    sensor_id,
    AVG(temperature) as avg_temp,
    MAX(temperature) as max_temp,
    MIN(temperature) as min_temp,
    COUNT(*) as reading_count
FROM sensor_data
GROUP BY bucket, sensor_id;

-- Add refresh policy
SELECT add_continuous_aggregate_policy('sensor_hourly',
    start_offset => INTERVAL '3 hours',
    end_offset => INTERVAL '1 hour',
    schedule_interval => INTERVAL '1 hour');

-- Query the aggregate (fast!)
SELECT * FROM sensor_hourly
WHERE bucket > NOW() - INTERVAL '7 days';
\`\`\`

## Compression

Reduce storage significantly:

\`\`\`sql
-- Enable compression
ALTER TABLE sensor_data SET (
    timescaledb.compress,
    timescaledb.compress_segmentby = 'sensor_id'
);

-- Add compression policy
SELECT add_compression_policy('sensor_data', INTERVAL '7 days');

-- Manual compression
SELECT compress_chunk(c) 
FROM show_chunks('sensor_data', older_than => INTERVAL '7 days') c;

-- Check compression stats
SELECT 
    hypertable_name,
    chunk_name,
    before_compression_total_bytes,
    after_compression_total_bytes
FROM timescaledb_information.compressed_chunk_stats;
\`\`\`

## Data Retention

Automatically drop old data:

\`\`\`sql
-- Add retention policy
SELECT add_retention_policy('sensor_data', INTERVAL '90 days');

-- Manual cleanup
SELECT drop_chunks('sensor_data', older_than => INTERVAL '90 days');
\`\`\`

## Useful Functions

\`\`\`sql
-- First and last values
SELECT 
    sensor_id,
    first(temperature, time) as first_reading,
    last(temperature, time) as last_reading
FROM sensor_data
WHERE time > NOW() - INTERVAL '1 day'
GROUP BY sensor_id;

-- Histogram
SELECT 
    histogram(temperature, 60.0, 90.0, 5) as temp_distribution
FROM sensor_data
WHERE time > NOW() - INTERVAL '1 day';

-- Approximate percentile
SELECT 
    sensor_id,
    approx_percentile(0.95, percentile_agg(temperature)) as p95_temp
FROM sensor_data
WHERE time > NOW() - INTERVAL '1 hour'
GROUP BY sensor_id;
\`\`\`
    `,
    quiz: [
      {
        question: 'What is a hypertable in TimescaleDB?',
        options: [
          'A table with extra columns',
          'An automatically partitioned table optimized for time-series',
          'A table that stores only recent data',
          'A compressed table format'
        ],
        correct: 1,
        explanation: 'Hypertables automatically partition data by time into chunks for efficient queries and storage management.'
      },
      {
        question: 'What does the time_bucket function do?',
        options: [
          'Creates backup copies of data',
          'Groups timestamps into fixed intervals for aggregation',
          'Limits query time range',
          'Converts time zones'
        ],
        correct: 1,
        explanation: 'time_bucket groups timestamps into intervals (e.g., 5 minutes) for aggregation queries.'
      },
      {
        question: 'What is the benefit of continuous aggregates?',
        options: [
          'They compress data automatically',
          'They pre-compute and auto-refresh aggregations for fast queries',
          'They replicate data across servers',
          'They encrypt sensitive data'
        ],
        correct: 1,
        explanation: 'Continuous aggregates are materialized views that automatically update, providing fast access to pre-computed aggregations.'
      },
      {
        question: 'How much storage reduction can TimescaleDB compression achieve?',
        options: [
          'Up to 10%',
          'Up to 50%',
          'Up to 95%',
          'Compression is not supported'
        ],
        correct: 2,
        explanation: 'TimescaleDB compression can achieve up to 95% storage reduction for time-series data.'
      },
      {
        question: 'What is the advantage of TimescaleDB over other TSDBs?',
        options: [
          'It has its own query language',
          'Full PostgreSQL SQL compatibility',
          'It only stores numeric data',
          'It doesn\'t require a schema'
        ],
        correct: 1,
        explanation: 'TimescaleDB extends PostgreSQL, providing full SQL support and compatibility with existing PostgreSQL tools.'
      }
    ]
  },
  {
    id: 'tsdb-best-practices',
    title: 'Time-Series Database Best Practices',
    category: 'Time-Series Databases',
    difficulty: 'advanced',
    description: 'Learn optimization strategies and design patterns for TSDBs',
    content: `
# Time-Series Database Best Practices

Master the techniques for efficient time-series data management.

## Schema Design

### Choose the Right Granularity

\`\`\`sql
-- Too granular (milliseconds when seconds suffice)
-- Wastes storage and slows queries
INSERT INTO metrics (time, value) VALUES
('2024-01-15 10:00:00.001', 45.2),
('2024-01-15 10:00:00.002', 45.3);

-- Appropriate granularity
INSERT INTO metrics (time, value) VALUES
('2024-01-15 10:00:00', 45.2),
('2024-01-15 10:00:01', 45.3);
\`\`\`

### Wide vs Narrow Tables

\`\`\`sql
-- Narrow table (one metric per row) - flexible but more rows
CREATE TABLE metrics_narrow (
    time TIMESTAMPTZ,
    metric_name TEXT,
    value DOUBLE PRECISION
);

-- Wide table (many metrics per row) - efficient for related metrics
CREATE TABLE metrics_wide (
    time TIMESTAMPTZ,
    cpu_usage DOUBLE PRECISION,
    memory_usage DOUBLE PRECISION,
    disk_io DOUBLE PRECISION,
    network_bytes DOUBLE PRECISION
);

-- Recommendation: Use wide tables for metrics that are always written together
\`\`\`

### Tag Cardinality Management

\`\`\`
# BAD: High cardinality tags
metric,user_id=12345,session_id=abc123 value=1
# Millions of unique combinations!

# GOOD: Low cardinality tags
metric,region=us-west,host_type=web value=1
# Bounded number of combinations
\`\`\`

## Write Optimization

### Batch Writes

\`\`\`sql
-- Instead of individual inserts
INSERT INTO metrics VALUES ('2024-01-15 10:00:00', 45.2);
INSERT INTO metrics VALUES ('2024-01-15 10:00:01', 45.3);
-- ...1000 more inserts

-- Batch them together
INSERT INTO metrics VALUES
('2024-01-15 10:00:00', 45.2),
('2024-01-15 10:00:01', 45.3),
-- ...1000 more values in one statement
;

-- Or use COPY for bulk loading
COPY metrics FROM STDIN CSV;
\`\`\`

### Write Buffer Tuning

\`\`\`
# InfluxDB config
[data]
  cache-max-memory-size = "1g"
  cache-snapshot-memory-size = "25m"
  
# TimescaleDB
SET work_mem = '256MB';
SET maintenance_work_mem = '512MB';
\`\`\`

### Async Writes

\`\`\`python
# Use async client libraries
import asyncio
from influxdb_client.client.influxdb_client_async import InfluxDBClientAsync

async def write_metrics(client, data):
    write_api = client.write_api()
    await write_api.write(bucket="metrics", record=data)

# Batch writes in background
async def batch_writer(queue):
    batch = []
    while True:
        item = await queue.get()
        batch.append(item)
        if len(batch) >= 1000:
            await write_batch(batch)
            batch = []
\`\`\`

## Query Optimization

### Use Time Filters First

\`\`\`sql
-- GOOD: Time filter first
SELECT * FROM sensor_data
WHERE time > NOW() - INTERVAL '1 hour'
  AND sensor_id = 'temp-001';

-- BAD: Time filter last
SELECT * FROM sensor_data
WHERE sensor_id = 'temp-001'
  AND time > NOW() - INTERVAL '1 hour';
\`\`\`

### Limit Data Scanned

\`\`\`sql
-- Use appropriate time ranges
SELECT AVG(value) FROM metrics
WHERE time > NOW() - INTERVAL '1 hour';  -- Good

SELECT AVG(value) FROM metrics
WHERE time > '2020-01-01';  -- Scans years of data!

-- Use downsampled data for long ranges
SELECT * FROM metrics_hourly  -- Pre-aggregated
WHERE time > NOW() - INTERVAL '30 days';
\`\`\`

### Parallel Queries

\`\`\`sql
-- TimescaleDB parallel query
SET max_parallel_workers_per_gather = 4;
SET parallel_tuple_cost = 0.001;

EXPLAIN ANALYZE
SELECT time_bucket('1 hour', time), AVG(value)
FROM large_metrics
WHERE time > NOW() - INTERVAL '7 days'
GROUP BY 1;
\`\`\`

## Multi-Resolution Storage

Store data at different resolutions:

\`\`\`sql
-- Raw data: keep 7 days
CREATE TABLE metrics_raw (
    time TIMESTAMPTZ,
    value DOUBLE PRECISION
);
SELECT add_retention_policy('metrics_raw', INTERVAL '7 days');

-- 1-minute aggregates: keep 30 days
CREATE MATERIALIZED VIEW metrics_1m
WITH (timescaledb.continuous) AS
SELECT time_bucket('1 minute', time), AVG(value), MAX(value), MIN(value)
FROM metrics_raw GROUP BY 1;
SELECT add_retention_policy('metrics_1m', INTERVAL '30 days');

-- 1-hour aggregates: keep 1 year
CREATE MATERIALIZED VIEW metrics_1h
WITH (timescaledb.continuous) AS
SELECT time_bucket('1 hour', time), AVG(value), MAX(value), MIN(value)
FROM metrics_raw GROUP BY 1;
SELECT add_retention_policy('metrics_1h', INTERVAL '365 days');
\`\`\`

## Monitoring & Maintenance

### Track Database Health

\`\`\`sql
-- TimescaleDB chunk info
SELECT * FROM timescaledb_information.chunks
WHERE hypertable_name = 'metrics'
ORDER BY range_start DESC;

-- Compression status
SELECT 
    hypertable_name,
    SUM(before_compression_total_bytes) as before,
    SUM(after_compression_total_bytes) as after,
    ROUND((1 - SUM(after_compression_total_bytes)::numeric / 
           SUM(before_compression_total_bytes)) * 100, 2) as compression_ratio
FROM timescaledb_information.compressed_chunk_stats
GROUP BY hypertable_name;
\`\`\`

### Alerting on Ingestion

\`\`\`sql
-- Monitor write rate
SELECT 
    time_bucket('5 minutes', time) as bucket,
    COUNT(*) as write_count
FROM metrics
WHERE time > NOW() - INTERVAL '1 hour'
GROUP BY bucket
ORDER BY bucket DESC;

-- Alert if writes drop
SELECT CASE 
    WHEN COUNT(*) < 1000 THEN 'ALERT: Low write rate'
    ELSE 'OK'
END as status
FROM metrics
WHERE time > NOW() - INTERVAL '5 minutes';
\`\`\`

## Summary Checklist

- [ ] Choose appropriate time granularity
- [ ] Use low-cardinality tags
- [ ] Batch writes (1000+ points)
- [ ] Always filter by time first
- [ ] Set up multi-resolution storage
- [ ] Configure retention policies
- [ ] Enable compression for old data
- [ ] Monitor chunk sizes and write rates
- [ ] Use continuous aggregates for dashboards
- [ ] Parallelize queries where possible
    `,
    quiz: [
      {
        question: 'Why should you avoid high-cardinality tags?',
        options: [
          'Tags cannot store large values',
          'Each unique tag combination creates index entries, bloating storage',
          'High cardinality slows write speed only',
          'Tags are limited to numeric values'
        ],
        correct: 1,
        explanation: 'Each unique tag combination creates series/index entries. User IDs or session IDs as tags create millions of series.'
      },
      {
        question: 'What is the benefit of multi-resolution storage?',
        options: [
          'It improves write speed',
          'It allows querying historical data at lower resolution without scanning raw data',
          'It provides better compression',
          'It enables real-time alerting'
        ],
        correct: 1,
        explanation: 'Multi-resolution stores raw data short-term and aggregated data long-term, making historical queries fast.'
      },
      {
        question: 'Why should time filters come first in queries?',
        options: [
          'It\'s a syntax requirement',
          'Time filters prune partitions/chunks before scanning, reducing data read',
          'It improves result accuracy',
          'Other filters don\'t work without time first'
        ],
        correct: 1,
        explanation: 'TSDBs partition by time. Time filters first allow the query engine to skip entire partitions.'
      },
      {
        question: 'What is the recommended approach for high-volume writes?',
        options: [
          'Write each point individually for consistency',
          'Batch multiple points together (1000+)',
          'Use synchronous connections only',
          'Disable indexes during writes'
        ],
        correct: 1,
        explanation: 'Batching writes reduces overhead and can improve throughput by 10-100x.'
      },
      {
        question: 'When should you use a wide table schema?',
        options: [
          'When metrics are written at different times',
          'When metrics are always written together and queried together',
          'When you have high-cardinality data',
          'When using InfluxDB only'
        ],
        correct: 1,
        explanation: 'Wide tables (multiple metrics per row) are efficient when metrics are correlated and written/queried together.'
      }
    ]
  }
];

export default timeSeriesTopics;
