import Footer from "@/app/componentes/Footer";
import Header from "@/app/componentes/Header";

export default function Room({params}: {params:{id: string}}){
  return(
    <div className="min-h-screen h-full">
      <Header/>
      <div className="flex h-[90%] ">
        <div className="w-[80%]">
        <h1>room</h1>
        </div>
      </div>
      <Footer/> 
    </div>
  )
}