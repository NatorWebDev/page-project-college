
export default function NotFound(){
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col relative">
      <div className="w-full h-full absolute z-20 selectDisable"></div>
      <img src="logo.png" alt="logo" className="w-1/2 object-cover opacity-20 select-none absolute selectDisable z-10"/>
      <div className="text-4xl font-bold relative">Error 404</div>
      <div>Esta pagina no existe, por favor, regrese</div>
    </div>
  )
}
