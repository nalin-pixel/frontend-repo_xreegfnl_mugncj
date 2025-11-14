export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

export function CardsGrid({ items = [], empty = 'Nothing yet' }) {
  if (!items.length) return <p className="text-slate-500">{empty}</p>
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <article key={idx} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
          {item.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.cover} alt="" className="mb-4 h-40 w-full rounded-lg object-cover" />
          ) : (
            <div className="mb-4 h-40 w-full rounded-lg bg-gradient-to-br from-indigo-100 to-sky-100" />
          )}
          <h3 className="text-lg font-medium text-slate-900">{item.title || item.name}</h3>
          {item.summary && <p className="mt-1 text-sm text-slate-600">{item.summary}</p>}
          {item.role && <p className="mt-1 text-sm text-slate-600">{item.role}</p>}
          {item.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{t}</span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  )
}
