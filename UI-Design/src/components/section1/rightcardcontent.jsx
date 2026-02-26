import { ArrowRight } from "lucide-react"

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-10'>
            <h2 className='bg-white text-xl rounded-full h-10 w-10 flex justify-center items-center font-bold'>{props.id+1}</h2>
            <div >
                <p className='text-white mb-7 text-md leading-relaxed'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea facilis voluptatem beatae quia, doloremque architecto!
                </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-bold py-1 px-8 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white py-2 px-2 rounded-full'><ArrowRight size={30} /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent