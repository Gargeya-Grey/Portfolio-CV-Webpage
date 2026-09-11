import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";

type EduItem = {
    year: string;
    timeline: string;
    degree: string;
    institution: string;
    location: string;
    performance: string;
    highlights: string[];
    tags: string[];
    icon: typeof Award;
};

const educationData: EduItem[] = [
    {
        year: "2023",
        timeline: "Sep 2022 – Sep 2023",
        degree: "M.S. in Artificial Intelligence",
        institution: "Queen Mary University of London",
        location: "London, UK",
        performance: "Graduated with Distinction",
        highlights: [
            "Rigorous exploration into the mathematical foundations of deep learning architectures, computer vision, and large language models.",
            "Dissertation: Unsupervised Machine Translation using visual signals as rewards for Reinforcement Learning."
        ],
        tags: ["Artificial Intelligence", "Reinforcement Learning", "Computer Vision"],
        icon: Award,
    },
    {
        year: "2022",
        timeline: "Jun 2018 – Aug 2022",
        degree: "B.Tech. in Computer Science",
        institution: "University of Petroleum & Energy Studies",
        location: "Dehradun, India",
        performance: "CGPA: 8.77 (With Honors)",
        highlights: [
            "Specialization in Cyber Security and Forensics with Honors.",
            "Self-taught mastery of Machine Learning and Deep Learning fundamentals, verified by 100+ advanced certifications from Coursera and prestigious global institutions.",
            "Appointed as Student Placement Representative in the final year."
        ],
        tags: ["Computer Science", "Cyber Security", "Machine Learning"],
        icon: BookOpen,
    }
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative w-full scroll-mt-20 py-16 sm:py-24 md:py-32 lg:py-40"
        >
            <div className="container mx-auto px-page max-w-5xl">
                <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                        </div>
                        <h2 className="text-[11px] sm:text-sm font-bold text-teal-700 tracking-widest uppercase">Academic Journey</h2>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.15] break-balance">
                        A foundation of <span className="font-semibold text-teal-700">rigorous curiosity</span>.
                    </h3>
                </div>

                <ol className="edu-timeline relative reveal-list space-y-8 sm:space-y-10 md:space-y-12">
                    {educationData.map((edu) => (
                        <EducationChapter key={edu.year} edu={edu} />
                    ))}
                </ol>
            </div>
        </section>
    );
}

function EducationChapter({ edu }: { edu: EduItem }) {
    const Icon = edu.icon;

    return (
        <li className="relative grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-8 items-start">
            <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-3 sm:pt-2">
                <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-teal-700 text-white shadow-[0_8px_20px_rgba(15,118,110,0.28)]">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-teal-800 tabular-nums tracking-tight">
                    {edu.year}
                </span>
            </div>

            <article className="edu-card card-shine rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 md:p-10">
                <div className="flex flex-col gap-5 sm:gap-6">
                    <header className="space-y-3">
                        <p className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">
                            {edu.timeline}
                        </p>
                        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight leading-tight break-balance">
                            {edu.degree}
                        </h4>
                        <p className="text-base sm:text-lg font-semibold text-zinc-800">
                            {edu.institution}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm sm:text-base text-zinc-500 font-body">
                            <MapPin className="w-4 h-4 shrink-0" aria-hidden />
                            {edu.location}
                        </p>
                    </header>

                    <div className="inline-flex w-fit items-center rounded-full bg-teal-50 border border-teal-100 px-3.5 py-1.5">
                        <span className="text-[10px] font-bold text-teal-700/70 uppercase tracking-widest mr-2">Grade</span>
                        <span className="text-sm sm:text-base font-bold text-teal-800">{edu.performance}</span>
                    </div>

                    <ul className="space-y-3 sm:space-y-4">
                        {edu.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="text-[0.95rem] sm:text-lg text-zinc-700 leading-relaxed font-body pl-4 border-l-2 border-teal-200"
                            >
                                {highlight}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {edu.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 sm:px-3 py-1 rounded-full bg-white border border-zinc-200 text-[11px] sm:text-xs font-semibold text-zinc-700 shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </li>
    );
}
