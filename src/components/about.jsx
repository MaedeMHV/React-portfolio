import color from '../assets/color.png'
export default function About(){
return (
<section className="flex xl:flex-row flex-col md:p-10 py-7 pl-24 items-center justify-center xl:h-[400px]  gap-10 overflow-hidden"  id='about'>

<img src={color} className="w-48 h-48 rounded-full outline-2 outline border-4 outline-purple-800 outline-offset-2 border-purple-900  " alt="profile" />
<div className='md:h-[300px] md:w-[50%] p-4  shadow-lg flex flex-col justify-center items-center dark:bg-zinc-900 text-black dark:text-white'>
    <h2 className="titleOne">About me</h2> 
    <div className='underline'></div>
    <p className=' text-justify'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores culpa vero aut labore doloribus. Beatae officiis, illo dolorum sapiente at alias ipsa magnam incidunt earum nam! Nisi quae dolorem ipsum!
    Veritatis vero sit corporis maxime quos eos sunt magnam voluptatibus vitae? Reiciendis architecto laboriosam excepturi labore! Voluptatem nesciunt in voluptatum quisquam repudiandae alias tempora modi voluptate! Accusamus architecto quas quasi.
    Molestiae, omnis iusto modi reprehenderit nostrum, ea, soluta dolores sapiente eos suscipit nulla nemo? Nobis, modi eum asperiores cum velit beatae officiis amet placeat. Molestiae doloremque nobis quidem odio perferendis!
    </p>
    
</div>
</section>
)
}