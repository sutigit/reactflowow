'use client'
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


export default function Home() {
  return (
    <div className=''>
      <section className='relative h-[calc(100vh*(2/3))] '>
        <div className='absolute top-0 left-0 h-full w-full'>
          <ReactFlow>
            <Background />
          </ReactFlow>
        </div>
        <div className='container mx-auto pt-24'>
          <div className='max-w-96'>
            <h1 className='text-8xl font-bold mb-5'>React Flow<span className='text-orange-400 italic'>ow</span></h1>
            <p className='text-xl'>Plug-in UI components for <span style={{ color: '#FF0073' }}>React Flow</span>. Faster nodes. Cleaner edges. Less glue code.</p>
          </div>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}
