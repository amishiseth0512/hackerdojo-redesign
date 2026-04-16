import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { TopBorder } from './TopBorder'

export function Layout() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] font-sans text-neutral-900 antialiased">
      <TopBorder />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
