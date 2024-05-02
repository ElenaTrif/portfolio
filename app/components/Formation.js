import React from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const Formation = () => {
    return (
        <div className="mt-16" id="formation">
            <h1 className={`${title()} relative`}>
                Formation
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
            </h1>
            <Card className="max-w-[400px] mt-10">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/assets/skills/HTML.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Intégrateur développeur web</p>
                        <p className="text-small text-default-500">Openclassrooms</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Formation en ligne, Titre professionnel niveau 5.</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <p>Jul, 2023 - Mai, 2024</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Formation;
