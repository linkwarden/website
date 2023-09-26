import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

export default function UseCases() {
  return (
    <div className="min-h-[40rem]">
      <div className="p-5 max-w-7xl mx-auto">
        <p className="lg:text-4xl text-3xl font-bold mb-10 text-center">
          Exploring the Use Cases
        </p>
        <Tab.Group>
          <Tab.List className="grid grid-cols-2 justify-center flex-col md:grid-cols-4 gap-3 w-fit mx-auto lg:text-lg my-5">
            <Tab
              className={({ selected }) =>
                `px-2 py-1 text-sm rounded-xl font-semibold duration-100 border border-[#07334F] ${
                  selected ? "bg-[#07334F]" : "hover:border-[#1e5779]"
                }`
              }
            >
              Personal Use
            </Tab>
            <Tab
              className={({ selected }) =>
                `px-2 py-1 text-sm rounded-xl font-semibold duration-100 border border-[#07334F] ${
                  selected ? "bg-[#07334F]" : "hover:border-[#1e5779]"
                }`
              }
            >
              Education & Learning
            </Tab>
            <Tab
              className={({ selected }) =>
                `px-2 py-1 text-sm rounded-xl font-semibold duration-100 border border-[#07334F] ${
                  selected ? "bg-[#07334F]" : "hover:border-[#1e5779]"
                }`
              }
            >
              Research & Reference
            </Tab>
            <Tab
              className={({ selected }) =>
                `px-2 py-1 text-sm rounded-xl font-semibold duration-100 border border-[#07334F] ${
                  selected ? "bg-[#07334F]" : "hover:border-[#1e5779]"
                }`
              }
            >
              Project Collaboration
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="flex lg:flex-row flex-col-reverse justify-between items-start">
              <div className="w-full">
                <p className="lg:mt-10">
                  Linkwarden can be a valuable tool for personal use, helping
                  individuals stay organized and efficient while browsing the
                  internet. Users can collect and store links to their favorite
                  articles, blog posts, or any other online content they want to
                  revisit later. By organizing these links by categories and
                  tags, users can easily find the information they need when
                  they need it. Moreover, preserving webpages as an archive
                  ensures that even if the original content is removed or
                  altered, users will have a permanent record of the information
                  they found valuable.
                </p>
              </div>
              <Image
                src="./app/personal.png"
                width={14 - 7}
                height={947}
                alt=""
                className="lg:max-w-2xl lg:w-full md:w-3/4 mx-auto rounded-2xl relative z-10"
              />
            </Tab.Panel>
            <Tab.Panel className="flex lg:flex-row flex-col-reverse justify-between items-start">
              <div className="w-full">
                <p className="lg:mt-10">
                  Linkwarden can enhance the learning experience for students
                  and educators alike. Students can bookmark relevant articles,
                  educational videos, and online resources for their coursework
                  and assignments, making it easier to revisit and study them
                  later. Educators can also use the app to curate learning
                  materials for their students, creating a repository of
                  resources tailored to their specific needs. The collaboration
                  feature enables educators and students to collaborate on
                  sharing valuable resources with their colleagues.
                </p>
              </div>
              <Image
                src="./app/study.png"
                width={14 - 7}
                height={947}
                alt=""
                className="lg:max-w-2xl lg:w-full md:w-3/4 mx-auto rounded-2xl relative z-10"
              />
            </Tab.Panel>
            <Tab.Panel className="flex lg:flex-row flex-col-reverse justify-between items-start">
              <div className="w-full">
                <p className="lg:mt-10">
                  For researchers, scholars, and anyone in need of extensive
                  information gathering, Linkwarden serves as an invaluable
                  tool. Researchers can use Linkwarden to collect and organize
                  references for their academic work or any other projects. By
                  archiving the webpages, researchers can be confident that
                  they&apos;ll have access to the information they found during
                  their research, even if the online source gets updated or
                  taken down. The collaboration feature allows multiple
                  researchers to work together, contributing to a collective
                  pool of knowledge.
                </p>
              </div>
              <Image
                src="./app/research.png"
                width={14 - 7}
                height={947}
                alt=""
                className="lg:max-w-2xl lg:w-full md:w-3/4 mx-auto rounded-2xl relative z-10"
              />
            </Tab.Panel>
            <Tab.Panel className="flex lg:flex-row flex-col-reverse justify-between items-start">
              <div className="w-full">
                <p className="lg:mt-10">
                  For collaborative projects involving multiple team members,
                  Linkwarden streamlines information sharing and collaboration.
                  Team members can collectively gather and organize web links
                  related to their project. This ensures everyone has access to
                  essential resources and references while working together.
                </p>
              </div>
              <Image
                src="./app/project.png"
                width={14 - 7}
                height={947}
                alt=""
                className="lg:max-w-2xl lg:w-full md:w-3/4 mx-auto rounded-2xl relative z-10"
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
