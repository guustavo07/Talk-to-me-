import Footer from "@/app/componentes/Footer";
import Header from "@/app/componentes/Header";

export default function Room({params}: {params:{id: string}}){
  return(
    <>
      <Header/>
      <div>
        <h1>room</h1>
      </div>
      <Footer/> 
    </>
  )
}