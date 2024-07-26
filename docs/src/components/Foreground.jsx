import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "7:00 AM - 8:00 AM: Wake Up and Morning Routine Wake up, make your bed, and freshen up",
      filesize: "0.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
    {
      desc: " Do some light stretching or yoga Enjoy a healthy breakfast with a cup of your favorite tea or coffee",
      filesize: "0.6mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-blue-600",
      },
    },
    {
      desc: "this is the bg of card that display",
      filesize: "0.4mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      
      ))}
    </div>
  );
}

export default Foreground;
