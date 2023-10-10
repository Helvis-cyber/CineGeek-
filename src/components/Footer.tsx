
import { Typography } from "@material-tailwind/react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Helvis Santos
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={scrollToTop}
          >
            Voltar ao Topo
          </button>
        </li>

        <li>
          <Typography
            as="a"
            href="https://www.linkedin.com/in/helvis-correia-dos-santos-64410326b/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Entre em contato
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
