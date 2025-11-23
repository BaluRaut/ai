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
      },
      {
        title: '9. 3D Plotting - Surface and Scatter',
        explanation: `3D plots visualize three variables simultaneously. Use for surfaces, topography, or multi-dimensional relationships. While powerful, use sparingly as 2D projections often communicate better.`,
        code: `import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

# Create figure with 3D subplots
fig = plt.figure(figsize=(14, 5))

# 1. 3D Scatter Plot
ax1 = fig.add_subplot(131, projection='3d')

# Generate random 3D data
np.random.seed(42)
n = 100
x = np.random.rand(n) * 10
y = np.random.rand(n) * 10
z = np.sin(x) + np.cos(y) + np.random.randn(n) * 0.5
colors = z

scatter = ax1.scatter(x, y, z, c=colors, cmap='viridis', s=50, alpha=0.6)
ax1.set_title('3D Scatter Plot', fontweight='bold')
ax1.set_xlabel('X axis')
ax1.set_ylabel('Y axis')
ax1.set_zlabel('Z axis')
plt.colorbar(scatter, ax=ax1, label='Z value')

# 2. 3D Surface Plot
ax2 = fig.add_subplot(132, projection='3d')

# Create mesh grid
x_surf = np.linspace(-5, 5, 50)
y_surf = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x_surf, y_surf)
Z = np.sin(np.sqrt(X**2 + Y**2))

# Plot surface
surf = ax2.plot_surface(X, Y, Z, cmap='coolwarm', alpha=0.8, 
                        edgecolor='none', linewidth=0, antialiased=True)
ax2.set_title('3D Surface Plot', fontweight='bold')
ax2.set_xlabel('X axis')
ax2.set_ylabel('Y axis')
ax2.set_zlabel('Z axis')
plt.colorbar(surf, ax=ax2, shrink=0.5)

# 3. 3D Wireframe
ax3 = fig.add_subplot(133, projection='3d')

# Create different function
x_wire = np.linspace(-3, 3, 30)
y_wire = np.linspace(-3, 3, 30)
X_wire, Y_wire = np.meshgrid(x_wire, y_wire)
Z_wire = X_wire * np.exp(-X_wire**2 - Y_wire**2)

# Plot wireframe
ax3.plot_wireframe(X_wire, Y_wire, Z_wire, color='darkblue', alpha=0.5, linewidth=0.8)
ax3.set_title('3D Wireframe Plot', fontweight='bold')
ax3.set_xlabel('X axis')
ax3.set_ylabel('Y axis')
ax3.set_zlabel('Z axis')

plt.tight_layout()
plt.show()

print("3D plotting tips:")
print("- Rotate plots interactively in Jupyter/IDE")
print("- Use view_init(elev, azim) to set viewing angle")
print("- Consider 2D projections for clarity")`,
        output: {
          description: 'Three 3D visualizations side-by-side: Left shows a 3D scatter plot with 100 colorful points distributed in space, colored by Z-value using viridis colormap. Center displays a smooth surface plot with wave-like pattern (sin of distance from origin), rendered in coolwarm colors from blue valleys to red peaks. Right shows a wireframe of a peaked function with dark blue mesh lines creating a transparent 3D grid structure.'
        }
      },
      {
        title: '10. Advanced Subplots - GridSpec and Complex Layouts',
        explanation: `GridSpec provides fine-grained control over subplot layouts, allowing you to create complex dashboard-style figures with varying subplot sizes.`,
        code: `import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
import numpy as np
import seaborn as sns

# Create figure
fig = plt.figure(figsize=(14, 10))

# Create GridSpec with 3 rows and 3 columns
gs = gridspec.GridSpec(3, 3, figure=fig, hspace=0.3, wspace=0.3)

# Generate sample data
np.random.seed(42)
data1 = np.random.randn(1000)
data2 = np.random.randn(1000) * 2 + 5
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Large plot spanning top 2 rows
ax1 = fig.add_subplot(gs[0:2, :])  # Rows 0-1, all columns
ax1.plot(x, y1, label='sin(x)', linewidth=2, color='blue')
ax1.plot(x, y2, label='cos(x)', linewidth=2, color='red')
ax1.fill_between(x, y1, y2, alpha=0.3, color='gray')
ax1.set_title('Main Plot - Large Span (2 rows x 3 cols)', fontsize=14, fontweight='bold')
ax1.set_xlabel('X')
ax1.set_ylabel('Y')
ax1.legend()
ax1.grid(True, alpha=0.3)

# Bottom left - small plot
ax2 = fig.add_subplot(gs[2, 0])
ax2.hist(data1, bins=30, color='skyblue', edgecolor='black', alpha=0.7)
ax2.set_title('Histogram 1', fontsize=10)
ax2.set_xlabel('Value')
ax2.set_ylabel('Frequency')

# Bottom middle - small plot
ax3 = fig.add_subplot(gs[2, 1])
ax3.hist(data2, bins=30, color='salmon', edgecolor='black', alpha=0.7)
ax3.set_title('Histogram 2', fontsize=10)
ax3.set_xlabel('Value')
ax3.set_ylabel('Frequency')

# Bottom right - small plot
ax4 = fig.add_subplot(gs[2, 2])
ax4.scatter(data1[:100], data2[:100], alpha=0.5, c=range(100), cmap='viridis')
ax4.set_title('Scatter', fontsize=10)
ax4.set_xlabel('Data 1')
ax4.set_ylabel('Data 2')

plt.suptitle('Advanced Layout with GridSpec', fontsize=16, fontweight='bold', y=0.995)
plt.show()

# Example 2: Nested GridSpec for even more complex layouts
fig2 = plt.figure(figsize=(12, 8))

# Outer grid: 1 row, 2 columns
gs_outer = gridspec.GridSpec(1, 2, figure=fig2, wspace=0.3)

# Left side: single plot
ax_left = fig2.add_subplot(gs_outer[0, 0])
ax_left.plot(x, np.exp(-x/10)*np.sin(2*x), linewidth=2, color='purple')
ax_left.set_title('Left: Single Plot', fontweight='bold')
ax_left.grid(True, alpha=0.3)

# Right side: nested grid (2x2)
gs_nested = gridspec.GridSpecFromSubplotSpec(2, 2, subplot_spec=gs_outer[0, 1], hspace=0.4, wspace=0.4)

for i in range(2):
    for j in range(2):
        ax = fig2.add_subplot(gs_nested[i, j])
        data = np.random.randn(50) * (i+1) + (j*2)
        ax.boxplot(data, vert=True)
        ax.set_title(f'Box ({i},{j})', fontsize=9)
        ax.set_ylabel('Value')

plt.suptitle('Nested GridSpec Layout', fontsize=14, fontweight='bold')
plt.show()

print("GridSpec advantages:")
print("- Create dashboard-style layouts")
print("- Span subplots across multiple rows/columns")
print("- Nest grids within grids for complex designs")`,
        output: {
          description: 'First figure shows complex dashboard layout: top 2/3 has large plot with overlapping sin/cos waves with gray fill between them. Bottom row has 3 smaller plots side-by-side (2 histograms showing different distributions, 1 colorful scatter plot). Second figure demonstrates nested layout: left half has single purple damped oscillation plot, right half contains 2x2 grid of box plots with varying distributions.'
        }
      },
      {
        title: '11. Interactive Elements and Annotations',
        explanation: `Add annotations, arrows, text boxes, and shapes to highlight key insights. Essential for presentations and reports to draw attention to important features.`,
        code: `import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Rectangle, Circle, Arrow, FancyBboxPatch

# Generate data
np.random.seed(42)
x = np.linspace(0, 10, 100)
y = np.sin(x) + np.random.randn(100) * 0.2
y_smooth = np.sin(x)

# Create figure
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 1. Annotations with arrows
ax1 = axes[0, 0]
ax1.plot(x, y_smooth, linewidth=2, color='blue', label='y = sin(x)')
ax1.scatter(x, y, alpha=0.3, color='gray', s=20)
ax1.set_title('Annotations with Arrows', fontweight='bold')

# Annotate peak
peak_idx = np.argmax(y_smooth)
ax1.annotate('Maximum Point', 
            xy=(x[peak_idx], y_smooth[peak_idx]),
            xytext=(x[peak_idx]+2, y_smooth[peak_idx]-0.5),
            arrowprops=dict(arrowstyle='->', color='red', lw=2),
            fontsize=11, color='red', fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor='yellow', alpha=0.7))

# Annotate minimum
min_idx = np.argmin(y_smooth)
ax1.annotate('Minimum\\nPoint', 
            xy=(x[min_idx], y_smooth[min_idx]),
            xytext=(x[min_idx]-2, y_smooth[min_idx]+0.5),
            arrowprops=dict(arrowstyle='fancy', color='green', lw=2),
            fontsize=11, color='green', fontweight='bold',
            bbox=dict(boxstyle='round,pad=0.5', facecolor='lightgreen', alpha=0.7))

ax1.grid(True, alpha=0.3)
ax1.legend()

# 2. Highlighted regions
ax2 = axes[0, 1]
sales = np.random.randint(50, 150, 12) + np.array([0, 5, 10, 15, 20, 25, 30, 35, 30, 25, 20, 15])
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

ax2.plot(months, sales, marker='o', linewidth=2, markersize=8, color='darkblue')
ax2.set_title('Highlighted Regions', fontweight='bold')
ax2.set_ylabel('Sales ($K)')

# Highlight Q2 (Apr-Jun)
ax2.axvspan(3, 6, alpha=0.2, color='green', label='Q2 - High Growth')

# Highlight Q4 (Oct-Dec)
ax2.axvspan(9, 12, alpha=0.2, color='red', label='Q4 - Decline')

# Add horizontal line for target
ax2.axhline(y=120, color='orange', linestyle='--', linewidth=2, label='Target')

# Text box
ax2.text(1.5, 140, 'Peak Season', fontsize=11, 
        bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8))

ax2.legend()
ax2.grid(axis='y', alpha=0.3)

# 3. Shapes and patches
ax3 = axes[1, 0]
ax3.set_xlim(0, 10)
ax3.set_ylim(0, 10)
ax3.set_title('Geometric Shapes', fontweight='bold')

# Rectangle
rect = Rectangle((1, 1), 2, 1.5, linewidth=2, edgecolor='blue', facecolor='lightblue', alpha=0.5)
ax3.add_patch(rect)
ax3.text(2, 1.7, 'Rectangle', ha='center', fontweight='bold')

# Circle
circle = Circle((6, 3), 1, linewidth=2, edgecolor='red', facecolor='pink', alpha=0.5)
ax3.add_patch(circle)
ax3.text(6, 3, 'Circle', ha='center', fontweight='bold')

# Fancy box
fancy = FancyBboxPatch((4, 6), 2, 1.5, boxstyle="round,pad=0.1", 
                      linewidth=2, edgecolor='green', facecolor='lightgreen', alpha=0.5)
ax3.add_patch(fancy)
ax3.text(5, 6.7, 'Fancy Box', ha='center', fontweight='bold')

# Arrow
arrow = Arrow(1, 7, 2, 1.5, width=0.5, color='purple', alpha=0.6)
ax3.add_patch(arrow)

ax3.set_aspect('equal')
ax3.grid(True, alpha=0.3)

# 4. Multiple text styles
ax4 = axes[1, 1]
categories = ['Product A', 'Product B', 'Product C', 'Product D']
values = [23, 45, 56, 78]
colors = ['red', 'yellow', 'green', 'blue']

bars = ax4.barh(categories, values, color=colors, alpha=0.7, edgecolor='black')
ax4.set_title('Annotated Bar Chart', fontweight='bold')
ax4.set_xlabel('Sales (Units)')

# Add value labels on bars
for i, (bar, value) in enumerate(zip(bars, values)):
    ax4.text(value + 2, i, f'{value}', va='center', fontweight='bold', fontsize=11)

# Add custom text annotations
ax4.text(40, 0.5, '← Below Target', fontsize=9, color='red', style='italic')
ax4.text(60, 2.5, 'Top Performer! →', fontsize=9, color='green', fontweight='bold')

ax4.axvline(x=50, color='gray', linestyle='--', linewidth=1.5, alpha=0.7, label='Target: 50')
ax4.legend()

plt.tight_layout()
plt.show()

print("Annotation best practices:")
print("- Use arrows to point to specific data")
print("- Highlight regions with axvspan/axhspan")
print("- Add text boxes for context")
print("- Use colors strategically to draw attention")`,
        output: {
          description: 'Four-panel figure demonstrating annotation techniques: Top-left shows sine wave with labeled arrows pointing to maximum (yellow box) and minimum (green box) points. Top-right displays monthly sales line chart with shaded regions for Q2 (green) and Q4 (red), plus orange target line and text annotations. Bottom-left contains geometric shapes (rectangle, circle, fancy box, arrow) in different colors. Bottom-right shows horizontal bar chart with value labels, target line, and custom text annotations for performance indicators.'
        }
      },
      {
        title: '12. Statistical Visualizations - Advanced Seaborn',
        explanation: `Seaborn excels at statistical visualizations. Explore violin plots, strip plots, swarm plots, and pair plots for multi-variable analysis.`,
        code: `import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import pandas as pd

# Set style
sns.set_style('whitegrid')

# Generate sample dataset
np.random.seed(42)
n = 150
df = pd.DataFrame({
    'Category': np.repeat(['A', 'B', 'C'], n),
    'Value': np.concatenate([
        np.random.normal(50, 10, n),
        np.random.normal(60, 15, n),
        np.random.normal(55, 8, n)
    ]),
    'Score': np.concatenate([
        np.random.uniform(0, 100, n),
        np.random.uniform(20, 100, n),
        np.random.uniform(10, 90, n)
    ]),
    'Size': np.abs(np.random.randn(n*3) * 20 + 50)
})

# Create figure
fig, axes = plt.subplots(2, 3, figsize=(16, 10))

# 1. Violin Plot
sns.violinplot(data=df, x='Category', y='Value', ax=axes[0, 0], palette='Set2')
axes[0, 0].set_title('Violin Plot - Distribution Shape', fontweight='bold')
axes[0, 0].set_ylabel('Value')

# 2. Violin with inner box plot
sns.violinplot(data=df, x='Category', y='Score', ax=axes[0, 1], 
              palette='muted', inner='box')
axes[0, 1].set_title('Violin + Box Plot', fontweight='bold')
axes[0, 1].set_ylabel('Score')

# 3. Swarm Plot (shows all individual points)
sns.swarmplot(data=df.sample(100), x='Category', y='Value', ax=axes[0, 2], 
             palette='husl', size=3)
axes[0, 2].set_title('Swarm Plot - All Data Points', fontweight='bold')
axes[0, 2].set_ylabel('Value')

# 4. Strip Plot with jitter
sns.stripplot(data=df.sample(150), x='Category', y='Score', ax=axes[1, 0], 
             palette='deep', alpha=0.5, jitter=True)
axes[1, 0].set_title('Strip Plot - Jittered Points', fontweight='bold')
axes[1, 0].set_ylabel('Score')

# 5. Box + Swarm combination
sns.boxplot(data=df.sample(150), x='Category', y='Value', ax=axes[1, 1], 
           palette='pastel', width=0.5)
sns.swarmplot(data=df.sample(150), x='Category', y='Value', ax=axes[1, 1], 
             color='black', size=2, alpha=0.3)
axes[1, 1].set_title('Box + Swarm Overlay', fontweight='bold')
axes[1, 1].set_ylabel('Value')

# 6. Point plot with confidence intervals
sns.pointplot(data=df, x='Category', y='Score', ax=axes[1, 2], 
             palette='Set1', markers='D', capsize=0.2, errwidth=2)
axes[1, 2].set_title('Point Plot with CI', fontweight='bold')
axes[1, 2].set_ylabel('Score (Mean ± CI)')
axes[1, 2].grid(axis='y', alpha=0.3)

plt.tight_layout()
plt.show()

# Create pair plot for multivariate analysis
print("\\nCreating pair plot for multivariate relationships...")

# Sample smaller dataset for pair plot
df_small = df.sample(100).copy()

# Pair plot
pair_fig = sns.pairplot(df_small, hue='Category', palette='bright',
                        diag_kind='kde', plot_kws={'alpha': 0.6, 's': 30},
                        height=2.5, aspect=1.2)
pair_fig.fig.suptitle('Pair Plot - Multivariate Analysis', y=1.02, fontsize=14, fontweight='bold')
plt.show()

# Joint plot - bivariate analysis
print("\\nCreating joint plot for detailed bivariate analysis...")
joint_fig = sns.jointplot(data=df, x='Value', y='Score', hue='Category',
                          kind='scatter', palette='Set2', alpha=0.6,
                          height=7, ratio=4, marginal_kws={'bins': 20})
joint_fig.fig.suptitle('Joint Plot - Bivariate Distribution', y=1.02, fontweight='bold')
plt.show()

print("\\nStatistical plot types:")
print("- Violin: Shows distribution shape (like rotated KDE)")
print("- Swarm: Displays every data point (avoid for large datasets)")
print("- Strip: Jittered points along categorical axis")
print("- Point: Shows mean and confidence interval")
print("- Pair: Matrix of all variable relationships")
print("- Joint: Detailed bivariate with marginal distributions")`,
        output: {
          description: 'Three separate visualizations: First is 2x3 grid showing various statistical plots (violin plots showing distribution shapes, swarm plots with scattered points, box-swarm combinations, and point plots with error bars) for three categories A, B, C. Second is a pair plot matrix showing relationships between Value, Score, and Size variables, color-coded by category with KDE plots on diagonal. Third is a joint plot with scatter plot in center showing Value vs Score relationship, with histograms on margins showing individual distributions, all colored by category.'
        }
      },
      {
        title: '13. Custom Colormaps and Color Palettes',
        explanation: `Color choice dramatically impacts readability and insights. Learn to create custom colormaps, use perceptually uniform palettes, and design color-blind friendly visualizations.`,
        code: `import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
import seaborn as sns
import numpy as np

# Create figure
fig = plt.figure(figsize=(16, 10))

# Generate sample data
np.random.seed(42)
data_2d = np.random.randn(10, 10).cumsum(axis=1)

# 1. Built-in Matplotlib colormaps
ax1 = plt.subplot(3, 4, 1)
im1 = ax1.imshow(data_2d, cmap='viridis', aspect='auto')
ax1.set_title('Viridis (Perceptually Uniform)', fontweight='bold', fontsize=10)
plt.colorbar(im1, ax=ax1)

ax2 = plt.subplot(3, 4, 2)
im2 = ax2.imshow(data_2d, cmap='plasma', aspect='auto')
ax2.set_title('Plasma', fontweight='bold', fontsize=10)
plt.colorbar(im2, ax=ax2)

ax3 = plt.subplot(3, 4, 3)
im3 = ax3.imshow(data_2d, cmap='coolwarm', aspect='auto')
ax3.set_title('Coolwarm (Diverging)', fontweight='bold', fontsize=10)
plt.colorbar(im3, ax=ax3)

ax4 = plt.subplot(3, 4, 4)
im4 = ax4.imshow(data_2d, cmap='RdYlGn', aspect='auto')
ax4.set_title('RdYlGn (Diverging)', fontweight='bold', fontsize=10)
plt.colorbar(im4, ax=ax4)

# 2. Custom colormap from colors
colors_list = ['darkblue', 'blue', 'cyan', 'yellow', 'orange', 'red']
custom_cmap = mcolors.LinearSegmentedColormap.from_list('custom', colors_list)

ax5 = plt.subplot(3, 4, 5)
im5 = ax5.imshow(data_2d, cmap=custom_cmap, aspect='auto')
ax5.set_title('Custom: Blue→Red', fontweight='bold', fontsize=10)
plt.colorbar(im5, ax=ax5)

# 3. Discrete colormap
colors_discrete = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
discrete_cmap = mcolors.ListedColormap(colors_discrete)

ax6 = plt.subplot(3, 4, 6)
data_discrete = np.random.randint(0, 5, (10, 10))
im6 = ax6.imshow(data_discrete, cmap=discrete_cmap, aspect='auto')
ax6.set_title('Discrete Categories', fontweight='bold', fontsize=10)
plt.colorbar(im6, ax=ax6, ticks=range(5))

# 4. Seaborn color palettes for categorical data
ax7 = plt.subplot(3, 4, 7)
categories = ['A', 'B', 'C', 'D', 'E', 'F']
values = np.random.randint(20, 100, 6)
palette = sns.color_palette('Set2')
ax7.bar(categories, values, color=palette)
ax7.set_title('Seaborn Set2 Palette', fontweight='bold', fontsize=10)
ax7.set_ylabel('Value')

# 5. Color-blind friendly palette
ax8 = plt.subplot(3, 4, 8)
palette_cb = sns.color_palette('colorblind')
ax8.bar(categories, np.random.randint(20, 100, 6), color=palette_cb)
ax8.set_title('Colorblind-Friendly', fontweight='bold', fontsize=10)
ax8.set_ylabel('Value')

# 6. Gradient palette
ax9 = plt.subplot(3, 4, 9)
palette_gradient = sns.light_palette('seagreen', n_colors=6)
ax9.bar(categories, np.random.randint(20, 100, 6), color=palette_gradient)
ax9.set_title('Gradient: Light→Dark Green', fontweight='bold', fontsize=10)
ax9.set_ylabel('Value')

# 7. Diverging palette
ax10 = plt.subplot(3, 4, 10)
palette_div = sns.diverging_palette(250, 10, n=6)
ax10.bar(categories, np.random.randint(-50, 50, 6), color=palette_div)
ax10.axhline(0, color='black', linewidth=0.8)
ax10.set_title('Diverging: Blue-Red', fontweight='bold', fontsize=10)
ax10.set_ylabel('Value')

# 8. Cubehelix palette (smooth transitions)
ax11 = plt.subplot(3, 4, 11)
palette_cube = sns.cubehelix_palette(6, start=.5, rot=-.75)
ax11.bar(categories, np.random.randint(20, 100, 6), color=palette_cube)
ax11.set_title('Cubehelix Palette', fontweight='bold', fontsize=10)
ax11.set_ylabel('Value')

# 9. Custom HLS palette
ax12 = plt.subplot(3, 4, 12)
palette_hls = sns.hls_palette(6, l=.5, s=.8)
ax12.bar(categories, np.random.randint(20, 100, 6), color=palette_hls)
ax12.set_title('HLS Palette (Custom)', fontweight='bold', fontsize=10)
ax12.set_ylabel('Value')

plt.suptitle('Color Palettes and Colormaps Showcase', fontsize=16, fontweight='bold', y=0.995)
plt.tight_layout()
plt.show()

# Demonstrate color palette selection guide
print("\\nColor Palette Selection Guide:")
print("=" * 50)
print("\\n1. SEQUENTIAL (for continuous data, one direction):")
print("   - Use: viridis, plasma, cividis (perceptually uniform)")
print("   - Avoid: jet, rainbow (misleading gradients)")
print("\\n2. DIVERGING (data with meaningful center/zero):")
print("   - Use: coolwarm, RdBu, RdYlGn")
print("   - When: Showing positive/negative, above/below average")
print("\\n3. CATEGORICAL (distinct categories):")
print("   - Use: Set1, Set2, tab10, colorblind")
print("   - Ensure: Maximum contrast between colors")
print("\\n4. COLOR-BLIND FRIENDLY:")
print("   - Always use 'colorblind' palette or test with simulator")
print("   - Avoid: Red-green combinations only")
print("\\n5. GRAYSCALE/PRINT:")
print("   - Use: Greys, binary, or high-contrast patterns")
print("\\nBest practice: Test visualizations in grayscale to ensure clarity!")`,
        output: {
          description: 'Comprehensive 3x4 grid demonstrating various color schemes: Top row shows continuous colormaps (viridis, plasma, coolwarm, RdYlGn) applied to heatmaps. Middle rows display categorical color palettes through bar charts (Seaborn Set2, colorblind-friendly, gradient green, diverging blue-red, cubehelix, custom HLS). Each subplot labeled with colormap name. Colorbars shown for continuous maps. Demonstrates proper color selection for different data types.'
        }
      },
      {
        title: '14. Saving Publication-Quality Figures',
        explanation: `Learn to export high-quality figures for papers, presentations, and web. Control DPI, format, transparency, and sizing for different output media.`,
        code: `import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# Create a publication-quality figure
fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Generate data
np.random.seed(42)
x = np.linspace(0, 10, 100)
y1 = np.sin(x) + np.random.randn(100) * 0.1
y2 = np.cos(x) + np.random.randn(100) * 0.1

# Left plot: Line plot with error bands
mean_y1 = np.sin(x)
std_y1 = 0.1
axes[0].plot(x, mean_y1, linewidth=2.5, color='#2E86AB', label='Treatment A')
axes[0].fill_between(x, mean_y1 - std_y1, mean_y1 + std_y1, 
                     alpha=0.3, color='#2E86AB')

mean_y2 = np.cos(x)
std_y2 = 0.1
axes[0].plot(x, mean_y2, linewidth=2.5, color='#A23B72', label='Treatment B')
axes[0].fill_between(x, mean_y2 - std_y2, mean_y2 + std_y2, 
                     alpha=0.3, color='#A23B72')

axes[0].set_xlabel('Time (hours)', fontsize=12, fontweight='bold')
axes[0].set_ylabel('Response', fontsize=12, fontweight='bold')
axes[0].set_title('Treatment Comparison Over Time', fontsize=14, fontweight='bold', pad=15)
axes[0].legend(fontsize=11, frameon=True, shadow=True, loc='upper right')
axes[0].grid(True, alpha=0.3, linestyle='--')
axes[0].tick_params(labelsize=10)

# Right plot: Bar chart with error bars
categories = ['Control', 'Low Dose', 'Medium Dose', 'High Dose']
means = [45, 52, 68, 73]
errors = [3, 4, 5, 6]
colors = ['#264653', '#2A9D8F', '#E9C46A', '#E76F51']

bars = axes[1].bar(categories, means, yerr=errors, capsize=5, 
                   color=colors, edgecolor='black', linewidth=1.2,
                   error_kw={'linewidth': 2, 'ecolor': 'black'})

axes[1].set_ylabel('Efficacy (%)', fontsize=12, fontweight='bold')
axes[1].set_title('Dose-Response Relationship', fontsize=14, fontweight='bold', pad=15)
axes[1].set_ylim(0, 85)
axes[1].grid(axis='y', alpha=0.3, linestyle='--')
axes[1].tick_params(labelsize=10)

# Add value labels on bars
for bar, mean in zip(bars, means):
    height = bar.get_height()
    axes[1].text(bar.get_x() + bar.get_width()/2., height + 2,
                f'{mean}%', ha='center', va='bottom', fontsize=10, fontweight='bold')

# Overall figure title
fig.suptitle('Publication-Quality Figure Example', fontsize=16, fontweight='bold', y=0.98)

plt.tight_layout()

# Display the figure
plt.show()

# Save in multiple formats with different settings
print("Saving publication-quality figures...")
print("=" * 60)

# 1. High-res PNG for presentations (300 DPI)
plt.savefig('figure_highres.png', dpi=300, bbox_inches='tight', 
           facecolor='white', edgecolor='none')
print("✓ Saved: figure_highres.png (300 DPI, for PowerPoint/Keynote)")

# 2. Vector PDF for publications (scalable, no DPI needed)
plt.savefig('figure_publication.pdf', format='pdf', bbox_inches='tight',
           facecolor='white', edgecolor='none')
print("✓ Saved: figure_publication.pdf (Vector, for journals/papers)")

# 3. SVG for web and further editing
plt.savefig('figure_web.svg', format='svg', bbox_inches='tight',
           facecolor='white', edgecolor='none')
print("✓ Saved: figure_web.svg (Vector, for web/Inkscape/Illustrator)")

# 4. Transparent background PNG
plt.savefig('figure_transparent.png', dpi=300, bbox_inches='tight',
           transparent=True)
print("✓ Saved: figure_transparent.png (Transparent background)")

# 5. Low-res PNG for quick preview
plt.savefig('figure_preview.png', dpi=72, bbox_inches='tight')
print("✓ Saved: figure_preview.png (72 DPI, for quick preview)")

# 6. EPS for LaTeX documents
plt.savefig('figure_latex.eps', format='eps', bbox_inches='tight')
print("✓ Saved: figure_latex.eps (Vector, for LaTeX)")

print("\\n" + "=" * 60)
print("Format Selection Guide:")
print("=" * 60)
print("\\nPDF (.pdf) - BEST for publications/papers")
print("  ✓ Vector format (scales infinitely)")
print("  ✓ Accepted by most journals")
print("  ✓ Embeds fonts properly")
print("\\nPNG (.png) - BEST for presentations/web")
print("  ✓ Use 300 DPI for print, 150 DPI for screen")
print("  ✓ Supports transparency")
print("  ✓ Widely compatible")
print("\\nSVG (.svg) - BEST for further editing")
print("  ✓ Vector format (editable in Inkscape/Illustrator)")
print("  ✓ Scalable for web")
print("  ✓ Can modify elements after export")
print("\\nEPS (.eps) - BEST for LaTeX")
print("  ✓ Vector format")
print("  ✓ Standard for scientific LaTeX documents")
print("\\nKey Parameters:")
print("  • dpi=300 → Print quality")
print("  • dpi=150 → Screen quality")
print("  • bbox_inches='tight' → Remove whitespace")
print("  • transparent=True → No background")
print("  • facecolor='white' → White background")`,
        output: {
          description: 'High-quality two-panel figure: Left panel shows two treatment curves (blue Treatment A, purple Treatment B) with error bands (shaded regions) over 10 hours, with professional formatting (bold labels, grid, legend with shadow). Right panel displays dose-response bar chart with four bars (Control through High Dose) in gradient colors, error bars, and percentage labels on top of each bar. Both panels have bold titles, axis labels, and clean styling suitable for publication. Terminal output shows saved files in multiple formats (PNG at various DPIs, PDF, SVG, EPS) with format selection guide.'
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
