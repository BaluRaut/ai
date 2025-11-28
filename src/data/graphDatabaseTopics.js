// Graph Database Topics - Neo4j and Cypher Query Language

export const graphDatabaseTopics = [
  {
    id: 'graph-db-intro',
    title: 'Introduction to Graph Databases',
    category: 'Graph Databases',
    difficulty: 'beginner',
    description: 'Learn what graph databases are and when to use them',
    content: `
# Introduction to Graph Databases

Graph databases are designed to store and query highly connected data efficiently. Unlike relational databases that use tables and joins, graph databases use nodes, relationships, and properties.

## What is a Graph Database?

A graph database stores data in a graph structure:
- **Nodes** represent entities (people, products, locations)
- **Relationships** connect nodes (KNOWS, PURCHASED, LOCATED_IN)
- **Properties** store attributes on nodes and relationships

## When to Use Graph Databases

Graph databases excel at:
- **Social Networks** - Friends, followers, connections
- **Recommendation Engines** - "People who bought X also bought Y"
- **Fraud Detection** - Finding suspicious patterns
- **Knowledge Graphs** - Complex interconnected information
- **Network & IT Operations** - Dependencies, impact analysis
- **Identity & Access Management** - Permissions, roles, groups

## Graph vs Relational

| Aspect | Relational DB | Graph DB |
|--------|---------------|----------|
| Data Model | Tables, rows | Nodes, relationships |
| Relationships | JOINs (computed) | First-class citizens |
| Query Performance | Degrades with JOINs | Consistent |
| Schema | Rigid | Flexible |
| Use Case | Structured data | Connected data |

## Popular Graph Databases

1. **Neo4j** - Most popular, uses Cypher query language
2. **Amazon Neptune** - AWS managed graph database
3. **JanusGraph** - Open-source, distributed
4. **ArangoDB** - Multi-model (graph + document)
5. **OrientDB** - Multi-model database

## Key Concepts

### Nodes
Nodes are the entities in your graph:
\`\`\`
(Person)
(Company)
(Product)
\`\`\`

### Relationships
Relationships connect nodes and have direction:
\`\`\`
(Person)-[:WORKS_AT]->(Company)
(Person)-[:PURCHASED]->(Product)
(Person)-[:KNOWS]->(Person)
\`\`\`

### Properties
Both nodes and relationships can have properties:
\`\`\`
(Person {name: "Alice", age: 30})
-[:WORKS_AT {since: 2020, role: "Developer"}]->
\`\`\`

### Labels
Labels categorize nodes:
\`\`\`
(alice:Person:Employee)
\`\`\`
    `,
    quiz: [
      {
        question: 'What are the three main components of a graph database?',
        options: [
          'Tables, rows, columns',
          'Nodes, relationships, properties',
          'Documents, collections, indexes',
          'Keys, values, buckets'
        ],
        correct: 1,
        explanation: 'Graph databases store data using nodes (entities), relationships (connections), and properties (attributes).'
      },
      {
        question: 'Which scenario is BEST suited for a graph database?',
        options: [
          'Storing simple user profiles',
          'Financial transaction logs',
          'Social network friend recommendations',
          'Product inventory tracking'
        ],
        correct: 2,
        explanation: 'Graph databases excel at traversing relationships, making them ideal for social networks and recommendations.'
      },
      {
        question: 'What is a key advantage of graph databases over relational databases for connected data?',
        options: [
          'Better ACID compliance',
          'Simpler schema design',
          'Consistent query performance regardless of relationship depth',
          'Lower storage requirements'
        ],
        correct: 2,
        explanation: 'Graph databases maintain consistent performance when traversing relationships, while SQL JOINs become slower with more tables.'
      },
      {
        question: 'What is the query language used by Neo4j?',
        options: [
          'SQL',
          'GraphQL',
          'Cypher',
          'Gremlin'
        ],
        correct: 2,
        explanation: 'Neo4j uses Cypher, a declarative query language specifically designed for graph pattern matching.'
      },
      {
        question: 'In graph database terminology, what are "labels" used for?',
        options: [
          'Naming relationships',
          'Categorizing nodes',
          'Storing properties',
          'Creating indexes'
        ],
        correct: 1,
        explanation: 'Labels are used to categorize nodes into groups like Person, Company, or Product.'
      }
    ]
  },
  {
    id: 'cypher-basics',
    title: 'Cypher Query Language Basics',
    category: 'Graph Databases',
    difficulty: 'beginner',
    description: 'Learn the fundamentals of Cypher, Neo4j\'s query language',
    hasPlayground: true,
    playgroundType: 'neo4j',
    content: `
# Cypher Query Language Basics

Cypher is Neo4j's declarative query language, designed to be readable and intuitive for working with graph patterns.

## ASCII Art Syntax

Cypher uses an ASCII art style to represent patterns:

\`\`\`cypher
// Node
(n)

// Node with label
(p:Person)

// Relationship
-[r:KNOWS]->

// Pattern
(a:Person)-[:KNOWS]->(b:Person)
\`\`\`

## MATCH - Finding Data

MATCH is used to find patterns in the graph:

\`\`\`cypher
// Find all Person nodes
MATCH (p:Person)
RETURN p

// Find persons named Alice
MATCH (p:Person {name: 'Alice'})
RETURN p

// Find persons and their friends
MATCH (p:Person)-[:KNOWS]->(friend:Person)
RETURN p.name, friend.name
\`\`\`

## RETURN - Specifying Output

RETURN defines what data to retrieve:

\`\`\`cypher
// Return entire nodes
MATCH (p:Person)
RETURN p

// Return specific properties
MATCH (p:Person)
RETURN p.name, p.age

// Return with aliases
MATCH (p:Person)
RETURN p.name AS personName

// Return expressions
MATCH (p:Person)
RETURN p.name, p.age * 12 AS ageInMonths
\`\`\`

## WHERE - Filtering Results

WHERE adds conditions to your queries:

\`\`\`cypher
// Simple comparison
MATCH (p:Person)
WHERE p.age > 30
RETURN p.name

// Multiple conditions
MATCH (p:Person)
WHERE p.age > 25 AND p.age < 40
RETURN p.name

// Pattern conditions
MATCH (p:Person)
WHERE (p)-[:WORKS_AT]->(:Company {name: 'TechCorp'})
RETURN p.name

// String matching
MATCH (p:Person)
WHERE p.name STARTS WITH 'A'
RETURN p
\`\`\`

## Relationship Patterns

Various relationship patterns:

\`\`\`cypher
// Outgoing relationship
(a)-[:KNOWS]->(b)

// Incoming relationship
(a)<-[:KNOWS]-(b)

// Either direction
(a)-[:KNOWS]-(b)

// Variable-length paths
(a)-[:KNOWS*2]->(b)      // Exactly 2 hops
(a)-[:KNOWS*1..3]->(b)   // 1 to 3 hops
(a)-[:KNOWS*]->(b)       // Any number of hops

// Multiple relationship types
(a)-[:KNOWS|FOLLOWS]->(b)
\`\`\`

## Try It!

Use the Neo4j Playground above to practice these queries with the sample data.
    `,
    quiz: [
      {
        question: 'What is the correct Cypher syntax to find all Person nodes?',
        options: [
          'SELECT * FROM Person',
          'MATCH (p:Person) RETURN p',
          'FIND Person RETURN ALL',
          'GET (Person)'
        ],
        correct: 1,
        explanation: 'Cypher uses MATCH to find patterns and RETURN to specify output. The colon (:) indicates a label.'
      },
      {
        question: 'How do you represent an outgoing relationship in Cypher?',
        options: [
          '(a)-->(b)',
          '(a)-[]->(b)',
          '(a)->[:REL]->(b)',
          '(a)-[:REL]->(b)'
        ],
        correct: 3,
        explanation: 'Relationships use the pattern -[:TYPE]-> with square brackets for the relationship and -> for direction.'
      },
      {
        question: 'Which clause is used to filter results in Cypher?',
        options: [
          'FILTER',
          'WHERE',
          'HAVING',
          'CONDITION'
        ],
        correct: 1,
        explanation: 'WHERE is used in Cypher to add conditions and filter results, similar to SQL.'
      },
      {
        question: 'How do you match a variable-length path of 1 to 3 hops in Cypher?',
        options: [
          '(a)-[:REL]..3->(b)',
          '(a)-[:REL*1..3]->(b)',
          '(a)-[:REL{1,3}]->(b)',
          '(a)-[:REL(1-3)]->(b)'
        ],
        correct: 1,
        explanation: 'Variable-length paths use the * syntax with range: *1..3 means 1 to 3 hops.'
      },
      {
        question: 'What does this pattern match: (p:Person {name: "Alice"})?',
        options: [
          'All persons',
          'A person node with name property equal to "Alice"',
          'A node labeled Alice',
          'A relationship named Alice'
        ],
        correct: 1,
        explanation: 'Properties in curly braces {} after the label act as inline WHERE conditions for filtering.'
      }
    ]
  },
  {
    id: 'cypher-create-update',
    title: 'Creating and Updating Data in Cypher',
    category: 'Graph Databases',
    difficulty: 'intermediate',
    description: 'Learn to create nodes, relationships, and update graph data',
    hasPlayground: true,
    playgroundType: 'neo4j',
    content: `
# Creating and Updating Data in Cypher

Learn how to create nodes, relationships, and modify existing graph data.

## CREATE - Adding New Data

### Creating Nodes

\`\`\`cypher
// Create a simple node
CREATE (n:Person)
RETURN n

// Create node with properties
CREATE (p:Person {name: 'David', age: 28})
RETURN p

// Create node with multiple labels
CREATE (e:Person:Employee {name: 'Eve', department: 'Engineering'})
RETURN e
\`\`\`

### Creating Relationships

\`\`\`cypher
// Create relationship between new nodes
CREATE (a:Person {name: 'Alice'})-[:KNOWS]->(b:Person {name: 'Bob'})
RETURN a, b

// Create relationship between existing nodes
MATCH (a:Person {name: 'Alice'}), (b:Person {name: 'Bob'})
CREATE (a)-[:FRIENDS_WITH {since: 2023}]->(b)

// Create multiple relationships
MATCH (p:Person {name: 'Alice'})
MATCH (c1:Company {name: 'TechCorp'})
MATCH (c2:Company {name: 'DataInc'})
CREATE (p)-[:INTERVIEWED_AT]->(c1)
CREATE (p)-[:INTERVIEWED_AT]->(c2)
\`\`\`

## MERGE - Create If Not Exists

MERGE ensures a pattern exists, creating it only if needed:

\`\`\`cypher
// Create node if it doesn't exist
MERGE (p:Person {name: 'Charlie'})
RETURN p

// With ON CREATE and ON MATCH actions
MERGE (p:Person {name: 'Charlie'})
ON CREATE SET p.created = timestamp()
ON MATCH SET p.lastSeen = timestamp()
RETURN p

// Merge relationship
MATCH (a:Person {name: 'Alice'})
MATCH (b:Person {name: 'Bob'})
MERGE (a)-[:KNOWS]->(b)
\`\`\`

## SET - Updating Properties

\`\`\`cypher
// Set single property
MATCH (p:Person {name: 'Alice'})
SET p.age = 31
RETURN p

// Set multiple properties
MATCH (p:Person {name: 'Alice'})
SET p.age = 31, p.city = 'Seattle'
RETURN p

// Replace all properties
MATCH (p:Person {name: 'Alice'})
SET p = {name: 'Alice', age: 31, city: 'Seattle'}
RETURN p

// Add properties (keep existing)
MATCH (p:Person {name: 'Alice'})
SET p += {email: 'alice@example.com'}
RETURN p

// Add label
MATCH (p:Person {name: 'Alice'})
SET p:Employee
RETURN p
\`\`\`

## REMOVE - Deleting Properties and Labels

\`\`\`cypher
// Remove property
MATCH (p:Person {name: 'Alice'})
REMOVE p.age
RETURN p

// Remove label
MATCH (p:Person:Employee {name: 'Alice'})
REMOVE p:Employee
RETURN p
\`\`\`

## DELETE - Removing Nodes and Relationships

\`\`\`cypher
// Delete relationship
MATCH (a:Person)-[r:KNOWS]->(b:Person)
WHERE a.name = 'Alice' AND b.name = 'Bob'
DELETE r

// Delete node (must have no relationships)
MATCH (p:Person {name: 'TestUser'})
DELETE p

// DETACH DELETE - delete node and all relationships
MATCH (p:Person {name: 'TestUser'})
DETACH DELETE p

// Delete all nodes and relationships
MATCH (n)
DETACH DELETE n
\`\`\`

## Best Practices

1. **Use MERGE for idempotent operations** - Prevents duplicate nodes
2. **Always specify properties in MERGE** - Use unique identifiers
3. **Use DETACH DELETE for nodes** - Prevents orphaned relationships error
4. **Batch large deletes** - Use LIMIT to avoid memory issues

\`\`\`cypher
// Batched delete example
MATCH (p:TempPerson)
WITH p LIMIT 1000
DETACH DELETE p
RETURN count(*)
\`\`\`
    `,
    quiz: [
      {
        question: 'What is the difference between CREATE and MERGE?',
        options: [
          'CREATE is faster than MERGE',
          'MERGE only creates data if it doesn\'t already exist',
          'CREATE can only create nodes, MERGE can create relationships',
          'There is no difference'
        ],
        correct: 1,
        explanation: 'MERGE checks if the pattern exists first, only creating it if not found, making operations idempotent.'
      },
      {
        question: 'What happens if you try to DELETE a node that has relationships?',
        options: [
          'The relationships are automatically deleted',
          'An error is thrown',
          'The node becomes orphaned',
          'The relationships are converted to properties'
        ],
        correct: 1,
        explanation: 'Neo4j prevents deleting nodes with relationships. Use DETACH DELETE to remove the node and its relationships.'
      },
      {
        question: 'How do you add a property to a node without removing existing properties?',
        options: [
          'SET p.newProp = value',
          'SET p = {newProp: value}',
          'ADD p.newProp = value',
          'INSERT p.newProp = value'
        ],
        correct: 0,
        explanation: 'SET p.property = value adds/updates just that property. SET p = {...} replaces ALL properties.'
      },
      {
        question: 'Which MERGE clause sets properties only when a node is first created?',
        options: [
          'ON NEW SET',
          'ON CREATE SET',
          'ON INSERT SET',
          'ON FIRST SET'
        ],
        correct: 1,
        explanation: 'ON CREATE SET runs only when MERGE creates a new node. ON MATCH SET runs when it finds existing.'
      },
      {
        question: 'How do you remove a label from a node?',
        options: [
          'DELETE p:LabelName',
          'REMOVE p:LabelName',
          'SET p:-LabelName',
          'UNLABEL p:LabelName'
        ],
        correct: 1,
        explanation: 'REMOVE is used to remove properties and labels from nodes.'
      }
    ]
  },
  {
    id: 'cypher-advanced',
    title: 'Advanced Cypher Queries',
    category: 'Graph Databases',
    difficulty: 'advanced',
    description: 'Master complex queries, aggregations, and graph algorithms',
    hasPlayground: true,
    playgroundType: 'neo4j',
    content: `
# Advanced Cypher Queries

Learn powerful Cypher features for complex graph operations.

## Aggregation Functions

\`\`\`cypher
// Count
MATCH (p:Person)
RETURN count(p) AS totalPersons

// Collect into list
MATCH (p:Person)-[:WORKS_AT]->(c:Company)
RETURN c.name, collect(p.name) AS employees

// Sum, Avg, Min, Max
MATCH (p:Person)
RETURN avg(p.age) AS avgAge,
       min(p.age) AS youngest,
       max(p.age) AS oldest

// Count distinct
MATCH (p:Person)-[:PURCHASED]->(product)
RETURN count(DISTINCT product) AS uniqueProducts
\`\`\`

## WITH - Chaining Query Parts

WITH passes results between query parts:

\`\`\`cypher
// Filter aggregated results
MATCH (p:Person)-[:PURCHASED]->(product)
WITH p, count(product) AS purchaseCount
WHERE purchaseCount > 5
RETURN p.name, purchaseCount

// Multiple aggregation levels
MATCH (p:Person)-[:LIVES_IN]->(city)
WITH city, count(p) AS population
WITH avg(population) AS avgPop
RETURN avgPop
\`\`\`

## UNWIND - Expanding Lists

\`\`\`cypher
// Create nodes from list
UNWIND ['Alice', 'Bob', 'Charlie'] AS name
CREATE (p:Person {name: name})
RETURN p

// Process list properties
MATCH (p:Person)
WHERE p.skills IS NOT NULL
UNWIND p.skills AS skill
RETURN skill, collect(p.name) AS peopleWithSkill
\`\`\`

## Path Finding

\`\`\`cypher
// Shortest path
MATCH path = shortestPath(
  (a:Person {name: 'Alice'})-[*]-(b:Person {name: 'Charlie'})
)
RETURN path, length(path) AS hops

// All shortest paths
MATCH path = allShortestPaths(
  (a:Person {name: 'Alice'})-[*]-(b:Person {name: 'Charlie'})
)
RETURN path

// Variable-length with predicates
MATCH path = (start:Person)-[:KNOWS*1..5]->(end:Person)
WHERE start.name = 'Alice'
  AND all(r IN relationships(path) WHERE r.strength > 5)
RETURN path
\`\`\`

## Pattern Comprehension

\`\`\`cypher
// Collect related data inline
MATCH (p:Person)
RETURN p.name,
       [(p)-[:KNOWS]->(friend) | friend.name] AS friends,
       [(p)-[:WORKS_AT]->(c) | c.name] AS companies

// With filtering
MATCH (p:Person)
RETURN p.name,
       [(p)-[:KNOWS]->(f:Person) WHERE f.age > 30 | f.name] AS olderFriends
\`\`\`

## CASE Expressions

\`\`\`cypher
// Simple CASE
MATCH (p:Person)
RETURN p.name,
       CASE p.age
         WHEN 18 THEN 'Adult'
         WHEN 65 THEN 'Senior'
         ELSE 'Other'
       END AS ageCategory

// Generic CASE
MATCH (p:Person)
RETURN p.name,
       CASE
         WHEN p.age < 18 THEN 'Minor'
         WHEN p.age < 65 THEN 'Adult'
         ELSE 'Senior'
       END AS category
\`\`\`

## Subqueries

\`\`\`cypher
// EXISTS subquery
MATCH (p:Person)
WHERE EXISTS {
  MATCH (p)-[:WORKS_AT]->(:Company {name: 'TechCorp'})
}
RETURN p.name

// CALL subquery (Neo4j 4.0+)
MATCH (p:Person)
CALL {
  WITH p
  MATCH (p)-[:PURCHASED]->(product)
  RETURN count(product) AS purchases
}
RETURN p.name, purchases
ORDER BY purchases DESC
\`\`\`

## Ordering and Pagination

\`\`\`cypher
// Order by
MATCH (p:Person)
RETURN p.name, p.age
ORDER BY p.age DESC

// Pagination
MATCH (p:Person)
RETURN p.name
ORDER BY p.name
SKIP 10
LIMIT 10

// Top N per group
MATCH (c:Company)<-[:WORKS_AT]-(p:Person)
WITH c, p
ORDER BY p.salary DESC
WITH c, collect(p)[0..3] AS topEarners
RETURN c.name, topEarners
\`\`\`

## FOREACH - Iterating Updates

\`\`\`cypher
// Update multiple nodes
MATCH path = (start)-[:FOLLOWS*]->(end)
WHERE start.name = 'Alice' AND end.name = 'Dave'
FOREACH (node IN nodes(path) |
  SET node.visited = true
)

// Create from list
FOREACH (name IN ['Alice', 'Bob', 'Charlie'] |
  MERGE (p:Person {name: name})
)
\`\`\`
    `,
    quiz: [
      {
        question: 'What does the collect() function do in Cypher?',
        options: [
          'Counts the number of results',
          'Aggregates values into a list',
          'Joins strings together',
          'Finds unique values'
        ],
        correct: 1,
        explanation: 'collect() aggregates values into a list, useful for grouping related data together.'
      },
      {
        question: 'What is the purpose of the WITH clause?',
        options: [
          'To declare variables',
          'To pass results between query parts for chaining',
          'To create temporary nodes',
          'To import data'
        ],
        correct: 1,
        explanation: 'WITH allows you to chain query parts together, passing results from one to the next for further processing.'
      },
      {
        question: 'How do you find the shortest path between two nodes in Cypher?',
        options: [
          'MATCH path = findPath((a)-[*]-(b))',
          'MATCH path = shortestPath((a)-[*]-(b))',
          'FIND SHORTEST (a) TO (b)',
          'PATH SHORTEST (a)-[*]-(b)'
        ],
        correct: 1,
        explanation: 'shortestPath() is a built-in function that finds the shortest path between two nodes.'
      },
      {
        question: 'What does UNWIND do in Cypher?',
        options: [
          'Reverses a path',
          'Expands a list into individual rows',
          'Removes duplicates',
          'Sorts results in reverse order'
        ],
        correct: 1,
        explanation: 'UNWIND takes a list and expands it into individual rows, useful for processing list data.'
      },
      {
        question: 'How do you implement pagination in Cypher?',
        options: [
          'PAGE 1 SIZE 10',
          'LIMIT 10 OFFSET 10',
          'SKIP 10 LIMIT 10',
          'FETCH FIRST 10 ROWS'
        ],
        correct: 2,
        explanation: 'Cypher uses SKIP to offset results and LIMIT to restrict the number returned.'
      }
    ]
  },
  {
    id: 'graph-modeling',
    title: 'Graph Data Modeling',
    category: 'Graph Databases',
    difficulty: 'intermediate',
    description: 'Learn best practices for designing graph data models',
    content: `
# Graph Data Modeling

Designing an effective graph model is crucial for query performance and maintainability.

## Core Principles

### 1. Model for Queries

Design your model based on how you'll query the data:

\`\`\`
// If you need: "Find friends of friends"
// Model: (Person)-[:KNOWS]->(Person)

// If you need: "Find all events a person attended"
// Model: (Person)-[:ATTENDED]->(Event)
\`\`\`

### 2. Relationships are First-Class Citizens

Unlike relational databases, relationships in Neo4j:
- Can have properties
- Are stored efficiently
- Are traversed in constant time

\`\`\`cypher
// Rich relationship
(alice)-[:RATED {score: 5, date: date()}]->(movie)
\`\`\`

### 3. Use Labels for Categories

Labels help organize and index nodes:

\`\`\`cypher
// Multiple labels for flexibility
(bob:Person:Employee:Developer)

// Query specific category
MATCH (d:Developer)-[:WORKS_ON]->(p:Project)
RETURN d, p
\`\`\`

## Common Patterns

### Hub and Spoke

Central node connected to many related nodes:

\`\`\`
        (Address)
            ↑
(Email) ← (Person) → (Phone)
            ↓
        (Company)
\`\`\`

### Intermediate Nodes

Convert many-to-many relationships into richer structures:

\`\`\`
// Simple (loses context)
(Person)-[:ATTENDED]->(Event)

// With intermediate node (preserves context)
(Person)-[:HAS_TICKET]->(Ticket)-[:FOR]->(Event)
                           ↓
                        {seat: "A12", price: 50}
\`\`\`

### Versioning

Track changes over time:

\`\`\`cypher
(Person)-[:WORKED_AT {from: 2015, to: 2020}]->(Company1)
(Person)-[:WORKS_AT {from: 2020}]->(Company2)
\`\`\`

### Hyperedges

Model multi-way relationships:

\`\`\`
// Meeting between multiple people about a topic
(Meeting {date: date()})
   ↑
[:ATTENDED]
   ↓
(Person)

(Meeting)-[:ABOUT]->(Topic)
(Meeting)-[:AT]->(Location)
\`\`\`

## Anti-Patterns to Avoid

### 1. Dense Nodes (Supernodes)

Nodes with millions of relationships cause performance issues:

\`\`\`
// Problem: Country with millions of citizens
(usa:Country)<-[:LIVES_IN]-(person) // millions!

// Solution: Add intermediate layer
(usa:Country)-[:HAS_STATE]->(state)-[:HAS_CITY]->(city)<-[:LIVES_IN]-(person)
\`\`\`

### 2. Using Nodes Instead of Properties

\`\`\`cypher
// Anti-pattern
(Person)-[:HAS_AGE]->(Age {value: 30})

// Better
(Person {age: 30})
\`\`\`

### 3. Generic Relationship Types

\`\`\`cypher
// Anti-pattern
(a)-[:RELATED_TO {type: 'friend'}]->(b)

// Better
(a)-[:FRIEND]->(b)
(a)-[:COLLEAGUE]->(b)
\`\`\`

## Schema Considerations

### Uniqueness Constraints

\`\`\`cypher
CREATE CONSTRAINT person_email IF NOT EXISTS
FOR (p:Person)
REQUIRE p.email IS UNIQUE
\`\`\`

### Node Key (Composite Uniqueness)

\`\`\`cypher
CREATE CONSTRAINT person_name_dob IF NOT EXISTS
FOR (p:Person)
REQUIRE (p.name, p.dateOfBirth) IS NODE KEY
\`\`\`

### Indexes

\`\`\`cypher
// Single property index
CREATE INDEX person_name IF NOT EXISTS
FOR (p:Person) ON (p.name)

// Composite index
CREATE INDEX person_location IF NOT EXISTS
FOR (p:Person) ON (p.city, p.country)
\`\`\`

## Refactoring Graphs

Graphs can evolve more easily than relational schemas:

\`\`\`cypher
// Add label to existing nodes
MATCH (p:Person)
WHERE p.type = 'customer'
SET p:Customer
REMOVE p.type

// Convert property to relationship
MATCH (p:Person)
WHERE p.company IS NOT NULL
MERGE (c:Company {name: p.company})
MERGE (p)-[:WORKS_AT]->(c)
REMOVE p.company
\`\`\`
    `,
    quiz: [
      {
        question: 'What is a "supernode" and why is it problematic?',
        options: [
          'A node with many labels, causing confusion',
          'A node with millions of relationships, causing performance issues',
          'A node without any relationships',
          'A node that acts as an index'
        ],
        correct: 1,
        explanation: 'Supernodes have too many relationships, making traversals slow. Use intermediate nodes to distribute connections.'
      },
      {
        question: 'When should you use an intermediate node pattern?',
        options: [
          'When nodes have too many properties',
          'When you need to store information about a relationship context',
          'When labels are not supported',
          'When creating indexes'
        ],
        correct: 1,
        explanation: 'Intermediate nodes allow storing rich context about connections, like a Ticket between Person and Event.'
      },
      {
        question: 'What is the best practice for relationship types?',
        options: [
          'Use generic types with properties for specifics',
          'Use specific, meaningful relationship types',
          'Always use bidirectional relationships',
          'Limit to 5 relationship types'
        ],
        correct: 1,
        explanation: 'Specific relationship types (:FRIEND, :COLLEAGUE) are more efficient and clearer than generic types with properties.'
      },
      {
        question: 'When should a value be a property vs a separate node?',
        options: [
          'Always use nodes for better performance',
          'Use properties for simple values, nodes when the value has its own relationships',
          'Properties for text, nodes for numbers',
          'Always use properties to save space'
        ],
        correct: 1,
        explanation: 'Simple values like age or name should be properties. Create nodes when the value has its own relationships or complex structure.'
      },
      {
        question: 'What is the main benefit of designing your graph model based on queries?',
        options: [
          'Smaller database size',
          'Easier backup and restore',
          'Optimized query performance',
          'Better security'
        ],
        correct: 2,
        explanation: 'Query-driven modeling ensures your graph structure supports efficient traversals for your use cases.'
      }
    ]
  }
];

export default graphDatabaseTopics;
