import { Menu, Github, Link as LinkIcon } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 text-white font-bold">TP</div>
          <span className="text-sm text-slate-600">Team Portfolio</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#work" className="text-slate-700 hover:text-slate-900">Work</a>
          <a href="#team" className="text-slate-700 hover:text-slate-900">Team</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-white md:flex">
            <Github size={16} />
            GitHub
          </a>
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
