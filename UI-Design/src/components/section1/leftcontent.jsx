
import HeroText from './HeroText'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between bg-white p-10'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default Leftcontent