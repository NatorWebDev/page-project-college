import { Form, Link } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { BsFillPencilFill,BsFillTelephoneFill } from "react-icons/bs";


export default function ProfileCustom() {
  return (
    <Form className="flex-1 w-full flex flex-col items-center">
      <input type="file" name="" id="profile" className="reduce opacity-0" />
      <label
        htmlFor="profile"
        className="w-128 h-128 input rounded-full purpleShadow flex items-center justify-center cursor-pointer flex-col"
      >
        <MdAddAPhoto className="text-3xl opacity-50" />
        <div className="opacity-50 text-sm text-center">
          añade una foto de perfil
        </div>
      </label>
      <div className="flex flex-col mt-8 w-256">
        <label htmlFor="nickname" className="flex items-center">Cambiar Apodo <BsFillPencilFill className="opacity-50 ml-8"/></label>
        <input type="text" id="nickname" className="input rounded-xl" />
      </div>
      <div className="w-full flex-1 flex px-256 my-8">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col mt-8">
            <label htmlFor="description" className="flex items-center">Agregar Descripción <BsFillPencilFill className="opacity-50 ml-8"/></label>
            <textarea
              type="text"
              id="description"
              className="input rounded-xl w-256 h-128"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label htmlFor="telefono" className="flex items-center">Número de Telefono <BsFillTelephoneFill className="ml-8 opacity-50"/></label>
            <input
              type="text"
              id="telefono"
              className="input rounded-xl w-256"
            />
          </div>
          <div className="flex flex-col mt-8">
            <label htmlFor="direccion" className="flex items-center">Dirección <HiLocationMarker className="opacity-50 ml-8"/></label>
            <input
              type="text"
              id="direccion"
              className="input rounded-xl w-256"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-end">
          <input
            type="file"
            name=""
            id="profile"
            className="reduce opacity-0"
          />
          <label
            htmlFor="profile"
            className="w-128 h-128 input rounded-xl flex items-center justify-center cursor-pointer flex-col w-384 h-128"
          >
            <MdAddAPhoto className="text-3xl opacity-50" />
            <div className="opacity-50 text-sm text-center">
              añade una foto de portada
            </div>
          </label>

          <div className="flex flex-col mt-8">
            <label htmlFor="Correo Electrónico" className="flex items-center">Correo Electrónico <IoMdMail className="ml-8 opacity-50"/></label>
            <input
              type="text"
              id="Correo Electrónico"
              className="input rounded-xl w-256"
            />
          </div>

          <div className="flex w-256 mt-32 justify-around items-center ">
            <Link to='/' className="">Volver</Link>
            <input type="button" value="Guardar" className="py-8 px-16 cursor-pointer rounded-xl bg-primary text-white transition-all duration-100 hover:bg-[#8833dd] shadow-lg" />
        </div>
        </div>
      </div>
    </Form>
  );
}
