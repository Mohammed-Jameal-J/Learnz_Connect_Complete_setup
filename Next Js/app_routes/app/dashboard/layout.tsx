import { ReactNode } from "react"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
        <h1>Dashboard Layout</h1>
        {children}
    </section>
  )
}

export default DashboardLayout