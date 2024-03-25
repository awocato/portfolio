import { skills } from "@/data/data";

function SkillsPage() {
  return (
    <div>
      <div className="flex justify-center mb-5">
        <h1 className="text-3xl font-bold black dark:text-pinkish text-greenish">
          MY SKILLS
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-4 lg:mx-20 sm:mx-20 xl:mx-36">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="w-full sm:w-48 justify-self-center h-32 skill-card md:h-48 m-2 relative cursor-pointer"
          >
            <div className="absolute rounded-lg skill-card-front w-full h-full bg-white  flex justify-center items-center">
              <div className="md:text-9xl text-6xl text-gray-800">
                {skill.icon}
              </div>
            </div>
            <div className="absolute rounded-lg skill-card-back w-full h-full px-5 dark:bg-pinkish bg-greenish text-white flex flex-col justify-center items-center transform rotate-y-180">
              <h1 className="text-2xl font-bold">{skill.name}</h1>
              <p>{skill.proficency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
