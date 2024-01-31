import { Camera, Computer, Microphone, MicrophoneMute, Phone } from "@/Icons";
import Container from "./Container";
import { useState } from "react";

export default function Footer(){
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0') + ':';
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return(
    <div className="fixed items-center bottom-0 bg-black py-2 w-full">
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center">
            <p className="text-xl">{hours}{minutes}</p>
          </div>
          <div className="flex  space-x-6 justify-center">
            {isMuted ?(<MicrophoneMute className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={()=> setIsMuted(!isMuted)} />
            ):(<Microphone className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md" onClick={()=> setIsMuted(!isMuted)}/>)
            }
            
            <Camera className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"/>
            <Computer className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"/>
            <Phone className="h-12 w-16 text-white hover:bg-red-500 p-2 cursor-pointer bg-primary rounded-md"/>
          </div>
        </div>
      </Container>
    </div>
  )
}