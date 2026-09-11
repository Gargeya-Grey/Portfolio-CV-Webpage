import { ArrowUpRight, Code2, PenTool, FolderOpen } from "lucide-react";
import { projects, type Project, type ProjectType } from "@/lib/data";

const PROJECT_ICONS = {
    writing: PenTool,
    academic: FolderOpen,
    repo: Code2,
} as const satisfies Record<ProjectType, typeof Code2>;

export default function Lab() {
    return (
        <section
            id="lab"
            className="relative w-full scroll-mt-20 py-16 sm:py-24 md:py-32 lg:py-40"
        >
            <div className="container mx-auto px-page max-w-6xl">
                <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        </div>
                        <h2 className="text-[11px] sm:text-sm font-bold text-teal-700 tracking-widest uppercase">The Lab</h2>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.15] break-balance">
                        Experimental code, research papers, and{" "}
                        <span className="font-semibold text-teal-700">mechanics of intelligence</span>.
                    </h3>
                </div>

                <div className="reveal-list grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {projects.map((project, index) => (
                        <LabCard key={project.title} project={project} featured={index === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LabCard({
    project,
    featured,
}: {
    project: Project;
    featured: boolean;
}) {
    const Icon = PROJECT_ICONS[project.type];

    return (
        <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`pressable block group h-full ${featured ? "sm:col-span-2 xl:col-span-2" : ""}`}
        >
            <article
                className={`interactive-card card-shine relative h-full min-h-[18rem] rounded-2xl sm:rounded-3xl border bg-white/90 p-5 sm:p-6 md:p-8 flex flex-col ${
                    project.isLatest
                        ? "border-teal-500/40 shadow-[0_16px_36px_rgba(13,148,136,0.08)]"
                        : "border-zinc-200/90 shadow-[0_12px_28px_rgba(0,0,0,0.04)]"
                }`}
            >
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shrink-0 transition-colors duration-[180ms] ease ${
                            project.isLatest
                                ? "bg-teal-50 border-teal-100 text-teal-600"
                                : "bg-zinc-50 border-zinc-100 text-zinc-400 group-hover:text-teal-600 group-hover:bg-teal-50"
                        }`}
                    >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    {project.isLatest && (
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/40 text-[9px] font-black text-teal-700 tracking-widest uppercase">
                            Latest
                        </span>
                    )}
                </div>

                <h3
                    className={`font-semibold tracking-tight mb-2 transition-colors duration-[180ms] ease ${
                        featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    } ${project.isLatest ? "text-zinc-900 group-hover:text-teal-800" : "text-zinc-900 group-hover:text-teal-900"}`}
                >
                    {project.title}
                </h3>

                <p className={`text-sm sm:text-base text-zinc-600 leading-relaxed font-body mb-5 flex-1 ${featured ? "" : "line-clamp-5"}`}>
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/80 border border-zinc-200/60 text-zinc-600 shadow-sm group-hover:border-teal-200 group-hover:text-teal-700 transition-colors duration-[180ms] ease font-body"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-teal-600 transition-colors duration-[180ms] ease">
                        {project.type === "writing" ? "Read Article" : "View Code"}{" "}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-[220ms] ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                </div>
            </article>
        </a>
    );
}
