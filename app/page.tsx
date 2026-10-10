
const balones = [
  {
    id: 1,
    nombre: "ProBall Elite",
    categoria: "FÚTBOL 11",
    precio: 899,
    color: "from-emerald-400 to-lime-300",
    imagen: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0b1b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    nombre: "ProBall Control",
    categoria: "ENTRENAMIENTO",
    precio: 599,
    color: "from-sky-400 to-blue-600",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    nombre: "ProBall Street",
    categoria: "FÚTBOL URBANO",
    precio: 449,
    color: "from-orange-400 to-rose-500",
    imagen: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080a09] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#080a09]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#" className="text-3xl font-black italic tracking-tighter">
            Pro<span className="text-lime-400">Ball</span>
            <span className="ml-1 text-lime-400">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#" className="transition hover:text-lime-400">Inicio</a>
            <a href="#catalogo" className="transition hover:text-lime-400">Balones</a>
            <a href="#nosotros" className="transition hover:text-lime-400">Nosotros</a>
            <a href="#contacto" className="transition hover:text-lime-400">Contacto</a>
          </nav>

          <a
            href="#catalogo"
            className="rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            Ver tienda ↗
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
              <span className="h-2 w-2 rounded-full bg-lime-400" />
              TU JUEGO, TU PASIÓN
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              DOMINA
              <br />
              CADA <span className="text-lime-400">JUGADA.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              Encuentra el balón ideal para llevar tu juego al siguiente nivel.
              Calidad, control y pasión en cada toque.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#catalogo"
                className="rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition hover:scale-105 hover:bg-lime-300"
              >
                EXPLORAR BALONES ↗
              </a>
              <a
                href="#nosotros"
                className="rounded-full border border-white/20 px-7 py-4 font-semibold transition hover:border-lime-400"
              >
                Conócenos
              </a>
            </div>

            <div className="mt-12 flex gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-black">100%</p>
                <p className="mt-1 text-xs text-gray-500">Pasión por el fútbol</p>
              </div>
              <div>
                <p className="text-2xl font-black">+ Calidad</p>
                <p className="mt-1 text-xs text-gray-500">Para cada partido</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-lime-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b211b] to-[#0b0d0b] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-gray-400">
                  COLECCIÓN DESTACADA
                </span>
                <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-black text-black">
                  PB / 01
                </span>
              </div>

              <img
                src={balones[0].imagen}
                alt="Balón de fútbol destacado de ProBall"
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />

              <div className="flex items-end justify-between gap-4 pt-5">
                <div>
                  <p className="text-xs font-bold tracking-widest text-lime-400">
                    RENDIMIENTO Y CONTROL
                  </p>
                  <h2 className="mt-2 text-2xl font-black">El juego empieza aquí.</h2>
                </div>
                <a
                  href="#catalogo"
                  aria-label="Ver catálogo"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime-400 text-2xl font-bold text-black transition hover:scale-110"
                >
                  ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
              ENCUENTRA EL TUYO
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Nuestros balones<span className="text-lime-400">.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Opciones para competir, entrenar o disfrutar el fútbol con amigos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {balones.map((balon) => (
            <article
              key={balon.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111411] transition hover:-translate-y-1 hover:border-lime-400/50"
            >
              <div className="relative overflow-hidden bg-[#1b201b]">
                <img
                  src={balon.imagen}
                  alt={balon.nombre}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-2 text-xs font-bold tracking-wider text-lime-400">
                  {balon.categoria}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold">{balon.nombre}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Balón para disfrutar cada partido.
                </p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <p className="text-2xl font-black">
                    ${balon.precio.toLocaleString("es-MX")}{" "}
                    <span className="text-xs font-medium text-gray-400">MXN</span>
                  </p>
                  <a
                    href="#contacto"
                    className="rounded-full bg-lime-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
                  >
                    Consultar ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-500">
          * Los modelos y precios mostrados son de ejemplo. Se pueden sustituir por tus productos reales.
        </p>
      </section>

      <section id="nosotros" className="border-y border-white/10 bg-[#101310]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center md:px-10">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
              NUESTRA PASIÓN
            </p>
            <h2 className="mt-3 text-4xl font-black">
              El fútbol nos une.
            </h2>
          </div>
          <p className="leading-8 text-gray-400">
            En ProBall queremos ayudarte a encontrar el balón adecuado para tus
            partidos, entrenamientos y momentos inolvidables en la cancha.
            Estamos construyendo un espacio para quienes viven el fútbol con pasión.
          </p>
        </div>
      </section>

      <footer id="contacto" className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <a href="#" className="text-2xl font-black italic">
            Pro<span className="text-lime-400">Ball</span>.
          </a>
          <div>
            <p className="font-bold">¿Buscas tu próximo balón?</p>
            <p className="mt-1 text-sm text-gray-400">
              Próximamente podrás consultar aquí cómo realizar tu pedido.
            </p>
          </div>
          <p className="text-xs text-gray-500">
            © 2026 ProBall. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}