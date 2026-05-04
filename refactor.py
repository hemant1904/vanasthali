import os
import re

src_dir = r"c:\Users\heman\vanasthali\src"
pages_dir = os.path.join(src_dir, "pages")
components_dir = os.path.join(src_dir, "components")

# 1. Update App.jsx timeout
app_path = os.path.join(src_dir, "App.jsx")
with open(app_path, "r", encoding="utf-8") as f:
    app_content = f.read()
app_content = app_content.replace("}, 0);", "}, 500);")
with open(app_path, "w", encoding="utf-8") as f:
    f.write(app_content)

# 2. Update AboutPage.jsx Counter
about_path = os.path.join(pages_dir, "AboutPage.jsx")
with open(about_path, "r", encoding="utf-8") as f:
    about_content = f.read()

about_content = about_content.replace('import { useEffect, useState } from "react";', 'import { useEffect, useState, useRef } from "react";')

counter_old = """  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [target]);

    return <span>{count.toLocaleString()}+</span>;
  };"""

counter_new = """  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [target, isVisible]);

    return <span ref={ref}>{count.toLocaleString()}+</span>;
  };"""

about_content = about_content.replace(counter_old, counter_new)
with open(about_path, "w", encoding="utf-8") as f:
    f.write(about_content)


# 3. Beautify ProgramsPage.jsx
programs_path = os.path.join(pages_dir, "ProgramsPage.jsx")
with open(programs_path, "r", encoding="utf-8") as f:
    programs_content = f.read()

# Change items-center to items-stretch for grids
programs_content = programs_content.replace('items-center mb-20', 'items-stretch mb-20')
programs_content = programs_content.replace('items-center mb-12', 'items-stretch mb-12')
programs_content = programs_content.replace('items-center mb-20 dir-rtl lg:[direction:rtl]', 'items-stretch mb-20 dir-rtl lg:[direction:rtl]')

# Ensure images cover fully to match height
programs_content = programs_content.replace('className="rounded-[12px] overflow-hidden shadow-md">', 'className="rounded-[12px] overflow-hidden shadow-md flex">')
programs_content = programs_content.replace('className="w-full h-auto object-cover"', 'className="w-full h-full object-cover min-h-[300px]"')
programs_content = programs_content.replace('className="w-full h-auto object -cover"', 'className="w-full h-full object-cover min-h-[300px]"') # Fix typo in orig file

# Update text colors and sizes
programs_content = programs_content.replace('text-[2rem] text-primary font-bold mb-4', 'text-[2rem] md:text-3xl text-green-700 font-bold mb-4 inline-block border-b-4 border-green-600 pb-2')
programs_content = programs_content.replace('text-[#666] mb-6', 'text-gray-700 leading-relaxed text-[1.1rem] mb-6')
programs_content = programs_content.replace('className="flex flex-col gap-2"', 'className="flex flex-col gap-3 text-gray-700 text-[1.05rem]"')
programs_content = programs_content.replace('text-primary shrink-0 mt-1', 'text-green-700 shrink-0 mt-1')

# Add flex layout to content side to center vertically if items are stretched
programs_content = programs_content.replace('            <div>\n              <h3', '            <div className="flex flex-col justify-center">\n              <h3')
programs_content = programs_content.replace('            <div className="lg:[direction:ltr]">\n              <h3', '            <div className="lg:[direction:ltr] flex flex-col justify-center">\n              <h3')

with open(programs_path, "w", encoding="utf-8") as f:
    f.write(programs_content)


# 4. Merge HomePage components
home_path = os.path.join(pages_dir, "HomePage.jsx")

components_to_merge = [
    "HeroSlider.jsx",
    "StatsSection.jsx",
    "LeadingNGOSection.jsx",
    "FounderSection.jsx",
    "Timeline.jsx",
    "CTASection.jsx"
]

merged_imports = set([
    "import { useState, useEffect, useRef } from 'react';",
    "import { Button } from '@mui/material';",
    "import { Link } from 'react-router-dom';"
])
merged_body = []

for comp in components_to_merge:
    comp_path = os.path.join(components_dir, comp)
    if os.path.exists(comp_path):
        with open(comp_path, "r", encoding="utf-8") as f:
            content = f.read()
            # Extract content after imports
            lines = content.splitlines()
            body_lines = []
            for line in lines:
                if line.startswith("import "):
                    pass
                elif line.startswith("export default "):
                    pass
                else:
                    body_lines.append(line)
            merged_body.append("\\n".join(body_lines))

final_home_content = "\\n".join(list(merged_imports)) + "\\n\\n"
final_home_content += "\\n\\n".join(merged_body) + "\\n\\n"
final_home_content += """const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <LeadingNGOSection />
      <FounderSection />
      <Timeline />
      <CTASection />
    </>
  );
};

export default HomePage;
"""

with open(home_path, "w", encoding="utf-8") as f:
    f.write(final_home_content)

# Delete old component files to avoid confusion
for comp in components_to_merge:
    comp_path = os.path.join(components_dir, comp)
    if os.path.exists(comp_path):
        os.remove(comp_path)

print("Done")
