import ToggleTheme from "@/components/fragments/toggle- theme";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="relative flex justify-center items-center h-screen w-full">
      <div className="my-6 flex justify-center items-center flex-col gap-3">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Gradual Spacing"
        />
        <RainbowButton>
          <Link href={"/products"}>Get Unlimited Access</Link>
        </RainbowButton>
      </div>
      <ToggleTheme />
    </section>
  );
};

export default Home;
