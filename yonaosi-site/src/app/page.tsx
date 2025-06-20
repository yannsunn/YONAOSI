import Header from '@components/Header'
import HeroSection from '@components/HeroSection'
import ProblemSolutionSection from '@components/ProblemSolutionSection'
import DataDrivenResults from '@components/DataDrivenResults'
import LifeStageTabs from '@components/LifeStageTabs'
import AssetSimulator from '@components/AssetSimulator'
import SupportCards from '@components/SupportCards'
import ResultsSection from '@components/ResultsSection'
import CommunitySection from '@components/CommunitySection'
import PowerfulCTA from '@components/PowerfulCTA'
import FAQSection from '@components/FAQSection'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <DataDrivenResults />
        <LifeStageTabs />
        <AssetSimulator />
        <SupportCards />
        <ResultsSection />
        <CommunitySection />
        <PowerfulCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}