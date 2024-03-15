import React from 'react';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import Imagen from '../assets/logo.png';

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div style={{background:"#072D44"}} className="lg:w-1/2 flex justify-center items-center bg-blue-900">
        <Card className="max-w-md border-none shadow-lg" style={{ background: "#064469" }}>
          <div className="font text-3xl font-bold mb-6">
            <span style={{ color: "#ffffff" }}>Iniciar sesión en su cuenta</span>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Correo" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="email1" type="email" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Contraseña" style={{ color: "#ffffff", fontSize: "1.1rem" }} />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <Button style={{ background: "#072D44" }} className='mt-8 shadow-lg text-3xl' type="submit">Iniciar sesión</Button>
          </form>
        </Card>
      </div>
      <div className="lg:w-1/2 bg-white">
        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="text-center text-5xl font-bold mb-5 mt-12">¡Hola, bienvenido!</h1>
          <img style={{ height: 'auto', width: '150px' }} className="mt-8" src={Imagen} alt="Logo" />
          <span className='text-center text-2xl mt-10 tracking-wide font-medium'>Inicia sesión para <br /> comenzar a gestionar</span>
        </div>
      </div>
    </div>
  );
}

export default Login;