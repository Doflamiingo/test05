import React from 'react';

const Testimonials = () => {
  return (
    <div className="container my-5 mx-auto md:px-16">
      <section className="mb-20 text-center">
        <h2 className="mb-6 text-3xl font-bold">Avis clients</h2>
  
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img src="/leysha-testimonial-picture.jpg" className="w-32 rounded-full shadow-lg dark:shadow-black/20 h-36 w-36" />
            </div>
            <h5 className="mb-2 text-lg font-bold">Leysha</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              Artiste
            </h6>
            <p className="mb-4">
              Très bon photographe ! J&apos;ai eu une quarantaine de clichés magnifiques et Instagrammables.
              Il sait capturer les bons moments ✨ Je valide !

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="inline-block w-6">
                <path fill="currentColor" d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
              </svg>
            </p>
            <ul className="mb-0 flex justify-center">
              {/* Insérez ici le contenu des balises <li> */}
            </ul>
          </div>
          {/* Les autres blocs similaires... */}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
