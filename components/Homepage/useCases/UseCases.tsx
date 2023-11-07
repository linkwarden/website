import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import style from './style/usecase.module.css'
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
                  ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold duration-100  w-full ${selected && `${style.rainbow}` 
                  }`
                }
              >
                <div className="duration-500 bg-[#07334F] w-full py-3  rounded-lg text-center shadow-lg hover:shadow-cyan-500/50">
                  <Image className="mx-auto mb-2" src={'/student.png'} alt="" height={50} width={50} />
                  <p >Student</p>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold duration-100  w-full ${selected && `${style.rainbow}` 
              }`
                }
              >
                <div className="duration-500 bg-[#07334F] w-full py-3  rounded-lg text-center shadow-lg hover:shadow-cyan-500/50">
                  <Image className="mx-auto mb-2" src={'/hat.png'} alt="" height={50} width={50} />
                  <p >Academics</p>
                </div>

              </Tab>
              <Tab
                className={({ selected }) =>
                ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold duration-100  w-full ${selected && `${style.rainbow}` 
              }`
                }
              >
                <div className="duration-500 bg-[#07334F] w-full py-3  rounded-lg text-center shadow-lg hover:shadow-cyan-500/50">
                  <Image className="mx-auto mb-2" src={'/pen.png'} alt="" height={50} width={50} />
                  <p >Writers</p>
                </div>

              </Tab>
              <Tab
                className={({ selected }) =>
                ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold duration-100  w-full ${selected && `${style.rainbow}` 
              }`
                }
              >
                <div className="duration-500 bg-[#07334F] w-full py-3  rounded-lg text-center shadow-lg hover:shadow-cyan-500/50">
                  <Image className="mx-auto mb-2" src={'/date.png'} alt="" height={50} width={50} />
                  <p className="text-[10px]">Project Managers</p>
                </div>


              </Tab>
              <Tab
                className={({ selected }) =>
                ` active:border-none  px-1 py-1 text-sm rounded-xl font-semibold duration-100  w-full ${selected && `${style.rainbow}` 
              }`
                }
              >
                <div className="duration-500 bg-[#07334F] w-full py-3  rounded-lg text-center shadow-lg hover:shadow-cyan-500/50">
                  <Image className="mx-auto mb-2" src={'/computer.png'} alt="" height={50} width={50} />
                  <p >Developers</p>
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
