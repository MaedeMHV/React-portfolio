import color from '../assets/Noiz1.webp'
export default function Contact(){
return (
<section id="contact" className=" xl:pl-48 pl-28 pb-24 gap-10 overflow-hidden flex md:flex-row flex-col items-center justify-center ">
   

<img src={color} className="w-[350px] h-[450px] object-cover " alt="profile" />
<div className='h-[400px] md:w-[50%] p-4 shadow-lg text-black flex flex-col justify-center items-center'>
    <h2 className="titleOne">Contact us</h2> 
    <div className='underline'></div>
    <div></div>
    <form action="" method="post" className='flex justify-start items-center flex-wrap gap-4'>
        <input type="text" name="name" id="name" placeholder='Name' style={{width:`calc(50% - 10px)`}} className='contactInput' />
        <input type='text' name="lastName" placeholder='Last Name' style={{width:`calc(50% - 10px)`}} className=' contactInput'/>
        <input type="email" name="email" id="email" placeholder='email' required  className='w-full contactInput'/>
        <input type="text" name="message" id="message" placeholder='message'  className='w-full h-[100px] contactInput' />
        <input type="submit" value="Submit" className="bg-orange-600 w-[150px] text-white  contactInput px-10 hover:opacity-45" />


    </form>

</div>
</section>
)
}