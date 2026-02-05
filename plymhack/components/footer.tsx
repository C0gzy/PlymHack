import Link from 'next/link'

export function Footer() {
  return (
    <footer className="text-white">
      <div className="container mx-auto px-4">
        {/* Risk Assessment */}
        <div className="text-center mb-12">
            <Link href="/Babbage_Computing_RA.pdf" className="text-muted-foreground hover:text-primary" target="_blank">
                Risk Assessment
            </Link>
        </div>
      </div>
    </footer>
  )
}