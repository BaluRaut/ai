export const visualization = {
  id: 'data-visualization',
  title: 'Data Visualization',
  description: 'Master data visualization with Matplotlib and Seaborn for stunning charts and insights.',
  difficulty: 'intermediate',
  content: {
    overview: `Data visualization transforms raw data into visual insights that are easy to understand and communicate. Python offers powerful libraries for creating professional visualizations.

**Matplotlib:** The foundational plotting library for Python - highly customizable

**Seaborn:** Built on Matplotlib, provides beautiful statistical visualizations with less code

**Why Visualization Matters:**
✓ Reveals patterns and trends invisible in raw data
✓ Communicates insights effectively to stakeholders
✓ Essential for exploratory data analysis (EDA)
✓ Makes data-driven decisions more accessible

**Common Plot Types:**
• Line plots - Trends over time
• Bar charts - Comparisons between categories
• Scatter plots - Relationships between variables
• Histograms - Distribution of data
• Heatmaps - Correlation matrices
• Box plots - Statistical distributions`,

    keyPoints: [
      'Matplotlib is the foundation - Seaborn builds on it for easier statistical plots',
      'Use plt.figure() and plt.subplot() to create multiple plots in one figure',
      'Seaborn automatically creates more beautiful plots with better default styling',
      'Always label axes, add titles, and include legends for clarity',
      'Choose the right plot type for your data - line for trends, scatter for correlation',
      'Use color strategically - colormaps, palettes, and custom colors convey meaning'
    ],

    useCases: [
      {
        title: 'Business Analytics',
        description: 'Visualize sales trends, revenue, and KPIs for stakeholder presentations',
        example: 'Sales dashboards, financial reports, marketing campaign performance'
      },
      {
        title: 'Scientific Research',
        description: 'Plot experimental results, statistical distributions, and correlations',
        example: 'Research papers, lab reports, hypothesis testing visualizations'
      },
      {
        title: 'Machine Learning',
        description: 'Visualize model performance, feature importance, and decision boundaries',
        example: 'Confusion matrices, ROC curves, learning curves, feature correlations'
      },
      {
        title: 'Exploratory Data Analysis',
        description: 'Discover patterns, outliers, and relationships in datasets',
        example: 'Distribution plots, pair plots, correlation heatmaps'
      },
      {
        title: 'Time Series Analysis',
        description: 'Track trends, seasonality, and anomalies over time',
        example: 'Stock prices, weather data, website traffic, sensor readings'
      },
      {
        title: 'Statistical Analysis',
        description: 'Visualize statistical relationships and probability distributions',
        example: 'Regression plots, distribution fits, confidence intervals'
      }
    ],

    dos: [
      '✓ Always label axes with units and meaningful names',
      '✓ Add informative titles that explain what the plot shows',
      '✓ Use legends when plotting multiple series',
      '✓ Choose appropriate plot types for your data',
      '✓ Use consistent color schemes across related plots',
      '✓ Save plots in vector formats (PDF, SVG) for publications'
    ],

    donts: [
      '✗ Don\'t use 3D plots unless absolutely necessary (hard to read)',
      '✗ Don\'t overuse colors - keep it simple and meaningful',
      '✗ Don\'t create plots without labels - they become meaningless',
      '✗ Don\'t use pie charts for more than 5-6 categories',
      '✗ Don\'t ignore aspect ratios - distorted plots mislead',
      '✗ Don\'t use default figure sizes for presentations - make them larger'
    ],

    bestPractices: [
      'Start with Seaborn for statistical plots, use Matplotlib for fine-tuning',
      'Use plt.style.use() to set consistent styling across all plots',
      'Set figure size with plt.figure(figsize=(width, height)) for readability',
      'Use plt.tight_layout() to prevent label overlap',
      'Save plots with high DPI for presentations: plt.savefig(..., dpi=300)',
      'Use color-blind friendly palettes: sns.color_palette("colorblind")'
    ],

    cheatsheet: `
# Matplotlib & Seaborn Cheatsheet

## Importing
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

## Figure Setup
plt.figure(figsize=(10, 6))          # Set figure size
plt.style.use('seaborn-v0_8')        # Use style
sns.set_palette("husl")              # Set color palette

## Basic Plots - Matplotlib
plt.plot(x, y)                       # Line plot
plt.scatter(x, y)                    # Scatter plot
plt.bar(x, y)                        # Bar chart
plt.hist(data, bins=20)              # Histogram
plt.boxplot(data)                    # Box plot
plt.pie(sizes, labels=labels)        # Pie chart

## Customization
plt.title('Title')                   # Add title
plt.xlabel('X Label')                # X-axis label
plt.ylabel('Y Label')                # Y-axis label
plt.legend()                         # Add legend
plt.grid(True)                       # Show grid
plt.xlim(0, 10)                      # Set x limits
plt.ylim(0, 100)                     # Set y limits

## Multiple Plots
fig, axes = plt.subplots(2, 2)       # 2x2 grid of plots
axes[0, 0].plot(x, y)                # Plot in first cell
plt.tight_layout()                   # Auto-adjust spacing

## Seaborn - Statistical Plots
sns.lineplot(data=df, x='x', y='y')  # Line plot
sns.scatterplot(x=x, y=y, hue=z)     # Scatter with color
sns.barplot(data=df, x='cat', y='val') # Bar plot
sns.histplot(data, bins=20, kde=True)  # Histogram with KDE
sns.boxplot(data=df, x='cat', y='val') # Box plot
sns.violinplot(x='cat', y='val', data=df) # Violin plot
sns.heatmap(corr_matrix, annot=True)   # Heatmap with values
sns.pairplot(df)                     # Pair plot matrix

## Regression & Distribution
sns.regplot(x=x, y=y)                # Scatter with regression
sns.lmplot(x='x', y='y', data=df)    # Regression plot (FacetGrid)
sns.distplot(data)                   # Distribution (DEPRECATED)
sns.kdeplot(data)                    # Kernel density

## Categorical Plots
sns.countplot(x='category', data=df) # Count plot
sns.stripplot(x='cat', y='val', data=df) # Strip plot
sns.swarmplot(x='cat', y='val', data=df) # Swarm plot

## Customization - Seaborn
sns.set_style("whitegrid")           # Set style
sns.set_context("talk")              # Set context (paper, notebook, talk, poster)
sns.set_palette("Set2")              # Set color palette
sns.despine()                        # Remove top/right spines

## Saving Figures
plt.savefig('plot.png')              # Save as PNG
plt.savefig('plot.pdf')              # Save as PDF (vector)
plt.savefig('plot.png', dpi=300, bbox_inches='tight') # High quality

## Color
plt.plot(x, y, color='red')          # Named color
plt.plot(x, y, c='#FF5733')          # Hex color
plt.plot(x, y, c=(0.2, 0.4, 0.6))    # RGB tuple
cmap = plt.cm.viridis                # Colormap
sns.color_palette("husl", 8)         # Seaborn palette

## Markers & Lines
plt.plot(x, y, marker='o')           # Circle markers
plt.plot(x, y, linestyle='--')       # Dashed line
plt.plot(x, y, 'ro-')                # Red circles with line
# Markers: 'o' circle, 's' square, '^' triangle, '*' star
# Lines: '-' solid, '--' dashed, ':' dotted, '-.' dash-dot

## Subplots
fig, (ax1, ax2) = plt.subplots(1, 2) # 1 row, 2 cols
ax1.plot(x, y1)
ax2.plot(x, y2)

## Annotations
plt.text(x, y, 'Label')              # Add text
plt.annotate('Point', xy=(x,y), 
             xytext=(x+1,y+1), 
             arrowprops=dict(arrowstyle='->')) # Arrow annotation

## 3D Plots (use sparingly)
from mpl_toolkits.mplot3d import Axes3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(x, y, z)
`,

    codeExamples: [
      {
        title: '1. Basic Line and Scatter Plots',
        explanation: `Line plots show trends over time. Scatter plots reveal relationships between variables. These are the most common visualization types.`,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.linspace(0, 10, 50)
y1 = np.sin(x)
y2 = np.cos(x)

# Create figure with custom size
plt.figure(figsize=(12, 5))

# Subplot 1: Line plot
plt.subplot(1, 2, 1)
plt.plot(x, y1, label='sin(x)', color='blue', linewidth=2)
plt.plot(x, y2, label='cos(x)', color='red', linewidth=2, linestyle='--')
plt.title('Trigonometric Functions', fontsize=14, fontweight='bold')
plt.xlabel('X values', fontsize=12)
plt.ylabel('Y values', fontsize=12)
plt.legend()
plt.grid(True, alpha=0.3)

# Subplot 2: Scatter plot
plt.subplot(1, 2, 2)
# Random data with correlation
x_scatter = np.random.randn(100)
y_scatter = 2 * x_scatter + np.random.randn(100) * 0.5

plt.scatter(x_scatter, y_scatter, c=x_scatter, 
            cmap='viridis', alpha=0.6, s=50)
plt.colorbar(label='X value')
plt.title('Scatter Plot with Color Gradient', fontsize=14, fontweight='bold')
plt.xlabel('X values', fontsize=12)
plt.ylabel('Y values', fontsize=12)
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()`,
        output: {
          description: 'Two side-by-side plots: Left shows smooth sine and cosine waves oscillating between -1 and 1. Right shows a scatter plot of 100 points with a positive correlation, colored by a gradient from purple to yellow (viridis colormap) with a colorbar.'
        }
      },
      {
        title: '2. Bar Charts and Histograms',
        explanation: `Bar charts compare categories. Histograms show distributions of continuous data. Essential for understanding data patterns.`,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Sample data for bar chart
categories = ['Python', 'Java', 'JavaScript', 'C++', 'Ruby']
popularity = [95, 78, 88, 65, 55]

# Data for histogram
data = np.random.normal(100, 15, 1000)  # Mean=100, std=15

plt.figure(figsize=(12, 5))

# Subplot 1: Bar chart
plt.subplot(1, 2, 1)
colors = ['#3776ab', '#f89820', '#f7df1e', '#00599c', '#cc342d']
bars = plt.bar(categories, popularity, color=colors, alpha=0.7, edgecolor='black')

# Add value labels on bars
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height,
             f'{height}%',
             ha='center', va='bottom', fontweight='bold')

plt.title('Programming Language Popularity', fontsize=14, fontweight='bold')
plt.ylabel('Popularity Score', fontsize=12)
plt.ylim(0, 110)
plt.grid(axis='y', alpha=0.3)

# Subplot 2: Histogram
plt.subplot(1, 2, 2)
plt.hist(data, bins=30, color='skyblue', edgecolor='black', alpha=0.7)
plt.axvline(data.mean(), color='red', linestyle='--', 
            linewidth=2, label=f'Mean: {data.mean():.1f}')
plt.axvline(np.median(data), color='green', linestyle='--', 
            linewidth=2, label=f'Median: {np.median(data):.1f}')

plt.title('Distribution of Test Scores', fontsize=14, fontweight='bold')
plt.xlabel('Score', fontsize=12)
plt.ylabel('Frequency', fontsize=12)
plt.legend()
plt.grid(axis='y', alpha=0.3)

plt.tight_layout()
plt.show()`,
        output: {
          description: 'Two side-by-side plots: Left shows a colorful bar chart comparing 5 programming languages with percentage labels on top of each bar (Python highest at 95%). Right shows a bell-shaped histogram of 1000 test scores with a red dashed line marking the mean (~100) and green dashed line for the median.'
        }
      },
      {
        title: '3. Seaborn Statistical Plots',
        explanation: `Seaborn makes statistical plotting easier with beautiful defaults. Perfect for exploratory data analysis.`,
        code: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Create sample dataset
np.random.seed(42)
df = pd.DataFrame({
    'Category': np.random.choice(['A', 'B', 'C'], 200),
    'Value1': np.random.normal(100, 15, 200),
    'Value2': np.random.normal(50, 10, 200),
    'Group': np.random.choice(['X', 'Y'], 200)
})

# Set style
sns.set_style("whitegrid")
plt.figure(figsize=(14, 10))

# 1. Box plot
plt.subplot(2, 2, 1)
sns.boxplot(data=df, x='Category', y='Value1', hue='Group', palette='Set2')
plt.title('Box Plot - Distribution by Category', fontsize=12, fontweight='bold')
plt.ylabel('Value 1')

# 2. Violin plot
plt.subplot(2, 2, 2)
sns.violinplot(data=df, x='Category', y='Value1', palette='muted')
plt.title('Violin Plot - Distribution Shape', fontsize=12, fontweight='bold')
plt.ylabel('Value 1')

# 3. Strip plot with swarm
plt.subplot(2, 2, 3)
sns.stripplot(data=df, x='Category', y='Value2', hue='Group', 
              palette='Dark2', alpha=0.5, dodge=True)
plt.title('Strip Plot - Individual Points', fontsize=12, fontweight='bold')
plt.ylabel('Value 2')

# 4. Count plot
plt.subplot(2, 2, 4)
sns.countplot(data=df, x='Category', hue='Group', palette='pastel')
plt.title('Count Plot - Frequency by Category', fontsize=12, fontweight='bold')
plt.ylabel('Count')

plt.tight_layout()
plt.show()`,
        output: {
          description: 'Four statistical plots in a 2x2 grid: Top-left shows box plots comparing values across categories A, B, C split by groups X and Y. Top-right shows violin plots displaying the distribution shape for each category. Bottom-left shows strip plots with individual data points. Bottom-right shows count plots indicating the frequency of each category by group.'
        }
      },
      {
        title: '4. Correlation Heatmap',
        explanation: `Heatmaps visualize correlation matrices - essential for understanding relationships between multiple variables in datasets.`,
        code: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Create sample dataset with correlations
np.random.seed(42)
data = {
    'Age': np.random.randint(20, 70, 100),
    'Income': np.random.randint(30000, 150000, 100),
    'Experience': np.random.randint(0, 40, 100),
    'Satisfaction': np.random.randint(1, 11, 100),
    'Hours_Worked': np.random.randint(35, 60, 100)
}
df = pd.DataFrame(data)

# Add some correlation
df['Income'] = df['Age'] * 1000 + df['Experience'] * 800 + np.random.randint(-5000, 5000, 100)
df['Satisfaction'] = 10 - (df['Hours_Worked'] - 40) / 5 + np.random.randn(100)

# Calculate correlation matrix
corr_matrix = df.corr()

plt.figure(figsize=(10, 8))

# Create heatmap
sns.heatmap(corr_matrix, 
            annot=True,           # Show correlation values
            fmt='.2f',            # Format to 2 decimals
            cmap='coolwarm',      # Color scheme
            center=0,             # Center colormap at 0
            square=True,          # Square cells
            linewidths=1,         # Lines between cells
            cbar_kws={'label': 'Correlation Coefficient'})

plt.title('Correlation Matrix Heatmap', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.show()

# Print strongest correlations
print("Strongest positive correlations:")
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.5:
            print(f"{corr_matrix.columns[i]} <-> {corr_matrix.columns[j]}: {corr_matrix.iloc[i, j]:.3f}")`,
        output: {
          description: 'A square heatmap with 5x5 cells showing correlations between Age, Income, Experience, Satisfaction, and Hours_Worked. Colors range from blue (negative correlation) through white (no correlation) to red (positive correlation). Each cell displays the correlation coefficient value. Strong correlations appear between Income-Age and Income-Experience (both positive, red cells).'
        }
      },
      {
        title: '5. Subplots and Multiple Visualizations',
        explanation: `Create dashboard-style layouts with multiple plots to tell a complete data story.`,
        code: `import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# Generate sample time series data
np.random.seed(42)
dates = np.arange('2024-01', '2024-12', dtype='datetime64[M]')
sales = 100 + np.cumsum(np.random.randn(11) * 5)
costs = 60 + np.cumsum(np.random.randn(11) * 3)
profit = sales - costs

# Create figure with custom grid
fig = plt.figure(figsize=(15, 10))
gs = fig.add_gridspec(3, 2, hspace=0.3, wspace=0.3)

# 1. Sales and Costs over time (spans 2 columns)
ax1 = fig.add_subplot(gs[0, :])
ax1.plot(dates, sales, marker='o', linewidth=2, label='Sales', color='green')
ax1.plot(dates, costs, marker='s', linewidth=2, label='Costs', color='red')
ax1.fill_between(dates, costs, sales, alpha=0.3, color='lightgreen')
ax1.set_title('Monthly Sales and Costs', fontsize=14, fontweight='bold')
ax1.set_ylabel('Amount ($1000s)')
ax1.legend()
ax1.grid(True, alpha=0.3)

# 2. Profit trend
ax2 = fig.add_subplot(gs[1, 0])
colors = ['green' if p > 0 else 'red' for p in profit]
ax2.bar(range(len(profit)), profit, color=colors, alpha=0.7, edgecolor='black')
ax2.axhline(y=0, color='black', linestyle='-', linewidth=0.5)
ax2.set_title('Monthly Profit', fontsize=12, fontweight='bold')
ax2.set_ylabel('Profit ($1000s)')
ax2.set_xlabel('Month')
ax2.grid(axis='y', alpha=0.3)

# 3. Profit distribution
ax3 = fig.add_subplot(gs[1, 1])
ax3.hist(profit, bins=8, color='skyblue', edgecolor='black', alpha=0.7)
mean_val = profit.mean()
ax3.axvline(mean_val, color='red', linestyle='--', linewidth=2, 
            label=f'Mean: {mean_val:.1f}k')
ax3.set_title('Profit Distribution', fontsize=12, fontweight='bold')
ax3.set_xlabel('Profit (in $1000s)')
ax3.set_ylabel('Frequency')
ax3.legend()
ax3.grid(axis='y', alpha=0.3)

# 4. Pie chart - Quarterly performance
ax4 = fig.add_subplot(gs[2, 0])
quarters = ['Q1', 'Q2', 'Q3', 'Q4']
q_sales = [sales[:3].sum(), sales[3:6].sum(), sales[6:9].sum(), sales[9:].sum()]
colors_pie = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99']
wedges, texts, autotexts = ax4.pie(q_sales, labels=quarters, autopct='%1.1f%%',
                                     colors=colors_pie, startangle=90)
ax4.set_title('Quarterly Sales Distribution', fontsize=12, fontweight='bold')

# 5. Summary stats table
ax5 = fig.add_subplot(gs[2, 1])
ax5.axis('off')
stats_data = [
    ['Metric', 'Value'],
    ['Total Sales', f'{sales.sum():.1f}k'],
    ['Total Costs', f'{costs.sum():.1f}k'],
    ['Total Profit', f'{profit.sum():.1f}k'],
    ['Avg Monthly Sales', f'{sales.mean():.1f}k'],
    ['Profit Margin', f'{(profit.sum()/sales.sum()*100):.1f}%']
]
table = ax5.table(cellText=stats_data, cellLoc='left', loc='center',
                  colWidths=[0.5, 0.5])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 2)
# Style header row
for i in range(2):
    table[(0, i)].set_facecolor('#4CAF50')
    table[(0, i)].set_text_props(weight='bold', color='white')

ax5.set_title('Summary Statistics', fontsize=12, fontweight='bold', pad=20)

plt.suptitle('2024 Business Performance Dashboard', 
             fontsize=16, fontweight='bold', y=0.98)
plt.show()`,
        output: {
          description: 'A comprehensive business dashboard with 5 visualizations: Top spans full width showing green line for sales and red line for costs over time with shaded profit area. Middle-left shows a bar chart of monthly profits (green for positive, red for negative). Middle-right displays a histogram of profit distribution with a red dashed mean line. Bottom-left shows a pie chart dividing sales into quarters (Q1-Q4). Bottom-right contains a summary statistics table with metrics like total sales, costs, profit, and profit margin.'
        }
      },
      {
        title: '6. Customization and Styling',
        explanation: `Make your plots publication-ready with custom styles, colors, and annotations.`,
        code: `import matplotlib.pyplot as plt
import numpy as np

# Sample data
x = np.linspace(0, 10, 100)
y1 = np.exp(-x/10) * np.cos(2*np.pi*x)
y2 = np.exp(-x/10)
y3 = -np.exp(-x/10)

# Create figure
fig, ax = plt.subplots(figsize=(12, 7))

# Plot with custom styling
ax.plot(x, y1, linewidth=2.5, color='#2E86AB', label='Damped Oscillation')
ax.fill_between(x, y2, y3, alpha=0.2, color='#A23B72', label='Envelope')
ax.plot(x, y2, '--', linewidth=1.5, color='#F18F01', label='Upper Bound')
ax.plot(x, y3, '--', linewidth=1.5, color='#F18F01', label='Lower Bound')

# Customize spines
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_linewidth(1.5)
ax.spines['bottom'].set_linewidth(1.5)

# Add grid with custom style
ax.grid(True, linestyle=':', alpha=0.6, color='gray', linewidth=0.8)

# Annotations
max_idx = np.argmax(y1)
ax.annotate(f'Peak: {y1[max_idx]:.3f}',
            xy=(x[max_idx], y1[max_idx]),
            xytext=(x[max_idx]+1, y1[max_idx]+0.2),
            arrowprops=dict(arrowstyle='->', color='red', lw=2),
            fontsize=12, fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor='yellow', alpha=0.7))

# Labels and title
ax.set_xlabel('Time (seconds)', fontsize=13, fontweight='bold')
ax.set_ylabel('Amplitude', fontsize=13, fontweight='bold')
ax.set_title('Damped Harmonic Oscillator', 
             fontsize=16, fontweight='bold', pad=20)

# Legend
ax.legend(loc='upper right', frameon=True, shadow=True, 
          fancybox=True, fontsize=11)

# Tick customization
ax.tick_params(axis='both', which='major', labelsize=11, 
               width=1.5, length=6)

# Add watermark
fig.text(0.95, 0.05, 'Data Visualization Demo', 
         fontsize=10, color='gray', alpha=0.5,
         ha='right', va='bottom', style='italic')

plt.tight_layout()
plt.show()

# Save with high quality
# plt.savefig('damped_oscillator.png', dpi=300, bbox_inches='tight')
# plt.savefig('damped_oscillator.pdf', bbox_inches='tight')  # Vector format`,
        output: {
          description: 'A beautifully customized plot showing a damped harmonic oscillation (blue curve) with upper and lower bounds (orange dashed lines) and a shaded envelope (pink area). The plot includes a red arrow pointing to the peak with an annotation in a yellow rounded box. The grid uses dotted lines, and there\'s a watermark in the bottom right saying "Data Visualization Demo".'
        }
      },
      {
        title: '7. Seaborn Regression and Distribution Plots',
        explanation: `Visualize relationships and distributions with Seaborn's powerful regression and distribution plotting functions.`,
        code: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Generate sample data with correlation
np.random.seed(42)
n = 100
df = pd.DataFrame({
    'Study_Hours': np.random.uniform(1, 10, n),
    'Sleep_Hours': np.random.uniform(4, 9, n),
    'Exercise_Hours': np.random.uniform(0, 3, n)
})

# Create test score based on other variables (with noise)
df['Test_Score'] = (5 * df['Study_Hours'] + 
                     2 * df['Sleep_Hours'] + 
                     3 * df['Exercise_Hours'] + 
                     np.random.normal(0, 5, n))
df['Test_Score'] = df['Test_Score'].clip(0, 100)

# Create figure
fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle('Student Performance Analysis', fontsize=16, fontweight='bold')

# 1. Regression plot - Study Hours vs Test Score
sns.regplot(data=df, x='Study_Hours', y='Test_Score', ax=axes[0, 0],
            scatter_kws={'alpha':0.6, 's':50}, 
            line_kws={'color':'red', 'linewidth':2})
axes[0, 0].set_title('Study Hours vs Test Score', fontsize=12, fontweight='bold')
axes[0, 0].set_xlabel('Study Hours per Day')
axes[0, 0].set_ylabel('Test Score')

# 2. KDE plot - Distribution of test scores
sns.kdeplot(data=df['Test_Score'], ax=axes[0, 1], fill=True, color='skyblue')
axes[0, 1].axvline(df['Test_Score'].mean(), color='red', linestyle='--', 
                    linewidth=2, label=f"Mean: {df['Test_Score'].mean():.1f}")
axes[0, 1].axvline(df['Test_Score'].median(), color='green', linestyle='--', 
                    linewidth=2, label=f"Median: {df['Test_Score'].median():.1f}")
axes[0, 1].set_title('Test Score Distribution (KDE)', fontsize=12, fontweight='bold')
axes[0, 1].set_xlabel('Test Score')
axes[0, 1].legend()

# 3. Joint plot style in subplot - Study vs Sleep
sns.scatterplot(data=df, x='Study_Hours', y='Sleep_Hours', 
                hue='Test_Score', size='Test_Score',
                palette='viridis', ax=axes[1, 0], alpha=0.7)
axes[1, 0].set_title('Study Hours vs Sleep Hours', fontsize=12, fontweight='bold')
axes[1, 0].set_xlabel('Study Hours per Day')
axes[1, 0].set_ylabel('Sleep Hours per Night')

# 4. Pair plot simulation - Correlation overview
correlation = df[['Study_Hours', 'Sleep_Hours', 'Exercise_Hours', 'Test_Score']].corr()
sns.heatmap(correlation, annot=True, fmt='.2f', cmap='RdYlGn', 
            center=0, ax=axes[1, 1], cbar_kws={'label': 'Correlation'})
axes[1, 1].set_title('Feature Correlation Matrix', fontsize=12, fontweight='bold')

plt.tight_layout()
plt.show()

# Print insights
print("\\nKey Insights:")
print(f"Average Test Score: {df['Test_Score'].mean():.2f}")
print(f"Correlation Study Hours <-> Test Score: {df['Study_Hours'].corr(df['Test_Score']):.3f}")
print(f"Correlation Sleep Hours <-> Test Score: {df['Sleep_Hours'].corr(df['Test_Score']):.3f}")`,
        output: {
          description: 'Four plots in a 2x2 grid analyzing student performance: Top-left shows a scatter plot with red regression line showing positive correlation between study hours and test scores. Top-right displays a smooth KDE (kernel density estimate) curve in light blue with red and green dashed lines marking mean and median scores. Bottom-left shows a scatter plot of study vs sleep hours with points colored and sized by test score (viridis gradient). Bottom-right shows a correlation heatmap with green (positive) to red (negative) colors showing relationships between all variables.'
        }
      },
      {
        title: '8. Time Series Visualization',
        explanation: `Visualize trends, seasonality, and patterns in time-based data - crucial for financial and business analytics.`,
        code: `import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Generate sample time series data
np.random.seed(42)
dates = pd.date_range('2023-01-01', '2024-12-31', freq='D')
n = len(dates)

# Create realistic time series with trend + seasonality + noise
trend = np.linspace(100, 150, n)
seasonal = 20 * np.sin(2 * np.pi * np.arange(n) / 365.25)
noise = np.random.normal(0, 5, n)
values = trend + seasonal + noise

df = pd.DataFrame({
    'Date': dates,
    'Value': values
})
df.set_index('Date', inplace=True)

# Calculate moving averages
df['MA_7'] = df['Value'].rolling(window=7).mean()
df['MA_30'] = df['Value'].rolling(window=30).mean()

fig, axes = plt.subplots(3, 1, figsize=(14, 10))
fig.suptitle('Time Series Analysis Dashboard', fontsize=16, fontweight='bold')

# 1. Main time series with moving averages
axes[0].plot(df.index, df['Value'], alpha=0.5, linewidth=0.8, 
             label='Daily Values', color='lightgray')
axes[0].plot(df.index, df['MA_7'], linewidth=2, label='7-Day MA', color='blue')
axes[0].plot(df.index, df['MA_30'], linewidth=2, label='30-Day MA', color='red')
axes[0].set_title('Stock Price with Moving Averages', fontsize=12, fontweight='bold')
axes[0].set_ylabel('Price ($)')
axes[0].legend(loc='upper left')
axes[0].grid(True, alpha=0.3)

# 2. Monthly aggregation
monthly = df['Value'].resample('M').agg(['mean', 'min', 'max'])
x_pos = np.arange(len(monthly))
axes[1].bar(x_pos, monthly['mean'], alpha=0.7, label='Mean', color='green')
axes[1].plot(x_pos, monthly['max'], marker='o', color='red', 
             linewidth=2, label='Max', markersize=4)
axes[1].plot(x_pos, monthly['min'], marker='o', color='blue', 
             linewidth=2, label='Min', markersize=4)
axes[1].set_title('Monthly Statistics', fontsize=12, fontweight='bold')
axes[1].set_ylabel('Price ($)')
axes[1].set_xlabel('Month')
axes[1].set_xticks(x_pos[::3])
axes[1].set_xticklabels(monthly.index.strftime('%Y-%m')[::3], rotation=45)
axes[1].legend()
axes[1].grid(axis='y', alpha=0.3)

# 3. Year-over-year comparison
df['Year'] = df.index.year
df['DayOfYear'] = df.index.dayofyear

for year in df['Year'].unique():
    year_data = df[df['Year'] == year]
    axes[2].plot(year_data['DayOfYear'], year_data['Value'], 
                 label=f'{year}', linewidth=2, alpha=0.7)

axes[2].set_title('Year-over-Year Comparison', fontsize=12, fontweight='bold')
axes[2].set_xlabel('Day of Year')
axes[2].set_ylabel('Price ($)')
axes[2].legend()
axes[2].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Print summary statistics
print("\\nTime Series Summary:")
mean_val = df['Value'].mean()
std_val = df['Value'].std()
min_val = df['Value'].min()
max_val = df['Value'].max()
print(f"Overall Mean: {mean_val:.2f}")
print(f"Overall Std: {std_val:.2f}")
print(f"Min: {min_val:.2f} on {df['Value'].idxmin().date()}")
print(f"Max: {max_val:.2f} on {df['Value'].idxmax().date()}")`,
        output: {
          description: 'Three stacked time series plots: Top shows daily stock prices (light gray) with overlaid 7-day (blue) and 30-day (red) moving averages showing an upward trend from 2023-2024. Middle displays monthly statistics as green bars (mean) with red and blue line markers showing monthly max/min values. Bottom compares 2023 vs 2024 side-by-side, plotting values against day of year (1-365) to visualize seasonal patterns across both years.'
        }
      }
    ]
  },

  quiz: [
    {
      question: 'What is the main difference between Matplotlib and Seaborn?',
      options: [
        'Matplotlib is faster than Seaborn',
        'Seaborn is built on Matplotlib and provides easier statistical plots with better defaults',
        'Matplotlib cannot create scatter plots',
        'Seaborn only works with DataFrames'
      ],
      correctAnswer: 1,
      explanation: 'Seaborn is built on top of Matplotlib and provides a high-level interface for creating attractive statistical graphics with less code and better default styling.'
    },
    {
      question: 'Which plot type is best for showing the distribution of a continuous variable?',
      options: [
        'Bar chart',
        'Line plot',
        'Histogram or KDE plot',
        'Pie chart'
      ],
      correctAnswer: 2,
      explanation: 'Histograms and KDE (Kernel Density Estimation) plots are designed to show the distribution of continuous variables, revealing the shape, center, and spread of the data.'
    },
    {
      question: 'What does plt.subplot(2, 3, 1) mean?',
      options: [
        'Create a 2x3 grid and select position 1',
        'Create 2 subplots with 3 plots each',
        'Create a subplot at coordinates (2,3,1)',
        'Create 1 subplot in a 2x3 layout'
      ],
      correctAnswer: 0,
      explanation: 'plt.subplot(rows, cols, position) creates a grid of rows×cols subplots and activates the subplot at the given position (1-indexed).'
    },
    {
      question: 'How do you save a Matplotlib figure as a high-resolution PDF?',
      options: [
        'plt.save("file.pdf")',
        'plt.savefig("file.pdf")',
        'plt.export("file.pdf")',
        'plt.write("file.pdf")'
      ],
      correctAnswer: 1,
      explanation: 'plt.savefig("filename.pdf") saves the current figure. PDF is a vector format, so it scales without losing quality. Add dpi parameter for higher resolution.'
    },
    {
      question: 'What does sns.heatmap() with annot=True do?',
      options: [
        'Creates a heatmap without labels',
        'Creates a heatmap with values displayed in each cell',
        'Animates the heatmap',
        'Creates an annotated scatter plot'
      ],
      correctAnswer: 1,
      explanation: 'annot=True adds text annotations showing the data values in each cell of the heatmap, making it easier to read exact values.'
    },
    {
      question: 'Which command adds a legend to a Matplotlib plot?',
      options: [
        'plt.add_legend()',
        'plt.show_legend()',
        'plt.legend()',
        'plt.label()'
      ],
      correctAnswer: 2,
      explanation: 'plt.legend() adds a legend to the plot based on the labels specified in plot commands (e.g., plt.plot(x, y, label="..."))'
    },
    {
      question: 'What is the purpose of plt.tight_layout()?',
      options: [
        'Makes plots smaller',
        'Automatically adjusts subplot spacing to prevent label overlap',
        'Compresses the figure',
        'Removes whitespace'
      ],
      correctAnswer: 1,
      explanation: 'plt.tight_layout() automatically adjusts subplot parameters to give specified padding and prevent axis labels, titles, and other elements from overlapping.'
    },
    {
      question: 'Which Seaborn function creates a scatter plot with a regression line?',
      options: [
        'sns.scatterplot()',
        'sns.lineplot()',
        'sns.regplot()',
        'sns.relplot()'
      ],
      correctAnswer: 2,
      explanation: 'sns.regplot() creates a scatter plot with a linear regression line fitted to the data, useful for visualizing relationships between variables.'
    },
    {
      question: 'How do you create a 2x2 grid of subplots in Matplotlib?',
      options: [
        'fig, axes = plt.subplots(2, 2)',
        'plt.subplot(2, 2)',
        'plt.grid(2, 2)',
        'fig = plt.figure(2, 2)'
      ],
      correctAnswer: 0,
      explanation: 'plt.subplots(nrows, ncols) creates a figure and a grid of subplots, returning the figure and an array of axes objects.'
    },
    {
      question: 'What does the "hue" parameter do in Seaborn plots?',
      options: [
        'Sets the plot color',
        'Colors points/bars based on a categorical variable',
        'Adjusts brightness',
        'Changes the plot style'
      ],
      correctAnswer: 1,
      explanation: 'The hue parameter groups data by a categorical variable and uses different colors for each group, making it easy to compare subgroups.'
    },
    {
      question: 'Which plot is best for showing correlation between variables?',
      options: [
        'Bar chart',
        'Pie chart',
        'Scatter plot or heatmap',
        'Line plot'
      ],
      correctAnswer: 2,
      explanation: 'Scatter plots show the relationship between two continuous variables, while heatmaps are excellent for visualizing correlation matrices of multiple variables.'
    },
    {
      question: 'What does plt.figure(figsize=(10, 6)) do?',
      options: [
        'Creates a figure with 10 plots of size 6',
        'Creates a figure 10 inches wide and 6 inches tall',
        'Sets plot resolution to 10x6 pixels',
        'Creates 10 figures of size 6'
      ],
      correctAnswer: 1,
      explanation: 'figsize=(width, height) sets the figure size in inches. This is important for making plots readable and suitable for presentations or publications.'
    },
    {
      question: 'How do you add a title to a plot?',
      options: [
        'plt.title("Title")',
        'plt.add_title("Title")',
        'plt.set_title("Title")',
        'plt.name("Title")'
      ],
      correctAnswer: 0,
      explanation: 'plt.title("string") or ax.set_title("string") adds a title to the current plot or specific axes.'
    },
    {
      question: 'What does sns.pairplot(df) create?',
      options: [
        'Two scatter plots',
        'A matrix of scatter plots for all numeric column pairs',
        'A paired bar chart',
        'Two histograms'
      ],
      correctAnswer: 1,
      explanation: 'sns.pairplot() creates a grid showing relationships between all pairs of numeric variables, with histograms on the diagonal and scatter plots elsewhere.'
    },
    {
      question: 'Which colormap is recommended for accessibility (color-blind friendly)?',
      options: [
        'jet',
        'rainbow',
        'viridis or colorblind palette',
        'random'
      ],
      correctAnswer: 2,
      explanation: 'Viridis and specially designed color-blind friendly palettes ensure your visualizations are accessible to people with color vision deficiencies.'
    },
    {
      question: 'What does plt.grid(True) do?',
      options: [
        'Creates a grid of subplots',
        'Adds gridlines to the plot background',
        'Arranges data in a grid',
        'Enables grid mode'
      ],
      correctAnswer: 1,
      explanation: 'plt.grid(True) adds gridlines to the plot, making it easier to read values. You can customize with linestyle, alpha, and color parameters.'
    },
    {
      question: 'How do you create a horizontal bar chart in Matplotlib?',
      options: [
        'plt.bar(y, x)',
        'plt.barh(y, x)',
        'plt.hbar(y, x)',
        'plt.bar(x, y, horizontal=True)'
      ],
      correctAnswer: 1,
      explanation: 'plt.barh() creates horizontal bars, which are useful when category names are long or when comparing many categories.'
    },
    {
      question: 'What is the purpose of alpha parameter in plotting?',
      options: [
        'Sets the plot size',
        'Controls transparency (0=transparent, 1=opaque)',
        'Changes the color',
        'Sets the angle'
      ],
      correctAnswer: 1,
      explanation: 'Alpha controls transparency from 0 (fully transparent) to 1 (fully opaque). It\'s useful for showing overlapping data or creating layered visualizations.'
    },
    {
      question: 'Which function creates a box plot in Seaborn?',
      options: [
        'sns.box()',
        'sns.boxplot()',
        'sns.boxes()',
        'sns.plot_box()'
      ],
      correctAnswer: 1,
      explanation: 'sns.boxplot() creates box-and-whisker plots showing the distribution, quartiles, and outliers of data across categories.'
    },
    {
      question: 'What does plt.xlim(0, 100) do?',
      options: [
        'Limits the plot to 100 data points',
        'Sets the x-axis range from 0 to 100',
        'Sets the plot width to 100',
        'Limits to 100 pixels'
      ],
      correctAnswer: 1,
      explanation: 'plt.xlim(min, max) sets the limits of the x-axis. Similarly, plt.ylim() sets y-axis limits. This helps focus on specific data ranges.'
    }
  ]
};
