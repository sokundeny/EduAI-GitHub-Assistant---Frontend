import React from 'react'
import LeftBar from '../../features/shell/components/LeftBar'
import MainBar from '../../features/shell/components/MainBar'
import MainPanel from '../../features/shell/components/MainPanel'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared/components/ui/resizable'

const MainLayout = () => {
  return (
    <div className='flex flex-row min-w-full h-screen bg-amber-400'>
      <LeftBar />
      <ResizablePanelGroup direction='horizontal'>  
        <ResizablePanel 
          defaultSize={15}
          minSize={10}
          maxSize={20}>
          <MainBar />
        </ResizablePanel>
        
        <ResizableHandle />
        
        <ResizablePanel >
          <MainPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </ div>
  )
}

export default MainLayout