import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import style from "./style/usecase.module.css";
import UseCaseTabPanel from "./UseCaseTabPanel";
import UseCaseListBoxMobile from "./mobile/UseCaseListBoxMobile";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function UseCases() {
  return (
    <div className="min-h-auto">
      <div className="max-w-6xl mx-auto p-10">
        <p className="lg:text-4xl text-3xl font-bold mb-10 text-center">
          Exploring the Use Cases
        </p>

        {/* Desktop */}
        <div className="hidden sm:block">
          <Tab.Group>
            <Tab.List className="flex gap-5 lg:text-lg my-5 w-100 justify-between">
              <Tab
                className={({ selected }) =>
                  ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold group duration-75 shadow-inner  hover:shadow-cyan-500/50 w-full ${
                    selected && `${style.rainbow}`
                  }`
                }
              >
                <div className="duration-200 bg-[#0E212E] w-full py-5  rounded-lg text-center  shadow-lg  group-hover:shadow-cyan-500/50 ">
                  <Image
                    className="mx-auto mb-2"
                    src={"/male.png"}
                    alt=""
                    height={50}
                    width={50}
                  />
                  <p className="text-[12px]">Personal Use</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold group duration-75 shadow-inner  hover:shadow-cyan-500/50 w-full ${
                    selected && `${style.rainbow}`
                  }`
                }
              >
                <div className="duration-200 bg-[#0E212E] w-full py-5  rounded-lg text-center shadow-lg group-hover:shadow-cyan-500/50">
                  <Image
                    className="mx-auto mb-2"
                    src={"/books.png"}
                    alt=""
                    height={50}
                    width={50}
                  />
                  <p className="text-[12px]">Education & Learning</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold group duration-75 shadow-inner  hover:shadow-cyan-500/50 w-full ${
                    selected && `${style.rainbow}`
                  }`
                }
              >
                <div className="duration-200 bg-[#0E212E] w-full py-5  rounded-lg text-center shadow-lg group-hover:shadow-cyan-500/50">
                  <Image
                    className="mx-auto mb-2"
                    src={"/hat.png"}
                    alt=""
                    height={50}
                    width={50}
                  />
                  <p className="text-[12px]">Research & Reference</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold group duration-75 shadow-inner  hover:shadow-cyan-500/50 w-full ${
                    selected && `${style.rainbow}`
                  }`
                }
              >
                <div className="duration-200 bg-[#0E212E] w-full py-5  rounded-lg text-center shadow-lg group-hover:shadow-cyan-500/50">
                  <Image
                    className="mx-auto mb-2"
                    src={"/file.png"}
                    alt=""
                    height={50}
                    width={50}
                  />
                  <p className="text-[12px]">Project Collaboration</p>
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <UseCaseTabPanel />
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Mobile */}
        <UseCaseListBoxMobile />
      </div>
    </div>
  );
}
