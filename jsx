import AnimatedBackground from '@/components/AnimatedBackground'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <main className="relative z-10 p-10">
        <h1 className="text-4xl font-bold text-white">Welcome!</h1>
        <p className="text-white mt-4">This is a minimal aesthetic background animation.</p>
      </main>
    </div>
  )
}
