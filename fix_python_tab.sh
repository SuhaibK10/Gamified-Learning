#!/bin/bash
# ─────────────────────────────────────────────
# JS Arena — Python Tab Fix
# Run this from your project root folder
# ─────────────────────────────────────────────

echo "🔧 Patching Dashboard.js..."

# Change 1 — Add PYTHON_TOPICS to import
sed -i '' 's/shuffle, JS_TOPICS, REACT_TOPICS } from/shuffle, JS_TOPICS, REACT_TOPICS, PYTHON_TOPICS } from/' components/Dashboard.js

# Change 2 — Add Python to SECTIONS array
sed -i '' "s/const SECTIONS = \['All', 'JavaScript', 'React'\]/const SECTIONS = ['All', 'JavaScript', 'React', 'Python']/" components/Dashboard.js

# Change 3a — Add Python to getTopicsForSection
sed -i '' "s/if (section === 'React') return REACT_TOPICS;/if (section === 'React') return REACT_TOPICS;\n  if (section === 'Python') return PYTHON_TOPICS;/" components/Dashboard.js

# Change 3b — Add Python to getQuestionsForSection
sed -i '' "s/if (section === 'React') return QUESTIONS.filter(q => q.t.startsWith('React:'));/if (section === 'React') return QUESTIONS.filter(q => q.t.startsWith('React:'));\n  if (section === 'Python') return QUESTIONS.filter(q => PYTHON_TOPICS.includes(q.t));/" components/Dashboard.js

# Change 4a — Add Python emoji
sed -i '' "s/s === 'React' ? '⚛️ ' : '🎯 '/s === 'React' ? '⚛️ ' : s === 'Python' ? '🐍 ' : '🎯 '/" components/Dashboard.js

# Change 4b — Add Python color
sed -i '' "s/s === 'React' ? 'bg-sky\/15 text-sky' : 'bg-sage\/15 text-sage'/s === 'React' ? 'bg-sky\/15 text-sky' : s === 'Python' ? 'bg-laven\/15 text-laven' : 'bg-sage\/15 text-sage'/" components/Dashboard.js

echo "✅ Dashboard.js patched"

echo "🔧 Patching lib/questions.js..."

# Add PYTHON_TOPICS export at the end of questions.js
cat >> lib/questions.js << 'EOF'

export const PYTHON_TOPICS = TOPICS.filter(t =>
  ['NumPy Arrays', 'NumPy Random', 'Pandas 1', 'Pandas 2',
   'Pandas Basics', 'EDA', 'Matplotlib', 'Seaborn',
   'Matplotlib & Seaborn'].includes(t)
);
EOF

echo "✅ lib/questions.js patched"
echo ""
echo "🎉 Done! Run: npm run dev to test"