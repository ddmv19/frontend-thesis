import {
  ArrendamientoIcon,
  BodegaIcon,
  ClienteIcon,
  DasboardIcon,
  EraIcon,
  PagosIcon,
  PersonalIcon,
  RolesIcon,
} from './Icons'
import '../assets/animations.css'

const AnimationLogin = () => {
  return (
    <>
      <div className="absolute w-full h-[100vh] flex flex-row justify-around">
        <BodegaIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated1-col" />
        <ClienteIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated2-col" />
        <PagosIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated3-col" />
        <EraIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated4-col" />
        <PersonalIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated5-col" />
        <ArrendamientoIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated6-col" />
        <RolesIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated7-col" />
        <DasboardIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated8-col" />
      </div>
      <div className="absolute w-full h-[100vh] flex flex-col justify-around">
        <BodegaIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated1-row" />
        <ClienteIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated2-row" />
        <PagosIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated3-row" />
        <EraIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated4-row" />
        <PersonalIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated5-row" />
        <ArrendamientoIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated6-row" />
        <RolesIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated7-row" />
        <DasboardIcon className="relative top-0 left-0 w-10 h-10 opacity-[.6] icon-animated8-row" />
      </div>
    </>
  )
}

export default AnimationLogin
