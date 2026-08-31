import { Education } from "@/app/types/education";

export const educationList: Education[] = [
  {
    id: "its",
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Mathematics (Sarjana Matematika)",
    period: "Jun 2024 — Present",
    location: "Surabaya, East Java",
    courses: [
      "Computer Algorithms and Programming",
      "Discrete Mathematics",
      "Algebra",
      "Statistical Methods",
      "Calculus"
    ],
  },
  {
    id: "smk",
    school: "SMK Auto Matsuda",
    degree: "Computer and Network Engineering (Teknik Komputer dan Jaringan)",
    period: "Jul 2021 — May 2024",
    location: "Kuningan, West Java",
    gpaOrScore: "Final Score: 87.77",
    honors: [
      "Best Graduate, Class of 2024",
      "Ranked 1st in class for 3 consecutive years (2021 — 2024)"
    ]
  }
];
