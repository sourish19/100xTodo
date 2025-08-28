import { Navbar, UserProfile } from '../components'

const TodoLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
            repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
          `,
          backgroundSize: 'cover',
        }}
      />

      {/*Nav */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-150 px-4">
          <div className="shadow-input mt-4 flex items-center justify-between rounded-2xl bg-emerald-100 px-4 py-3">
            <Navbar />
            <UserProfile />
          </div>
        </div>
      </div>

      {/*Content */}
      <div className="relative mt-28 flex max-w-250 flex-col-reverse items-center justify-center px-5 sm:items-baseline sm:justify-start md:flex-row">
        {children}
      </div>
    </div>
  )
}

export default TodoLayout
