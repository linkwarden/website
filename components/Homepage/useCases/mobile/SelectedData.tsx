import Image from 'next/image';
import React from 'react';

interface SelectedDataProps {
  src: string;
  textOne: string;
  textTwo: string;
  textThree: string;
}

function SelectedData({ src, textOne, textTwo, textThree }: SelectedDataProps) {
  return (
    <>
      <div className="w-full  flex flex-row-reverse mt-[100px=] justify-between align-middle">
        <div className="w-2/4 text-left">
          <Image
            src={src}
            width={1407}
            height={947}
            alt=""
            className=" mx-auto rounded-2xl"
          />
        </div>
        <div className="w-2/4 text-right">
          <div className="flex align-middle mb-3">
            <Image src={'/brain.svg'} height={30} width={30} alt="" className="text-white" />
            <p className="ml-3">{textOne}</p>
          </div>
          <div className="flex align-middle mb-3">
            <Image src={'/brain.svg'} height={30} width={30} alt="" className="text-white" />
            <p className="ml-3">{textTwo}</p>
          </div>
          <div className="flex align-middle">
            <Image src={'/brain.svg'} height={30} width={30} alt="" className="text-white" />
            <p className="ml-3">{textThree}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedData;
