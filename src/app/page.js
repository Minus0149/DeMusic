import Nav from '@/app/components/Nav'
import ThreeJsViewer from '@/app/components/ThreeJsViewer'

export default function Home() {
  return (
    <div className="bg-black text-white h-full overflow-x-hidden ">
      <Nav />
      <ThreeJsViewer />
    </div>
  )
}
