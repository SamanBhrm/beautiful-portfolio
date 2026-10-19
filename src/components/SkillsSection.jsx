const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = [
  { id: "frontend", title: "Frontend Development" },
  { id: "backend", title: "Backend Development" },
  { id: "tools", title: "Tools & Technologies" },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build modern web experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter((category) =>
              skills.some((skill) => skill.category === category.id)
            )
            .map((category) => (
              <div
                key={category.id}
                className="bg-card p-6 rounded-xl shadow-xs card-hover border border-border/50"
              >
                <h3 className="font-semibold text-lg mb-6">
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>

                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full animate-[grow_1.5s_ease-out_forwards]"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};