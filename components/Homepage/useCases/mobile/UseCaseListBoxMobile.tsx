import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import SelectedData from './SelectedData'
import style from '../style/useCase.module.css'


const items = [
  { name: 'Student', img: '/student.png' },
  { name: 'Academics', img: '/hat.png' },
  { name: 'Writers', img: '/pen.png' },
  { name: 'Project Managers', img: '/date.png' },
  { name: 'Developers', img: '/computer.png' },
];


function UseCaseListBoxMobile() {
  const [selected, setSelected] = useState(items[0])

  const selectFunction = () => {
    switch (selected.name) {
      case 'Student':
        return (
          <SelectedData src={'/app/personal.png'} textOne={'sample'} textTwo={'sample'} textThree={'sample'} />
        )
        break
      case 'Academics':
        return (
          <SelectedData src={'/app/personal.png'} textOne={'sample'} textTwo={'sample'} textThree={'sample'} />
        )
        break
      case 'Writers':
        return (
          <SelectedData src={'/app/personal.png'} textOne={'sample'} textTwo={'sample'} textThree={'sample'} />
        )
        break
      case 'Project Managers':
        return (
          <SelectedData src={'/app/personal.png'} textOne={'sample'} textTwo={'sample'} textThree={'sample'} />
        )
        break
      case 'Developers':
        return (
          <SelectedData src={'/app/personal.png'} textOne={'sample'} textTwo={'sample'} textThree={'sample'} />
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