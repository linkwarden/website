import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import SingleItem from "./SingleItem";

const items = [
  { name: "Personal Use", img: "/developer.png" },
  { name: "Education & Learning", img: "/books.png" },
  { name: "Research & Reference", img: "/hat.png" },
  { name: "Project Collaboration", img: "/file.png" },
];

function UseCaseListBoxMobile() {
  const [selected, setSelected] = useState(items[0]);

  const selectFunction = () => {
    switch (selected.name) {
      case "Personal Use":
        return (
          <div className="w-full flex flex-col gap-5 sm:flex-row-reverse">
            <div className="text-right flex flex-col gap-3 w-full">
              <SingleItem icon="widgets" text="Bookmark Organization" />
              <SingleItem icon="groups" text="Seamless Collaboration" />
              <SingleItem icon="download" text="Content Preservation" />
              <SingleItem icon="search" text="Easy Access" />
            </div>
          </div>
        );
      case "Education & Learning":
        return (
          <div className="w-full flex flex-col gap-5 sm:flex-row-reverse">
            <div className="text-right flex flex-col gap-3">
              <SingleItem icon="school" text="Academic Resource Management" />
              <SingleItem icon="category" text="Curated Learning Materials" />
              <SingleItem
                icon="electric_bolt"
                text="Enhanced Study Experience"
              />
              <SingleItem icon="groups" text="Collaborative Learning" />
            </div>
          </div>
        );
      case "Research & Reference":
        return (
          <div className="w-full flex flex-col gap-5 sm:flex-row-reverse">
            <div className="text-right flex flex-col gap-3">
              <SingleItem icon="widgets" text="Resource Gathering" />
              <SingleItem icon="download" text="Permanent Access" />
              <SingleItem icon="groups" text="Collaborative Research" />
              <SingleItem icon="search" text="Easy Access" />
            </div>
          </div>
        );
      case "Project Collaboration":
        return (
          <div className="w-full flex flex-col gap-5 sm:flex-row-reverse">
            <div className="text-right flex flex-col gap-3">
              <SingleItem icon="widgets" text="Team Resource Gathering" />
              <SingleItem icon="groups" text="Seamless Collaboration" />
              <SingleItem icon="electric_bolt" text="Project Efficiency" />
              <SingleItem icon="sync" text="Information Sharing" />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className={`w-full block md:hidden useCaseMobile pb-5 `}>
        <Listbox value={selected} onChange={setSelected}>
          <div className={`rainbow px-0.5 py-0.5 rounded-lg align-middle`}>
            <div className="relative">
              <Listbox.Button className="align-middle relative w-full cursor-default rounded-lg bg-[#0E212E] py-2 pl-3 pr110 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <div className="flex">
                  <span className="truncate mt-[2px]">
                    <Image src={selected.img} alt="" height={20} width={20} />
                  </span>
                  <span className="truncate ml-5">{selected.name}</span>
                </div>
                <span className="align-middle pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Image
                    src={"/arrow-down.svg"}
                    width={10}
                    height={10}
                    alt=""
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#0E212E] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {items.map((i, Idx) => (
                    <Listbox.Option
                      key={Idx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-5 pr-4 ${
                          active ? "bg-[#0369A1] text-white" : "text-white"
                        }`
                      }
                      value={i}
                    >
                      {({ selected }) => (
                        <>
                          <div
                            className={`align-middle flex  truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            <Image src={i.img} alt="" height={25} width={25} />
                            <p className="ml-5">{i.name}</p>
                          </div>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </Listbox>
        <div className="mt-5">{selectFunction()}</div>
      </div>
    </>
  );
}

export default UseCaseListBoxMobile;
