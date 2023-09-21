import { AiFillGithub } from 'react-icons/ai'
import { BiLogoLinkedin, BiLogoWhatsapp } from 'react-icons/bi'

const RedesSociais = () => {
  return (
    <div className="fixed bottom-0 right-8 w-px h-2/6 flex justify-start items-start bg-white z-50">
      <div className="w-full h-2/3 flex flex-col items-center justify-between">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white hover:scale-110 duration-100"
        >
          <AiFillGithub color={'#d946ef'} size={30} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white hover:scale-110 duration-100"
        >
          <BiLogoLinkedin color={'#d946ef'} size={30} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white hover:scale-110 duration-100"
        >
          <BiLogoWhatsapp color={'#d946ef'} size={30} />
        </a>
      </div>
    </div>
  )
}

export default RedesSociais
