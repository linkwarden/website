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
          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
              <p className="mb-5 text-xl mt-5 ml-2">Efficient Organization</p>
            </div>
            <p className="font-160 pl-10">
              Easily categorize and tag links for quick access.
            </p>
          </div>
          {/* second section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/brain.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Content Preservation</p>
            </div>
            <p className="font-160 pl-10">
              Archive webpages to maintain a permanent record of online content.
            </p>
          </div>
          {/* third section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/pencil.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Accessibility</p>
            </div>
            <p className="font-160 pl-10">
              Retrieve stored information at any time, ensuring no loss due to content alteration or removal.
            </p>
          </div>
        </div>

      </Tab.Panel>
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
          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
              <p className="mb-5 text-xl mt-5 ml-2">Resource Bookmarking</p>
            </div>
            <p className="font-160 pl-10">
              Students and educators can save and revisit academic materials.
            </p>
          </div>
          {/* second section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/brain.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2"> Curated Learning Materials: </p>
            </div>
            <p className="font-160 pl-10">
              Educators can compile resources tailored to course requirements.
            </p>
          </div>
          {/* third section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/pencil.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Collaborative Learning </p>
            </div>
            <p className="font-160 pl-10">
              Share and collaborate on educational resources with peers.
            </p>
          </div>
        </div>

      </Tab.Panel>
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
          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
              <p className="mb-5 text-xl mt-5 ml-2">Reference Management</p>
            </div>
            <p className="font-160 pl-10">
              Collect and organize references for academic or project-based research.
            </p>
          </div>
          {/* second section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/brain.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Permanent Archives</p>
            </div>
            <p className="font-160 pl-10">
              Ensure permanent access to web content with webpage archiving.
            </p>
          </div>
          {/* third section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/pencil.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Collaborative Research</p>
            </div>
            <p className="font-160 pl-10">
              Contribute and share in a knowledge pool with your team of researchers.
            </p>
          </div>
        </div>

      </Tab.Panel>
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
          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
              <p className="mb-5 text-xl mt-5 ml-2">Shared Resource Pool</p>
            </div>
            <p className="font-160 pl-10">
              Team members can contribute to a collective repository of project-related links.
            </p>
          </div>
          {/* second section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/brain.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Centralized Access</p>
            </div>
            <p className="font-160 pl-10">
              All team members can access essential project resources and references.
            </p>
          </div>
          {/* third section  */}

          <div className="w-1/3">
            <div className="flex align-bottom">
              <Image src={'/pencil.svg'} height={30} width={30} alt="" className='text-white' />
              <p className="mb-5 text-xl mt-5 ml-2">Streamlined Collaboration</p>
            </div>
            <p className="font-160 pl-10">
              Facilitate information sharing and teamwork on projects.
            </p>
          </div>
        </div>

      </Tab.Panel>


    </>

  )
}

export default UseCaseTabPanel