import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

function UseCaseTabPanel() {
  return (
    <>
      <Tab.Panel className="w-full">
        <Image
          src="./app/personal.png"
          width={1407}
          height={947}
          alt=""
          className="md:w-1/4 mx-auto rounded-2xl relative z-10"
        />
        <div className="flex justify-between">
          {/* first section  */}
          <div className="w-1/3.5">
            <div className="flex align-bottom">
              <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
              <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
            </div>
            <p className="font-160 pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
            </p>
          </div>
          {/* second section  */}

          <div className="w-1/3.5">
            <div className="flex align-bottom">
              <Image src={'/brain.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
            </div>
            <p className="font-160 pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
            </p>
          </div>
          {/* third section  */}

          <div className="w-1/3.5">
            <div className="flex align-bottom">
              <Image src={'/pencil.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
            </div>
            <p className="font-160 pl-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
            </p>
          </div>
        </div>

      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse">
          <Image
            src="./app/personal.png"
            width={320}
            height={270}
            alt=""
            className="rounded-2xl relative z-10 w-320 h-auto my-auto"
          />

        <div className="flex w-full">
          <div className="top">
            <div className="flex w-full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">brain</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse">
          <Image
            src="./app/personal.png"
            width={320}
            height={270}
            alt=""
            className="rounded-2xl relative z-10 w-320 h-auto my-auto"
          />

        <div className="flex w-full">
          <div className="top">
            <div className="flex w-full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">brain</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse">
          <Image
            src="./app/personal.png"
            width={320}
            height={270}
            alt=""
            className="rounded-2xl relative z-10 w-320 h-auto my-auto"
          />

        <div className="flex w-full">
          <div className="top">
            <div className="flex w-full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">brain</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse">
          <Image
            src="./app/personal.png"
            width={320}
            height={270}
            alt=""
            className="rounded-2xl relative z-10 w-320 h-auto my-auto"
          />

        <div className="flex w-full">
          <div className="top">
            <div className="flex w-full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">brain</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-3xl mt-5 ml-2">Time</p>
                </div>
                <p className="font-160 pl-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit quam assumenda consectetur rem expedita id at totam ex sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>


    </>

  )
}

export default UseCaseTabPanel