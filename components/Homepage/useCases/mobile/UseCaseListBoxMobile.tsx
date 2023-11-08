import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import SelectedData from './SelectedData'
import style from '../style/useCase.module.css'


const items = [
  { name: 'Personal Use', img: '/female.png' },
  { name: 'Education & Learning', img: '/books.png' },
  { name: 'Research & Reference', img: '/hat.png' },
  { name: 'Project Collaboration', img: '/file.png' },
];


function UseCaseListBoxMobile() {
  const [selected, setSelected] = useState(items[0])

  const selectFunction = () => {
    switch (selected.name) {
      case 'Personal Use':
        return (
          <SelectedData src={'/app/personal.png'}
            textOne={`  Efficient Organization:\ Easily categorize and tag links for quick access.`}
            textTwo={'  Content Preservation: Archive webpages to maintain a permanent record of online content.'}
            textThree={'  Accessibility: \  Retrieve stored information at any time, ensuring no loss due to content alteration or removal.'} />
        )
      case 'Education & Learning':
        return (
          <SelectedData src={'/app/personal.png'}
            textOne={' Resource Bookmarking: Students and educators can save and revisit academic materials.'}
            textTwo={' Curated Learning Materials: Educators can compile resources tailored to course requirements.'}
            textThree={'  Collaborative Learning: Share and collaborate on educational resources with peers.'} />
        )
      case 'Research & Reference':
        return (
          <SelectedData src={'/app/personal.png'}
            textOne={' Reference Management: Collect and organize references for academic or project-based research.'}
            textTwo={' Permanent Archives: Ensure permanent access to web content with webpage archiving.'}
            textThree={'  Collaborative Research: Contribute and share in a knowledge pool with your team of researchers.'} />
        )
      case 'Project Collaboration':
        return (
          <SelectedData src={'/app/personal.png'}
            textOne={' Shared Resource Pool: Team members can contribute to a collective repository of project-related links.'}
            textTwo={'  Centralized Access: All team members can access essential project resources and references.'}
            textThree={'  Streamlined Collaboration: Facilitate information sharing and teamwork on projects.'} />
        )

    }
  }

  return (
    <>
      <div className={`w-full block md:hidden ${style.useCaseMobile} pb-5 `}>
        <Listbox value={selected} onChange={setSelected}>
          <div className={`${style.rainbow} px-0.5 py-0.5 rounded-lg align-middle`}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#0E212E] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <div className='flex'>
                  <span className="truncate"><Image src={selected.img} alt='' height={20} width={20} /></span>
                  <span className="truncate ml-5">{selected.name}</span>

                </div>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <Image src={'/arrow-down.svg'} width={10} height={10} alt='' />
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
                        `relative cursor-default select-none py-2 pl-5 pr-4 ${active ? 'bg-[white] text-black' : 'text-white'
                        }`
                      }
                      value={i}
                    >
                      {({ selected }) => (
                        <>
                          <div
                            className={`flex  truncate ${selected ? 'font-medium' : 'font-normal'
                              }`}
                          >
                            <Image src={i.img} alt='' height={25} width={25} />
                            <p className='ml-5'>
                              {i.name}

                            </p>
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
        <div className="mt-5">

          {
            selectFunction()
          }


        </div>

      </div>
    </>
  )
}

export default UseCaseListBoxMobile