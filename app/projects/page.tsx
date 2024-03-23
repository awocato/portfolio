import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projects } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

function Projects() {
  return (
    <div className=" flex items-center flex-col px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 black flex dark:text-pinkish text-greenish">
        MY PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-30 xl:mx-40 md:mx-15 mx-5 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="shadow-md flex flex-col rounded-lg dark:bg-slate-800/75 transform transition-transform duration-500 hover:scale-105"
          >
            <CardHeader>
              <CardTitle className=" dark:text-pinkish text-greenish">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <Image
                className="rounded-md"
                width={500}
                height={500}
                src={project.image as string}
                alt={project.name}
              />
                <p className="hidden md:block mb-2 mt-2">
                      {project.description}
                    </p>
              <Accordion className="md:hidden" type="single" collapsible>
                <AccordionItem value="item">
                  <AccordionTrigger className="text-start">
                  {project.description.slice(0, 47)}...
                    </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 ">
                      {project.description.slice(47, project.description.length)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 cursor-pointer rounded-full bg-gray-200  text-gray-600 text-sm transform transition-transform duration-500 hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between ">
              {project.sourceCode && (
                <Link
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Source Code
                  <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              )}
              {project.livePreview && (
                <Link
                  href={project.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Live Preview
                  <div className="dark:bg-[#f0696e] bg-[#4f772d] h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
