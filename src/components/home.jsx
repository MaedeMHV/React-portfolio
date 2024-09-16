import { TypeAnimation } from 'react-type-animation';
export default function Home(){

return(
<section className="h-[300px] xl:pl-72 pl-32 w-screen bg-stone-900 " id='home'>
<h1 className="pt-16 font-black text-2xl md:text-3xl  capitalize">I'm a professional</h1>
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'product manager',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
        'UI/UX Designer',
        1000,
        'Front-End',
        1000
      ]}
      className='mt-3'
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />


<div className=" flex flex-row gap-6 mt-10 "> <button className="btn bg-orange-500 "> hire me </button><button className="btn bg-yellow-400 text-black">Get resume</button></div>
</section>

)

}