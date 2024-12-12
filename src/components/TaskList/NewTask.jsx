import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl ">
    <div className="flex justify-between items-center mb-5">
    <h3 className="font-bold text-1xl bg-red-500 py-1 px-3 rounded-xl">
        {data.category}
      </h3>
      <h4 className="font-semibold text-sm">{data.date}</h4>
    </div>
    <h2 className="font-bold text-2xl">{data.title}</h2>
    <p className="font-semibold text-sm mt-4 text-justify ">
      {data.description}
    </p>
    <div className='mt-5'>
        <button className='bg-emra px-2 text-sm rounded-md'>Accept Task</button>
    </div>
  </div>

  )
}

export default NewTask