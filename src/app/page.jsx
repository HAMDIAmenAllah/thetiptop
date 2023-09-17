import ModalNewsLetters from "@/components/modalNewsLetters/ModalNewsLetters";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="text-white flex items-center justify-center px-5 lg:mt-16 w-full max-w-[1560px] mx-auto">
      {/* div main */}
      <div className="flex items-center gap-x-20 justify-center">
        <div className="hidden lg:block">
          <img src="/assets/images/tea.svg" srcSet="/assets/images/tea.svg" alt="tasse de thé infusion" />
        </div>
        <div className="flex flex-col gap-y-8 max-w-[656px]">
          <h1 className="text-2xl text-center font-bold pt-10 lg:pt-10 lg:text-right lg:text-4xl xl:text-5xl">
            SAUTEZ SUR L’OCCASION AVEC ThéTipTop
          </h1>
          <p className=" text-center font-light leading-[29px] lg:text-right text-xl xl:text-2xl">
            Pour l’ouverture de notre 10ème boutique, nous avons organisé un jeu
            concours où vous êtes 100% gagnant
          </p>
          <ModalNewsLetters></ModalNewsLetters>
          <Image
            src="/assets/images/tasse.svg"
            srcSet="/assets/images/tasse.svg"
            width={373}
            height={373}
            className="lg:hidden mx-auto"
            alt="tasse de thé infusion"
          />
          <Link
            href="/quizzes"
            className="max-w-[350px] mx-auto bg-greenTip py-2 px-11 rounded-[100px] lg:self-end lg:mx-0 lg:mb-0"
          >
            JOUER MAINTENANT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
