// import PlaygroundClient from "@/app/components/playground/PlaygroundClient";
import ComingSoon from "@/app/components/ui/ComingSoon";

export const metadata = {
  title: "Playground | Fikri Hidayat",
  description:
    "An interactive math & coding sandbox showcasing the intersection of mathematical theory and web programming.",
};

export default function PlaygroundPage() {
  // return <PlaygroundClient />;
  return (
    <ComingSoon
      title="Math & Code Playground"
      subtitle="I am currently developing interactive visual simulations that bridge mathematical theories with creative programming. This experimental sandbox is coming soon!"
      mathTheme={true}
    />
  );
}
