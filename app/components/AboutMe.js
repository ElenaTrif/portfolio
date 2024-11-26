'use client';
import React, { useState, useEffect } from "react";
import { title } from "../tailwind-config";
import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(null);

  // États locaux pour chaque traduction
  const [whoAmI, setWhoAmI] = useState("");
  const [myPassion, setMyPassion] = useState("");
  const [myCommitment, setMyCommitment] = useState("");
  const [contactMe, setContactMe] = useState("");

  useEffect(() => {
    // Charger la langue depuis localStorage
    const savedLanguage = localStorage.getItem("language") || "fr";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    // Mettre à jour les traductions lorsque la langue change
    setWhoAmI(t("aboutme.whoAmI"));
    setMyPassion(t("aboutme.myPassion"));
    setMyCommitment(t("aboutme.myCommitment"));
    setContactMe(t("aboutme.contactMe"));
  }, [t, i18n.language]);

  if (language === null) return null;

  return (
    <div className="space-y-6 mt-12" id="about">
      <h1 className={`${title()} relative`}>
        {t("aboutme.title")}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]"></span>
      </h1>
      <br />
      <br />
      {/* Section 1 */}
      <Card className="max-w-[1000px] lg:w-[50%]">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            #
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{whoAmI}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t("aboutme.intro") }} />
        </CardBody>
      </Card>

      {/* Section 2 */}
      <Card className="max-w-[1000px] lg:w-[50%] lg:ml-auto">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            !
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{myPassion}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t("aboutme.passion") }} />
        </CardBody>
      </Card>

      {/* Section 3 */}
      <Card className="max-w-[1000px] lg:w-[50%]">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            §
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{myCommitment}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t("aboutme.commitment") }} />
        </CardBody>
      </Card>

      {/* Section 4 */}
      <Card className="max-w-[1000px] lg:w-[50%] lg:ml-auto">
        <CardHeader className="flex gap-3">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            @
          </Chip>
          <div className="flex flex-col">
            <p className="text-lg">{contactMe}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex gap-3">
          <p dangerouslySetInnerHTML={{ __html: t("aboutme.contact") }} />
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutMe;
