import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export const ProjectCard = ({ name, description, link, repo, img }) => {
  
  return (
    <Card isFooterBlurred className="border-none flex flex-col justify-center" radius="2xl">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold uppercase text-large">{name}</h4>
        <p className="text-tiny text-large">{description}</p>
      </CardHeader>
      <CardBody className="overflow-visible p-6">
        <img src={img} alt="" className="rounded-lg" />
      </CardBody>
      <CardFooter className="flex items-center justify-center bg-white/10 border-white/20 border-[1px] py-2 rounded-lg shadow-small w-full z-10 gap-2">
        <Button className="bg-emerald-600 text-white"  isIconOnly aria-label="Like"> <Github></Github></Button>
        <Button className="text-emerald-600" color="success" variant="bordered">Ver sitio <ExternalLink></ExternalLink></Button>
      </CardFooter>
    </Card>

  );
};

export default ProjectCard;
