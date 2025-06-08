import Image from 'next/image'
import Link from 'next/link'
const NavBar = () => {
  // bg-[url(/header-bg-color.png)]
  return (
    <nav className=' bg-no-repeat bg-center bg-auto'>
        <div className='flex justify-around gap-5 items-center px-5'>
            <small className='text-[#fff] text-[40px] py-4 font-semibold'>BusandCode<span className='w-[10px] h-[10px] text-[#EC1552]'>.</span></small>
            <ul className="bg-[#ffffff] rounded-[100px] py-4 border-[1px] border-[#FFFFFF] w-[600px] flex justify-center gap-4 items-center h-[70px] cursor-pointer text-[18px] text-[#2F2F2F] font-normal">
                <li>Home</li>
                <li><Link href="#about">About me</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#my-works">My work</Link></li>
                <li>Testimonials</li>
            </ul>
            <div className='flex justify-center items-center gap-5'>
            {/* <Image src="/vector.png" width={28} height={28} alt='Theme' /> */}
            <div className='flex cursor-pointer justify-center bg-[#ffffff] hover:bg-[#0d1031] hover:text-white items-center gap-4 text-[18px] border-[1px] w-[193px] rounded-[100px] h-[64px] text-[#4D4D4D] border-[#A7A7A7]'>
              <small className='text-[18px] font-normal'>Connect</small>
              <Image src="/arrow-icon.png" width={11} height={11} alt='arrow-connect'></Image>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar 