import { Form, Link } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";

export default function Create() {
  return (
    <Form className="w-full flex-1 flex px-64 py-16 flex-col items-center">
      <h2 className="text-2xl">Crear un Evento</h2>
      <input
        type="text"
        className="input rounded-xl mt-8"
        placeholder="Título"
      />
      <div className="w-full flex flex-1">
        <div className="mt-16 flex-1 flex flex-col items-center">
          <div className="flex flex-col w-256 ">
            <label htmlFor="">Ubicación</label>
            <input type="text" className="input rounded-xl" placeholder="" />
          </div>
          <div className="flex flex-col w-256">
            <label htmlFor="">Descripción</label>
            <textarea className="input rounded-xl" placeholder="" />
          </div>
          <div className="flex flex-col w-256">
            <label htmlFor="">Fecha</label>
            <input type="text" className="input rounded-xl" placeholder="" />
          </div>
          <div className="flex flex-col w-256">
            <label htmlFor="">Hora</label>
            <input type="text" className="input rounded-xl" placeholder="" />
          </div>
        </div>

        <div className="flex-1 mt-16 flex flex-col items-center">
          <label
            htmlFor="cover"
            className="block w-256 h-128 input rounded-xl flex flex-col items-center justify-center p-16 cursor-pointer"
          >
            <AiOutlineFileAdd size={32} className="opacity-50 mb-8" />
            <div className="text-center text-xs opacity-50">
              Suelta tus archivos aqui o seleccione un archivo
            </div>
          </label>
          <input
            type="file"
            name="cover"
            id="cover"
            className="w-[1px] h-[1px] opacity-0"
          />

          <div className="flex flex-col w-256">
            <label htmlFor="">Teléfono</label>
            <input type="text" className="input rounded-xl" placeholder="" />
          </div>
          <div className="flex flex-col w-256">
            <label htmlFor="">Costo de Entrada</label>
            <input type="text" className="input rounded-xl" placeholder="" />
          </div>
        <div className="flex w-256 mt-16 justify-around items-center ">
            <Link to='/' className="">Volver</Link>
            <input type="button" value="Crear" className="py-8 px-16 cursor-pointer rounded-xl bg-primary text-white transition-all duration-100 hover:bg-[#8833dd] shadow-lg" />
        </div>
        </div>
      </div>
    </Form>
  );
}
