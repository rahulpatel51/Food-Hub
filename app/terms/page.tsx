import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Terms & Conditions</h1>
          <div className="prose max-w-none">
            <p>
              Welcome to Food Hub. These terms and conditions outline the rules and regulations for the use of our
              website and services.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Food
              Hub if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Food
              Hub's website for personal, non-commercial transitory viewing only.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Food Hub's website are provided on an 'as is' basis. Food Hub makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Food Hub or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Food Hub's website, even if Food Hub or a Food Hub authorized representative has
              been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Revisions and Errata</h2>
            <p>
              The materials appearing on Food Hub's website could include technical, typographical, or photographic
              errors. Food Hub does not warrant that any of the materials on its website are accurate, complete or
              current. Food Hub may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and
              you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

