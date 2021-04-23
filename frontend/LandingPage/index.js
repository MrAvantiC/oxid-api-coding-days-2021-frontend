import { useGlobalData } from '../../utils'
import { ContentElements } from '../../patterns'

function Landingpage() {
  const { pageData } = useGlobalData()
  const config = pageData.data.config

  if (!config?.main) return null

  return (
    <main>
      <ContentElements elements={config.main.elements} />
    </main>
  )
}

export default Landingpage
