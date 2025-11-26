// Data Visualization Module - Comprehensive coverage of visualization tools

const dataVisualization = {
  id: 'data-visualization',
  title: 'Data Visualization for AI',
  description: 'Master data visualization with Matplotlib, Seaborn, Plotly, and Streamlit',
  level: 'Intermediate',
  estimatedHours: 12,
  topics: [
    {
      id: 1,
      title: 'Matplotlib Fundamentals',
      description: 'The foundation of Python data visualization',
      
      overview: `Matplotlib is the most fundamental plotting library in Python. It's the base for Seaborn and integrates with Pandas. Learning Matplotlib gives you complete control over every aspect of your visualizations - from line styles to axis labels to figure layouts.

Key concepts include Figure (the canvas), Axes (individual plots), and Artists (everything you see). The pyplot interface provides MATLAB-like plotting for quick visualizations, while the object-oriented API offers fine-grained control for complex figures.

For AI/ML, Matplotlib is essential for visualizing training curves, confusion matrices, feature distributions, model predictions, and decision boundaries. Master it first, then layer specialized libraries on top.`,

      keyPoints: [
        'Foundation library - Seaborn and Pandas plotting built on it',
        'Two interfaces: pyplot (quick) and object-oriented (control)',
        'Figure contains Axes, Axes contain plots and labels',
        'Essential for ML: loss curves, confusion matrices, feature plots',
        'Highly customizable - control every visual element'
      ],

      useCases: [
        { title: 'Training Curves', description: 'Plot loss and accuracy over epochs', example: 'Visualize model convergence during training' },
        { title: 'Confusion Matrix', description: 'Visualize classification performance', example: 'Heatmap showing true vs predicted labels' },
        { title: 'Feature Distributions', description: 'Histograms of data features', example: 'Understand data distribution before modeling' },
        { title: 'Decision Boundaries', description: 'Visualize model predictions', example: '2D plot showing classifier regions' }
      ],

      codeExamples: [
        {
          title: 'ML Training Visualization',
          code: `import matplotlib.pyplot as plt
import numpy as np

# Simulated training data
epochs = range(1, 51)
train_loss = 2.5 * np.exp(-0.1 * np.array(epochs)) + 0.1 + np.random.normal(0, 0.05, 50)
val_loss = 2.5 * np.exp(-0.08 * np.array(epochs)) + 0.15 + np.random.normal(0, 0.08, 50)
train_acc = 1 - train_loss/3
val_acc = 1 - val_loss/3

# Create figure with 2 subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

# Loss plot
ax1.plot(epochs, train_loss, 'b-', label='Training Loss', linewidth=2)
ax1.plot(epochs, val_loss, 'r--', label='Validation Loss', linewidth=2)
ax1.set_xlabel('Epoch', fontsize=12)
ax1.set_ylabel('Loss', fontsize=12)
ax1.set_title('Model Loss Over Training', fontsize=14, fontweight='bold')
ax1.legend(loc='upper right')
ax1.grid(True, alpha=0.3)
ax1.set_xlim(1, 50)

# Accuracy plot
ax2.plot(epochs, train_acc, 'b-', label='Training Accuracy', linewidth=2)
ax2.plot(epochs, val_acc, 'r--', label='Validation Accuracy', linewidth=2)
ax2.set_xlabel('Epoch', fontsize=12)
ax2.set_ylabel('Accuracy', fontsize=12)
ax2.set_title('Model Accuracy Over Training', fontsize=14, fontweight='bold')
ax2.legend(loc='lower right')
ax2.grid(True, alpha=0.3)
ax2.set_xlim(1, 50)

plt.tight_layout()
plt.savefig('training_curves.png', dpi=150, bbox_inches='tight')
plt.show()

print("✅ Training visualization complete!")
print("📊 Use this to detect overfitting (val_loss increasing while train_loss decreases)")`,
          language: 'python'
        },
        {
          title: 'Confusion Matrix Heatmap',
          code: `import matplotlib.pyplot as plt
import numpy as np

# Sample confusion matrix (3-class classification)
cm = np.array([
    [45, 3, 2],   # Class 0: 45 correct, 3 confused with 1, 2 with 2
    [5, 38, 7],   # Class 1: 5 confused with 0, 38 correct, 7 with 2  
    [1, 4, 45]    # Class 2: 1 with 0, 4 with 1, 45 correct
])
classes = ['Cat', 'Dog', 'Bird']

# Create heatmap
fig, ax = plt.subplots(figsize=(8, 6))
im = ax.imshow(cm, cmap='Blues')

# Add colorbar
cbar = ax.figure.colorbar(im, ax=ax)
cbar.ax.set_ylabel('Count', rotation=-90, va="bottom")

# Add labels
ax.set_xticks(range(len(classes)))
ax.set_yticks(range(len(classes)))
ax.set_xticklabels(classes)
ax.set_yticklabels(classes)
ax.set_xlabel('Predicted Label', fontsize=12)
ax.set_ylabel('True Label', fontsize=12)
ax.set_title('Confusion Matrix', fontsize=14, fontweight='bold')

# Add text annotations
for i in range(len(classes)):
    for j in range(len(classes)):
        color = 'white' if cm[i, j] > cm.max()/2 else 'black'
        ax.text(j, i, cm[i, j], ha='center', va='center', color=color, fontsize=14)

plt.tight_layout()
plt.show()

# Calculate metrics
accuracy = np.trace(cm) / cm.sum()
print(f"Overall Accuracy: {accuracy:.1%}")`,
          language: 'python'
        }
      ],

      dos: [
        'Use object-oriented API for complex, reusable plots',
        'Always add labels, titles, and legends for clarity',
        'Use tight_layout() to prevent overlapping elements',
        'Save figures with high DPI for publications'
      ],

      donts: [
        'Don\'t mix pyplot and OO styles in the same script',
        'Don\'t forget to close figures (plt.close()) in loops',
        'Don\'t use default colors for presentations - customize',
        'Don\'t hardcode figure sizes - make them configurable'
      ],

      quiz: [
        {
          question: 'What is the relationship between Figure and Axes in Matplotlib?',
          options: ['They are the same thing', 'Figure contains one or more Axes', 'Axes contains Figures', 'They are unrelated'],
          correctAnswer: 1,
          explanation: 'A Figure is the top-level container (like a canvas) that can contain one or more Axes (individual plots). Each Axes has its own coordinate system and plot elements.'
        },
        {
          question: 'Which method prevents subplot labels from overlapping?',
          options: ['plt.fix()', 'plt.tight_layout()', 'plt.adjust()', 'plt.space()'],
          correctAnswer: 1,
          explanation: 'tight_layout() automatically adjusts subplot parameters so that subplots fit nicely within the figure without overlapping labels or titles.'
        }
      ]
    },

    {
      id: 2,
      title: 'Seaborn for Statistical Visualization',
      description: 'Beautiful statistical graphics with minimal code',
      
      overview: `Seaborn is built on Matplotlib and provides a high-level interface for statistical graphics. It automatically handles many design choices, produces publication-ready plots with minimal code, and integrates seamlessly with Pandas DataFrames.

Key advantages: built-in themes for aesthetics, automatic aggregation and error bars, faceting (small multiples), and statistical estimation. Common plots include distribution plots (histplot, kdeplot), categorical plots (boxplot, violinplot, barplot), and relationship plots (scatterplot, lineplot, heatmap).

For ML, Seaborn excels at exploratory data analysis (EDA), feature correlation analysis, distribution comparisons, and understanding relationships in your data before modeling.`,

      keyPoints: [
        'High-level interface built on Matplotlib',
        'Works seamlessly with Pandas DataFrames',
        'Automatic statistics: means, confidence intervals, aggregation',
        'Beautiful default themes and color palettes',
        'Perfect for EDA and feature analysis in ML'
      ],

      useCases: [
        { title: 'Correlation Heatmap', description: 'Visualize feature correlations', example: 'Find which features are related before modeling' },
        { title: 'Distribution Analysis', description: 'Compare distributions across groups', example: 'Compare salary distributions by job title' },
        { title: 'Pair Plots', description: 'Visualize all pairwise relationships', example: 'Quick overview of entire dataset' },
        { title: 'Categorical Analysis', description: 'Compare metrics across categories', example: 'Model accuracy by hyperparameter values' }
      ],

      codeExamples: [
        {
          title: 'Complete EDA with Seaborn',
          code: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Create sample ML dataset
np.random.seed(42)
n = 200
data = pd.DataFrame({
    'feature_1': np.random.normal(50, 15, n),
    'feature_2': np.random.normal(100, 25, n),
    'feature_3': np.random.exponential(20, n),
    'target': np.random.choice(['Class A', 'Class B', 'Class C'], n),
    'score': np.random.uniform(0.5, 1.0, n)
})

# Set style
sns.set_theme(style="whitegrid", palette="husl")

# Create figure with multiple plots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 1. Distribution plot
sns.histplot(data=data, x='feature_1', hue='target', kde=True, ax=axes[0,0])
axes[0,0].set_title('Feature 1 Distribution by Class')

# 2. Box plot
sns.boxplot(data=data, x='target', y='feature_2', ax=axes[0,1])
axes[0,1].set_title('Feature 2 by Target Class')

# 3. Scatter with regression
sns.regplot(data=data, x='feature_1', y='score', ax=axes[1,0], scatter_kws={'alpha':0.5})
axes[1,0].set_title('Feature 1 vs Score (with regression)')

# 4. Violin plot
sns.violinplot(data=data, x='target', y='feature_3', ax=axes[1,1])
axes[1,1].set_title('Feature 3 Distribution by Class')

plt.tight_layout()
plt.show()

# Correlation heatmap (separate figure)
plt.figure(figsize=(8, 6))
numeric_cols = data.select_dtypes(include=[np.number])
sns.heatmap(numeric_cols.corr(), annot=True, cmap='coolwarm', center=0, 
            square=True, linewidths=0.5)
plt.title('Feature Correlation Matrix', fontsize=14, fontweight='bold')
plt.tight_layout()
plt.show()

print("✅ EDA complete! Key insights:")
print("- Check distributions for normality")
print("- Look for correlations > 0.7 (potential multicollinearity)")
print("- Compare class distributions for imbalance")`,
          language: 'python'
        }
      ],

      dos: [
        'Use sns.set_theme() at the start for consistent styling',
        'Pass DataFrames directly - Seaborn handles column names',
        'Use hue parameter to add categorical dimensions',
        'Combine with FacetGrid for complex multi-plot layouts'
      ],

      donts: [
        'Don\'t use Seaborn for non-statistical plots (use Matplotlib)',
        'Don\'t forget data preprocessing - Seaborn shows what you give it',
        'Don\'t overload plots with too many categories',
        'Don\'t ignore the warnings about missing data'
      ],

      quiz: [
        {
          question: 'What is the main advantage of Seaborn over pure Matplotlib?',
          options: ['Faster rendering', 'Automatic statistical aggregation and styling', 'More plot types', 'Better 3D support'],
          correctAnswer: 1,
          explanation: 'Seaborn automatically handles statistical calculations (means, confidence intervals, etc.) and provides beautiful default styling, making it ideal for exploratory data analysis.'
        },
        {
          question: 'Which Seaborn plot shows the distribution shape including density estimation?',
          options: ['barplot', 'histplot with kde=True', 'scatterplot', 'boxplot'],
          correctAnswer: 1,
          explanation: 'histplot with kde=True shows both the histogram bars and a smooth kernel density estimation curve, giving you a complete picture of the data distribution.'
        }
      ]
    },

    {
      id: 3,
      title: 'Plotly for Interactive Visualizations',
      description: 'Create interactive, web-ready charts and dashboards',
      
      overview: `Plotly creates interactive visualizations that users can zoom, pan, hover, and explore. Charts render in web browsers and can be embedded in websites, Jupyter notebooks, or dashboards. It's essential for communicating AI results to stakeholders.

Plotly Express provides a high-level API similar to Seaborn, while Graph Objects offers fine-grained control. Key features: hover tooltips showing data values, zoom/pan for exploration, animations for time series, and 3D plots for high-dimensional data.

For ML, Plotly excels at interactive model exploration, comparing model performance, visualizing high-dimensional embeddings (t-SNE, UMAP), and building shareable dashboards for stakeholders.`,

      keyPoints: [
        'Interactive charts - zoom, pan, hover, click',
        'Web-native - works in browsers, notebooks, websites',
        'Plotly Express for quick plots, Graph Objects for control',
        'Built-in animations for time-series data',
        '3D plots for high-dimensional visualization'
      ],

      useCases: [
        { title: 'Model Comparison Dashboard', description: 'Interactive comparison of models', example: 'Hover to see exact accuracy, F1, precision for each model' },
        { title: 'Embedding Visualization', description: 'Explore t-SNE/UMAP clusters', example: 'Click points to see which data samples cluster together' },
        { title: 'Time Series Analysis', description: 'Zoom into specific time periods', example: 'Explore stock predictions with zoom and range slider' },
        { title: 'Stakeholder Reports', description: 'Share interactive reports', example: 'Export as HTML for non-technical stakeholders' }
      ],

      codeExamples: [
        {
          title: 'Interactive ML Model Comparison',
          code: `import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd

# Model comparison data
models_df = pd.DataFrame({
    'Model': ['Logistic Regression', 'Random Forest', 'XGBoost', 'Neural Network', 'SVM'],
    'Accuracy': [0.82, 0.89, 0.91, 0.88, 0.85],
    'F1_Score': [0.80, 0.87, 0.90, 0.86, 0.83],
    'Training_Time': [0.5, 2.3, 1.8, 15.2, 3.1],
    'Inference_Time': [0.01, 0.05, 0.03, 0.08, 0.02]
})

# Interactive bar chart
fig = px.bar(models_df, x='Model', y=['Accuracy', 'F1_Score'],
             barmode='group',
             title='Model Performance Comparison',
             labels={'value': 'Score', 'variable': 'Metric'},
             color_discrete_sequence=['#2ecc71', '#3498db'])

fig.update_layout(
    hovermode='x unified',
    legend=dict(orientation='h', yanchor='bottom', y=1.02),
    template='plotly_white'
)

fig.show()

# Scatter: Accuracy vs Training Time (trade-off analysis)
fig2 = px.scatter(models_df, x='Training_Time', y='Accuracy',
                  size='F1_Score', color='Model',
                  hover_data=['Inference_Time'],
                  title='Accuracy vs Training Time Trade-off',
                  labels={'Training_Time': 'Training Time (seconds)',
                         'Accuracy': 'Accuracy Score'})

fig2.update_traces(marker=dict(sizemin=10, sizeref=0.1))
fig2.update_layout(template='plotly_white')
fig2.show()

# Save as interactive HTML
fig2.write_html('model_comparison.html')
print("✅ Interactive chart saved as model_comparison.html")
print("📤 Share this file with stakeholders - no Python needed to view!")`,
          language: 'python'
        },
        {
          title: '3D t-SNE Visualization',
          code: `import plotly.express as px
import numpy as np
import pandas as pd

# Simulated t-SNE embeddings (3D)
np.random.seed(42)
n_samples = 300

# Create 3 clusters
cluster_centers = [(0, 0, 0), (5, 5, 5), (-5, 3, -3)]
clusters = []

for i, center in enumerate(cluster_centers):
    cluster = np.random.randn(n_samples//3, 3) + center
    clusters.append(cluster)

embeddings = np.vstack(clusters)
labels = ['Class A'] * 100 + ['Class B'] * 100 + ['Class C'] * 100

df = pd.DataFrame({
    'x': embeddings[:, 0],
    'y': embeddings[:, 1],
    'z': embeddings[:, 2],
    'label': labels,
    'sample_id': range(len(labels))
})

# Interactive 3D scatter
fig = px.scatter_3d(df, x='x', y='y', z='z',
                    color='label',
                    hover_data=['sample_id'],
                    title='t-SNE 3D Embedding Visualization',
                    opacity=0.7)

fig.update_traces(marker=dict(size=5))
fig.update_layout(
    scene=dict(
        xaxis_title='t-SNE 1',
        yaxis_title='t-SNE 2', 
        zaxis_title='t-SNE 3'
    ),
    template='plotly_white'
)

fig.show()
print("🔄 Rotate, zoom, and hover to explore clusters!")`,
          language: 'python'
        }
      ],

      dos: [
        'Use Plotly Express for 90% of use cases - it\'s simpler',
        'Add hover_data for additional context on data points',
        'Export as HTML for sharing with non-technical users',
        'Use templates (plotly_white, plotly_dark) for clean looks'
      ],

      donts: [
        'Don\'t create too many interactive elements - overwhelms users',
        'Don\'t use for static reports (PDF) - interactivity is lost',
        'Don\'t forget to handle large datasets (use sampling)',
        'Don\'t ignore performance with >10k points (use scattergl)'
      ],

      quiz: [
        {
          question: 'How can you share a Plotly chart with someone who doesn\'t have Python?',
          options: ['You cannot', 'Export as PNG only', 'Export as interactive HTML file', 'Email the Python code'],
          correctAnswer: 2,
          explanation: 'Plotly charts can be exported as standalone HTML files that open in any web browser, preserving all interactivity without requiring Python.'
        },
        {
          question: 'Which Plotly module provides a high-level, Seaborn-like interface?',
          options: ['plotly.graph_objects', 'plotly.express', 'plotly.figure_factory', 'plotly.subplots'],
          correctAnswer: 1,
          explanation: 'Plotly Express (px) provides a concise, high-level API similar to Seaborn, creating complex interactive charts with minimal code.'
        }
      ]
    },

    {
      id: 4,
      title: 'Streamlit for ML Dashboards',
      description: 'Build interactive ML apps and dashboards in minutes',
      
      overview: `Streamlit transforms Python scripts into interactive web apps without any frontend knowledge. Write Python, get a web app. It's the fastest way to share ML models with stakeholders, create demos, and build data apps.

Key features: widgets (sliders, dropdowns, file uploaders), caching for performance, real-time updates, and easy deployment. Unlike Jupyter notebooks, Streamlit apps are shareable, professional-looking, and don't expose code.

For ML, Streamlit is perfect for model demos, hyperparameter experimentation, data exploration tools, and presenting results to non-technical stakeholders. Combined with Plotly, you get interactive dashboards in minutes.`,

      keyPoints: [
        'Python script → web app with one command',
        'No HTML/CSS/JavaScript knowledge required',
        'Widgets: sliders, buttons, file upload, text input',
        'Caching (@st.cache_data) for expensive computations',
        'Free deployment on Streamlit Cloud'
      ],

      useCases: [
        { title: 'Model Demo', description: 'Let users interact with your ML model', example: 'Upload image → model predicts → show results' },
        { title: 'Hyperparameter Explorer', description: 'Tune parameters interactively', example: 'Sliders for learning rate, epochs → see live training curves' },
        { title: 'Data Explorer', description: 'Interactive EDA tool', example: 'Select columns, filter data, visualize distributions' },
        { title: 'Report Dashboard', description: 'Live metrics and KPIs', example: 'Auto-updating model performance dashboard' }
      ],

      codeExamples: [
        {
          title: 'Complete ML Model Demo App',
          code: `# Save as app.py and run: streamlit run app.py

import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px

# Page config
st.set_page_config(
    page_title="ML Model Demo",
    page_icon="🤖",
    layout="wide"
)

# Title
st.title("🤖 Machine Learning Model Demo")
st.markdown("Explore how different parameters affect model predictions")

# Sidebar for inputs
st.sidebar.header("Model Parameters")

model_type = st.sidebar.selectbox(
    "Select Model",
    ["Random Forest", "XGBoost", "Neural Network"]
)

n_estimators = st.sidebar.slider(
    "Number of Estimators",
    min_value=10, max_value=500, value=100, step=10
)

learning_rate = st.sidebar.slider(
    "Learning Rate",
    min_value=0.001, max_value=1.0, value=0.1, step=0.01
)

# Main content in columns
col1, col2 = st.columns(2)

with col1:
    st.subheader("📊 Training Metrics")
    
    # Simulated metrics based on parameters
    np.random.seed(n_estimators)
    accuracy = 0.7 + 0.2 * (1 - np.exp(-n_estimators/100)) + np.random.normal(0, 0.02)
    accuracy = min(0.99, max(0.5, accuracy))
    
    st.metric("Accuracy", f"{accuracy:.1%}", delta=f"+{(accuracy-0.7)*100:.1f}%")
    st.metric("F1 Score", f"{accuracy-0.02:.1%}")
    st.metric("Training Time", f"{n_estimators * 0.1:.1f}s")

with col2:
    st.subheader("📈 Learning Curve")
    
    # Generate learning curve
    epochs = np.arange(1, 51)
    train_loss = 2 * np.exp(-0.1 * epochs * learning_rate * 10) + 0.1
    val_loss = train_loss + 0.1 + np.random.normal(0, 0.02, 50)
    
    df_curve = pd.DataFrame({
        'Epoch': epochs,
        'Training Loss': train_loss,
        'Validation Loss': val_loss
    })
    
    fig = px.line(df_curve, x='Epoch', y=['Training Loss', 'Validation Loss'],
                  title=f'{model_type} Training Progress')
    st.plotly_chart(fig, use_container_width=True)

# Feature importance
st.subheader("🎯 Feature Importance")

features = ['Age', 'Income', 'Credit Score', 'Tenure', 'Balance']
importance = np.random.dirichlet(np.ones(5)) * 100

fig_importance = px.bar(
    x=importance, y=features,
    orientation='h',
    labels={'x': 'Importance (%)', 'y': 'Feature'},
    title='Top Features'
)
st.plotly_chart(fig_importance, use_container_width=True)

# File upload section
st.subheader("📤 Try Your Own Data")
uploaded_file = st.file_uploader("Upload CSV file", type=['csv'])

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    st.write("Data Preview:")
    st.dataframe(df.head())
    st.success(f"✅ Loaded {len(df)} rows and {len(df.columns)} columns")

# Footer
st.markdown("---")
st.markdown("Built with ❤️ using Streamlit | [Documentation](https://docs.streamlit.io)")`,
          language: 'python'
        }
      ],

      dos: [
        'Use @st.cache_data for expensive computations',
        'Organize with st.sidebar, st.columns, st.tabs',
        'Add st.spinner() for loading feedback',
        'Deploy free on Streamlit Cloud (share.streamlit.io)'
      ],

      donts: [
        'Don\'t put heavy computations outside cached functions',
        'Don\'t create too many widgets - overwhelms users',
        'Don\'t forget error handling for user inputs',
        'Don\'t store sensitive data in session state'
      ],

      quiz: [
        {
          question: 'How do you run a Streamlit app?',
          options: ['python app.py', 'streamlit run app.py', 'flask run app.py', 'npm start'],
          correctAnswer: 1,
          explanation: 'Streamlit apps are run with the command "streamlit run app.py", which starts a local server and opens the app in your browser.'
        },
        {
          question: 'Which decorator caches expensive computations in Streamlit?',
          options: ['@st.memo', '@st.cache_data', '@cache', '@st.save'],
          correctAnswer: 1,
          explanation: '@st.cache_data is the recommended way to cache data-returning functions in Streamlit, preventing re-computation when inputs haven\'t changed.'
        }
      ]
    }
  ]
};

export { dataVisualization };
export default dataVisualization;
