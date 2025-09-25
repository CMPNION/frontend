function Assignment3() {
    const galleryImgs = [
    "https://m.media-amazon.com/images/I/81rmwFjWLAL._AC_SL1500_.jpg",
    "https://rhymetec.com/wp-content/uploads/2024/12/BannerImage-e1733949667182.png",
    "https://noguiltlife.com/wp-content/uploads/2018/08/we-dont-talk-about-August-back-to-school-memes-for-teachers.jpg",
    "https://cleanmemes.com/wp-content/uploads/2025/04/img_9788-1.jpg?w=800",
    "https://preview.redd.it/happy-new-year-2025-v0-inno3oaeco9c1.jpeg?auto=webp&s=f623bbcb3a8cd3306407ae587cf6fd439d727f3c",
    "https://aiartrevolution.com/wp-content/uploads/2025/08/copilot-20250810-233549-6898dfa7d6877-1024x683.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1ahqz_rwzHIhBGj5nn6hKOyV8wUc_jaqOw&s",
    "https://i0.wp.com/www.unmc.edu/healthsecurity/transmission/wp-content/uploads/2025/01/Screenshot-2025-01-02-at-15.54.11-1024x944.png?ssl=1",
    "https://brobible.com/wp-content/uploads/2025/01/2024-vs-2025-meme.jpg",
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto p-6 space-y-12">
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded flex items-center justify-center text-white font-bold">
            DN
            </div>
            <div>
              <div className="text-lg font-semibold">Assignment 3</div>
              <div className="text-sm text-gray-400">Flexbox & Grid (Tailwind)</div>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <a className="text-sm text-gray-300 hover:text-indigo-400" href="#flex">
              Flexbox
            </a>
            <a className="text-sm text-gray-300 hover:text-indigo-400" href="#grid">
              Grid
            </a>
            <a className="text-sm text-gray-300 hover:text-indigo-400" href="#portfolio">
              Portfolio
            </a>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-500">
              Submit
            </button>
          </nav>
        </header>

        <section id="flex" className="space-y-6">
          <h2 className="text-2xl font-semibold">Part 1 — Flexbox</h2>

          <div className="bg-gray-800 p-6 rounded shadow-sm">
            <h3 className="text-lg font-medium mb-4">Task 1 — Card Row</h3>

            <div className="flex flex-col md:flex-row gap-6">
              {[
                {
                  title: "Card One",
                  text: "This is a sample description for card one. It uses flexbox so heights match.",
                  img: "https://picsum.photos/seed/card1/400/250",
                },
                {
                  title: "Card Two",
                  text: "Sample description for card two. Hover to see the effect.",
                  img: "https://picsum.photos/seed/card2/400/250",
                },
                {
                  title: "Card Three",
                  text: "Sample description for card three. Buttons align to bottom.",
                  img: "https://picsum.photos/seed/card3/400/250",
                },
              ].map((c, idx) => (
                <article
                  key={idx}
                  className="flex-1 bg-gray-700 rounded-lg overflow-hidden border border-gray-600 transform transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
                >
                  <img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold mb-2">{c.title}</h4>
                    <p className="text-sm text-gray-300 mb-4 flex-1">{c.text}</p>
                    <div className="mt-2">
                      <button className="px-3 py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-500">
                        Learn More
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Part 2: Grid */}
        <section id="grid" className="space-y-6">
          <h2 className="text-2xl font-semibold">Part 2 — Grid System</h2>

          {/* Task 2: Page Layout with Grid Areas (implemented with grid & spans) */}
          <div className="bg-gray-800 p-6 rounded shadow-sm">
            <h3 className="text-lg font-medium mb-4">Task 2 — Page Layout (Grid)</h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <header className="col-span-1 md:col-span-4 p-4 bg-gray-800 rounded border border-gray-600">
                <div className="font-semibold">Header (spans top)</div>
              </header>

              <aside className="col-span-1 p-4 bg-gray-800 rounded border border-gray-600">
                <div className="font-medium mb-2">Sidebar (left)</div>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>Navigation item 1</li>
                  <li>Navigation item 2</li>
                  <li>Navigation item 3</li>
                </ul>
              </aside>

              <main className="col-span-1 md:col-span-3 p-4 bg-gray-800 rounded border border-gray-600">
                <div className="font-medium mb-2">Main content (right)</div>
                <p className="text-sm text-gray-300">
                  This area represents the main content. Grid columns and row spans are used so the header and footer
                  span across.
                </p>
              </main>

              <footer className="col-span-1 md:col-span-4 p-4 bg-gray-800 rounded border border-gray-600">
                <div className="text-sm text-gray-300">Footer (spans bottom)</div>
              </footer>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded shadow-sm">
            <h3 className="text-lg font-medium mb-4">Task 3 — Image Gallery</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryImgs.map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-lg">
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-40 object-cover transition-transform hover:scale-105" />
                  <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition flex items-end">
                    <div className="w-full text-white p-3 bg-black opacity-0 hover:opacity-100 transition">
                      <div className="text-sm font-semibold">Image {i + 1}</div>
                      <div className="text-xs">This is a meme</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 3: Combining Flexbox & Grid (Portfolio) */}
        <section id="portfolio" className="space-y-6">
          <h2 className="text-2xl font-semibold">Part 3 — Portfolio (Flexbox & Grid)</h2>

          <div className="bg-gray-800 p-6 rounded shadow-sm">
            {/* Header uses flex (already at top but show local header for the portfolio block) */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-medium">Portfolio</div>
              <nav className="flex gap-3">
                <a className="text-sm text-gray-300 hover:text-indigo-400" href="#projects">Projects</a>
                <a className="text-sm text-gray-300 hover:text-indigo-400" href="#about">About</a>
              </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section id="projects" className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((n) => (
                    <article key={n} className="border border-gray-600 rounded-lg p-4 flex flex-col h-full bg-gray-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-700 rounded overflow-hidden">
                          <img src={`https://cdn-icons-png.flaticon.com/256/25/25231.png`} alt={`Proj ${n}`} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Project {n}</h4>
                          <div className="text-xs text-gray-400">Category</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-300 flex-1">
                        description for project {n}.
                      </p>

                      <div className="mt-4">
                        <button className="px-3 py-2 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-500">
                          View Project
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <aside id="about" className="bg-gray-800 p-4 rounded border border-gray-600">
                <h4 className="font-semibold mb-2 text-gray-100">About / Info</h4>
                <p className="text-sm text-gray-300 mb-3">
                  My contacts placed here
                </p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>Email: norkindima57@gmail.com</li>
                  <li>Phone: +7 (700) 156 82-08</li>
                </ul>
              </aside>
            </div>

            <footer className="mt-6 text-sm text-gray-400">
              Footer — portfolio page footer that spans full width of this card.
            </footer>
          </div>
        </section>

        <section className="text-sm text-gray-300">
          <div className="font-medium mb-2">Submission Notes</div>
          <ol className="list-decimal list-inside space-y-1">
            <li>Watch tik-tok for 13 hours</li>
            <li>Get a scholarship</li>
            <li>git push --force</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Assignment3;