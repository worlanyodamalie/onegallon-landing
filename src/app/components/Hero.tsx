import Link from "next/link";
import Image from "next/image";

const data = [
    {
      img: 'apple-white.svg',
      header: 'Available on',
      title: 'APP STORE',
      link: 'https://apps.apple.com/us/app/1gallon-request-for-fuel/id6444171778'
    },
    {
     img: 'android-white.svg',
     header: 'Available on',
     title: 'PLAY STORE',
     link: 'https://play.google.com/store/apps/details?id=com.gh.onegallon.customer'
   }
 
 ]

export function Hero(){
    return (
      <div className="hero min-h-screen bg-no-repeat place-items-start bg-[#D7D7D7] bg-[url('/hero.svg')]" >
        <div className="hero-content flex-col min-h-screen ">
          <div className="max-w-xl px-3 md:mt-0 mt-24">
            <h1 className="md:text-5xl text-3xl font-clashDisplay font-semibold md:text-white">We give you the time </h1>
            <h1 className="md:text-5xl text-3xl font-clashDisplay font-semibold md:text-white">to do the things that matter</h1>
            <p className="font-gotham font-light md:text-white text-lg py-6">Fuel delivery and time-saving</p>
            <div className="flex flex-row  gap-6">
            {
                    data.map((item,index) => {
                       return (
                        <Link key={"dynamo__item__" + index} className="btn btn-outline md:border-white normal-case md:bg-transparent  bg-black" href={item.link} target="_blank">
                        <Image
                              src={item.img}
                              width={25}
                              height={25}
                              alt="Apple icon"
                              
                           />
                           <div className="ml-3">
                           <h4 className="font-gotham font-light text-xs  text-left text-white">Available on</h4>
                            <h4 className="font-gotham  text-xs font-light text-left text-white">{item.title}</h4>
                            </div>

                       </Link>
                       )
                })
                }
            </div>
          </div>
         
        </div>
      </div>
    );
}