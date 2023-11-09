import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

function UseCaseTabPanel() {
  return (
    <>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
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
                  <p className="mb-5 text-xl mt-5 ml-2">Bookmark Organization</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Store and categorize links to articles, blog posts, and online content for easy retrieval.

                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Efficient Browsing</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Quickly find and access stored information through organized tags and categories.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Content Preservation</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Save webpages as archives, keeping a permanent record regardless of changes to the original content.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Easy Access</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Conveniently revisit favorite or important online materials at any time.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
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
                  <p className="mb-5 text-xl mt-5 ml-2"> Academic Resource Management</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Bookmark and organize educational content for easy study and reference.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Curated Learning Materials</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Educators can create and share a tailored repository of learning resources.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Enhanced Study Experience</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Students can efficiently revisit bookmarked resources for coursework and assignments.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Collaborative Learning</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Share and collaborate on educational resources between educators and students.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
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
                  <p className="mb-5 text-xl mt-5 ml-2">Resource Gathering</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Gather and organize academic references and project materials.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Permanent Access</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Archive webpages to ensure continuous access despite changes or removal of online sources.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Collaborative Research</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Pool resources and references through shared collaboration features.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Resource Reliability</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Maintain access to valuable research content with archival features.
                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>
      <Tab.Panel className="w-full flex flex-row-reverse mb-3">
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
                  <p className="mb-5 text-xl mt-5 ml-2">Team Resource Gathering</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Collectively gather and organize webpages relevant to a project.
                </p>
              </div>
            </div>
            <div className="flex full">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Seamless Collaboration</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Share essential resources and references among team members.
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2">Project Efficiency</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Access a centralized resource hub for all project-related information.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="flex align-bottom">
                  <Image src={'/time.svg'} height={30} width={30} alt="" className='text-white ' />
                  <p className="mb-5 text-xl mt-5 ml-2"> Information Sharing</p>
                </div>
                <p className="font-160 pl-10 h-[100px]">
                  Ensure all team members have access to the same materials for aligned efforts.                </p>
              </div>
            </div>
          </div>
        </div>


      </Tab.Panel>


    </>

  )
}

export default UseCaseTabPanel