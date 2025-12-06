import { Brain, Code2, Smartphone, CheckCircle2 } from "lucide-react";
import React from "react";

type SkillItem = {
    label: string;
    values: string;
};

type SkillCategory = {
    title: string;
    icon: React.ReactNode;
    accentTextClass: string;
    accentShadowHoverClass: string;
    gradient: string; // tailwind gradient classes
    items: SkillItem[];
};

const categories: SkillCategory[] = [
    {
        title: "Full-Stack Development",
        icon: <Code2 className="w-5 h-5 md:w-6 md:h-6" />,
        accentTextClass: "text-blue-500",
        accentShadowHoverClass: "hover:shadow-blue-500/10",
        gradient: "from-blue-600/10 via-cyan-500/10 to-indigo-600/10",
        items: [
            { label: "Front-end", values: "React.js, Vue.js, Angular, Tailwind CSS" },
            { label: "Back-end", values: "Node.js, Python, C#" },
            { label: "Databases", values: "PostgreSQL, MongoDB" },
            { label: "Version Control & DevOps", values: "Git, Docker, Kubernetes" },
            { label: "Tools & Frameworks", values: "Express.js, Django, Next.js" }
        ]
    },
    {
        title: "Mobile App Development",
        icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
        accentTextClass: "text-violet-500",
        accentShadowHoverClass: "hover:shadow-violet-500/10",
        gradient: "from-fuchsia-600/10 via-violet-600/10 to-purple-600/10",
        items: [
            { label: "Cross-Platform", values: "React Native, Expo" },
            { label: "Native Development", values: "Dart (Flutter), Kotlin" },
            { label: "Mobile Architecture", values: "REST APIs, GraphQL" }
        ]
    },
    {
        title: "AI/ML Development",
        icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />,
        accentTextClass: "text-emerald-500",
        accentShadowHoverClass: "hover:shadow-emerald-500/10",
        gradient: "from-emerald-600/10 via-teal-600/10 to-green-600/10",
        items: [
            { label: "Machine Learning Frameworks", values: "TensorFlow, PyTorch" },
            { label: "Data Science", values: "Pandas, NumPy, Scikit-Learn" },
            { label: "Cloud & AI APIs", values: "OpenAI, AWS" },
            { label: "Tools", values: "Jupyter, Google Colab" }
        ]
    }
];

export default function SkillSet() {
    return (
        <section className="w-full">
            <h2 className="text-fs-600 font-bold tracking-tight mb-4 sm:mb-6">
                <span className="bg-clip-text text-white">
                    My Skills
                </span>
            </h2>

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        className={`relative rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 hover:shadow-lg ${cat.accentShadowHoverClass}`}
                    >
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.gradient} pointer-events-none`} />
                        <div className="relative flex items-center gap-3 mb-4">
                            <div className={`flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold">{cat.title}</h3>
                        </div>

                        <ul className="relative space-y-3 sm:space-y-3.5">
                            {cat.items.map((item) => (
                                <li key={item.label} className="flex items-start gap-3">
                                    <CheckCircle2 className={`mt-0.5 w-4 h-4 ${cat.accentTextClass}`} />
                                    <p className="text-[13px] sm:text-sm leading-relaxed">
                                        <span className="font-medium">{item.label}:</span>{" "}
                                        <span className="text-muted-foreground">{item.values}</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}