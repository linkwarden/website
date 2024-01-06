import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

function UseCaseTabPanel() {
  return (
    <>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                widgets
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Bookmark Organization</p>
              <p className="text-gray-400">
                Store and categorize links to articles, blog posts, and online
                content for easy retrieval.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">groups</span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Seamless Collaboration</p>
              <p className="text-gray-400">
                Share essential links and references among your friend or even
                publicly.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                download
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Content Preservation</p>
              <p className="text-gray-400">
                Keep a permanent snapshot of links regardless of any changes to
                the original content.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">search</span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Easy Access</p>
              <p className="text-gray-400">
                Conveniently revisit favorite or important online materials at
                any time.
              </p>
            </div>
          </div>
        </div>
      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">school</span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Academic Resource Management</p>
              <p className="text-gray-400">
                Bookmark and organize educational content for easy study and
                reference.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                category
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Curated Learning Materials</p>
              <p className="text-gray-400">
                Educators can create and share a tailored collection of online
                learning resources.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                electric_bolt
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Enhanced Study Experience</p>
              <p className="text-gray-400">
                Students can efficiently revisit bookmarked resources for
                coursework and assignments.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">groups</span>
            </div>

            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Collaborative Learning</p>
              <p className="text-gray-400">
                Share and collaborate on educational resources between educators
                and students.
              </p>
            </div>
          </div>
        </div>
      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                widgets
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Resource Gathering</p>
              <p className="text-gray-400">
                Gather and organize academic links and articles.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                download
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Permanent Access</p>
              <p className="text-gray-400">
                Archive webpages to ensure continuous access despite changes or
                removal of online sources.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">groups</span>
            </div>

            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Collaborative Research</p>
              <p className="text-gray-400">
                Pool resources and references through shared collaboration
                features.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">search</span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Easy Access</p>
              <p className="text-gray-400">
                Quickly store and access information through organized tags and
                categories.
              </p>
            </div>
          </div>
        </div>
      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                widgets
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Team Resource Gathering</p>
              <p className="text-gray-400">
                Collectively gather and organize webpages relevant to a project.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">groups</span>
            </div>

            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Seamless Collaboration</p>
              <p className="text-gray-400">
                Share essential resources and references among team members.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">
                electric_bolt
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Project Efficiency</p>
              <p className="text-gray-400">
                Access a centralized resource hub for all project-related
                information.
              </p>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <div className="rounded-full flex items-center justify-center w-11 h-10 select-none bg-sky-500 bg-opacity-30">
              <span className="material-symbols-rounded text-2xl ">sync</span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <p className="text-xl">Information Sharing</p>
              <p className="text-gray-400">
                Ensure all team members have access to the same materials.
              </p>
            </div>
          </div>
        </div>
      </Tab.Panel>
    </>
  );
}

export default UseCaseTabPanel;
