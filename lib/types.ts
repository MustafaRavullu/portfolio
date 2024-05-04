type TSectionName = "About" | "Experience" | "Projects";

type TActiveSectionContext = {
  active: TSectionName;
  setActive: React.Dispatch<React.SetStateAction<TSectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

type TNavLinks = {
  name: TSectionName;
  link: string;
}[];

type TProjectCard = {
  link: string;
  title: string;
  description: string;
  usedTechs: string[];
  imgUrl: string;
};

type TExperienceCard = {
  timePeriod: string;
  link: string;
  title: string;
  description: string;
  usedTechs: string[];
};
