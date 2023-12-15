import { SideBar } from "@/app/components/sideBar";
import Topic from "@/app/components/Topic";





export default async function Section(){
    return(
    <>
        <SideBar path={""} />
        <div>
      <Topic img={"/gaza.jpg"} />
      <Topic img={"/gaza.jpg"}/>
      <Topic img={"/gaza.jpg"}/>
      </div>
    </>
    )
}