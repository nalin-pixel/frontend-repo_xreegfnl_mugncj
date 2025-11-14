import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Section, CardsGrid } from './components/Sections'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [team, setTeam] = useState(null)
  const [members, setMembers] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [t, m, p] = await Promise.all([
          fetch(`${API_BASE}/api/team`).then((r) => r.json()),
          fetch(`${API_BASE}/api/members`).then((r) => r.json()),
          fetch(`${API_BASE}/api/projects`).then((r) => r.json()),
        ])
        setTeam(t.team || null)
        setMembers(m.members || [])
        setProjects(p.projects || [])
      } catch (e) {
        console.error(e)
      }
    }
    fetchAll()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <Hero />
      </main>

      <Section id="work" title="Team Projects" subtitle="A selection of what we've shipped.">
        <CardsGrid items={projects} empty="No projects yet. Use the seed button to add sample data." />
      </Section>

      <Section id="team" title="Our Team" subtitle="The people behind the work.">
        <CardsGrid items={members} empty="No members yet. Use the seed button to add sample data." />
      </Section>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <button
          onClick={async () => {
            try {
              await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
              const [t, m, p] = await Promise.all([
                fetch(`${API_BASE}/api/team`).then((r) => r.json()),
                fetch(`${API_BASE}/api/members`).then((r) => r.json()),
                fetch(`${API_BASE}/api/projects`).then((r) => r.json()),
              ])
              setTeam(t.team || null)
              setMembers(m.members || [])
              setProjects(p.projects || [])
            } catch (e) {
              console.error(e)
            }
          }}
          className="rounded-md bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800"
        >
          Seed sample content
        </button>
      </div>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
          © {new Date().getFullYear()} Your Team. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
