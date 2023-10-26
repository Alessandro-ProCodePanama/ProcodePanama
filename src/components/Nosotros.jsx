function Nosotros(){
    return (<div>
        <section className="dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img className="w-full dark:hidden" src="#"/>
            <img className="w-full hidden dark:block" src="#" />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-400 dark:text-white">
                Rolando Rivas
                </h2>
              <p className="mb-6 font-light text-white-900 md:text-lg dark:text-gray-400"> Experiencia sapeando</p>
            </div>
          </div>
        </section>
        <section className="dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white-400 dark:text-white">
                Alessandro Vergara
                </h2>
              <p className="mb-6 font-light text-white-900 md:text-lg dark:text-white-400">Apasionado por la seguridad.</p>
            </div>
            <img className="w-full dark:hidden" src="#" />
            <img className="w-full hidden dark:block" src="#"/>
          </div>
        </section>
      </div>)
}

export default Nosotros