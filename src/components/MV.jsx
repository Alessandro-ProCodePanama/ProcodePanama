import react from 'react'

function MV() {
return(
<div>
  <section className=" dark:bg-gray-900">
    <div
      className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-400 dark:text-white">
          Misión
        </h2>
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-green-400 dark:text-white">
          Empoderar las empresas panameñas
        </h2>

        <p className="mb-6 text-justify font-light text-white-500 md:text-lg dark:text-gray-500">Ofrecer soluciones
          tecnológicas innovadoras que impulsan el crecimiento digital y fortalecen su presencia a nivel nacional.</p>
      </div>
    </div>
  </section>

  <section className="dark:bg-gray-900">
  <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
    <div className="mt- md:mt-0 text-right">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-400 dark:text-white">
        Visión
      </h2>
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-green-400 dark:text-white">
        Liderar la transformación digital
      </h2>
      <p className="mb-6 font-light text-justify text-white-500 md:text-lg dark:text-white-400">Somos el motor de
        transformación para las empresas de Panamá, creando operaciones optimizadas y automatizadas, fomentando un
        crecimiento empresarial sostenible y eficiente.</p>
    </div>
  </div>
</section>
</div>

)

}

export default MV