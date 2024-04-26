import { Tab } from "@headlessui/react";
import UseCaseListBoxMobile from "./mobile/UseCaseListBoxMobile";
import { User, Lightbulb, GraduationCap, Kanban } from "@phosphor-icons/react";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function UseCases() {
  return (
    <div className="min-h-auto">
      <div className="max-w-6xl mx-auto lg:px-20 px-5">
        <p className="lg:text-4xl text-3xl font-bold mb-10 text-center">
          Exploring the Use Cases
        </p>

        {/* Desktop */}
        <div className="hidden sm:block">
          <Tab.Group>
            <Tab.List className="flex gap-5 my-5 w-100 justify-between">
              <Tab
                className={({ selected }) =>
                  `active:scale-[98%] border border-outline outline-none px-1 py-1 text-sm rounded-xl font-semibold group duration-100 w-full ${
                    selected && `bg-gradient-to-br from-[#673AB7] to-[#3A00A1]`
                  }`
                }
              >
                <div className="duration-200 w-full py-5 rounded-lg text-center">
                  <User weight="fill" className="mx-auto mb-2" size="2.5rem" />
                  <p>Personal Use</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  `active:scale-[98%] border border-outline outline-none px-1 py-1 text-sm rounded-xl font-semibold group duration-100 w-full ${
                    selected && `bg-gradient-to-br from-[#673AB7] to-[#3A00A1]`
                  }`
                }
              >
                <div className="duration-200 w-full py-5 rounded-lg text-center">
                  <Lightbulb
                    weight="fill"
                    className="mx-auto mb-2"
                    size="2.5rem"
                  />

                  <p>Design Inspirations</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  `active:scale-[98%] border border-outline outline-none px-1 py-1 text-sm rounded-xl font-semibold group duration-100 w-full ${
                    selected && `bg-gradient-to-br from-[#673AB7] to-[#3A00A1]`
                  }`
                }
              >
                <div className="duration-200 w-full py-5 rounded-lg text-center">
                  <GraduationCap
                    weight="fill"
                    className="mx-auto mb-2"
                    size="2.5rem"
                  />

                  <p>Research & Reference</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  `active:scale-[98%] border border-outline outline-none px-1 py-1 text-sm rounded-xl font-semibold group duration-100 w-full ${
                    selected && `bg-gradient-to-br from-[#673AB7] to-[#3A00A1]`
                  }`
                }
              >
                <div className="duration-200 w-full py-5 rounded-lg text-center">
                  <Kanban
                    weight="fill"
                    className="mx-auto mb-2"
                    size="2.5rem"
                  />

                  <p>Project Collaboration</p>
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels className="min-h-[14rem]">
              <Tab.Panel className="w-full flex flex-row-reverse mb-3">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        widgets
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Bookmark Organization</p>
                      <p className="text-text">
                        Store and categorize links to articles, blog posts, and
                        online content for easy retrieval.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        groups
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Seamless Collaboration</p>
                      <p className="text-text">
                        Share essential links and references among your friend
                        or even publicly.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        download
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Content Preservation</p>
                      <p className="text-text">
                        Keep a permanent snapshot of links regardless of any
                        changes to the original content.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        search
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Easy Access</p>
                      <p className="text-text">
                        Conveniently revisit favorite or important online
                        materials at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="w-full flex flex-row-reverse mb-3">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        category
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Centralized Resource Collection</p>
                      <p className="text-text">
                        Aggregate and organize diverse design inspirations in
                        one place.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        groups
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Collaboration and Sharing</p>
                      <p className="text-text">
                        Teams can share and build a design resource pool
                        together.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        tag
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Tagging and Organization</p>
                      <p className="text-text">
                        Use tags and categories for quick inspiration retrieval.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        devices
                      </span>
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Access Anywhere</p>
                      <p className="text-text">
                        Save and access design inspirations from any device.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="w-full flex flex-row-reverse mb-3">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        widgets
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Resource Gathering</p>
                      <p className="text-text">
                        Gather and organize academic links and articles.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        download
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Permanent Access</p>
                      <p className="text-text">
                        Archive webpages to ensure continuous access despite
                        changes or removal of online sources.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        groups
                      </span>
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Collaborative Research</p>
                      <p className="text-text">
                        Pool resources and references through shared
                        collaboration features.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        search
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Easy Access</p>
                      <p className="text-text">
                        Quickly store and access information through organized
                        tags and categories.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="w-full flex flex-row-reverse mb-3">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        widgets
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Team Resource Gathering</p>
                      <p className="text-text">
                        Collectively gather and organize webpages relevant to a
                        project.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        groups
                      </span>
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Seamless Collaboration</p>
                      <p className="text-text">
                        Share essential resources and references among team
                        members.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        electric_bolt
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Project Efficiency</p>
                      <p className="text-text">
                        Access a centralized resource hub for all
                        project-related information.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 items-center">
                    <div className="rounded-full flex items-center justify-center aspect-square h-16 select-none bg-gradient-to-br from-[#DEDEDE20] via-transparent border border-outline to-[#ffffff20]  bg-opacity-30">
                      <span className="material-symbols-rounded text-4xl">
                        sync
                      </span>
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                      <p className="text-xl">Information Sharing</p>
                      <p className="text-text">
                        Ensure all team members have access to the same
                        materials.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Mobile */}
        <UseCaseListBoxMobile />
      </div>
    </div>
  );
}
