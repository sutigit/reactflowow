'use client'

import { Button } from '@/components/ui/button';
import { ReactFlow, Background, Panel } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const code = `
function MyNode(name) {
  return (
    <Card >
      <CardContent>
        <p>Hello {name}</p>
      </CardContent>
    </Card>
  );
}

export default memo(MyNode)
  `;

export default function Home() {
  return (
    <main>


      <section className='relative h-[calc(100vh*(3/5))] '>
        <div className='h-full w-full'>
          <ReactFlow
            panOnDrag={false}
            panOnScroll={false}
            zoomOnDoubleClick={false}
            zoomOnPinch={false}
            zoomOnScroll={false}>
            <Panel className='pt-18 w-full'>
              <div className='container mx-auto'>
                <div className='max-w-96'>
                  <h1 className='text-8xl font-bold mb-5'>React Flow<span className='text-indigo-400 bg-gradient-to-r from-xyflow-primary to-indigo-400 bg-clip-text text-transparent drop-shadow-[20px_0_30px_var(--theme-primary-glow)]'>ow</span></h1>
                  <p className='text-xl'>Ready-made and performance optimized nodes, edges, and utilities to help you build with <Link href="https://reactflow.dev/" className='text-xyflow-primary font-bold'>React Flow</Link> faster.</p>
                  <div className='flex gap-4 mt-8'>
                    <Button size="lg" className='rounded-full cursor-pointer hover:bg-indigo-200 drop-shadow-[0_0_5px_var(--theme-primary-glow)] bg-zinc-200'>Get Started <Rocket /></Button>
                  </div>
                </div>
              </div>
            </Panel>
            <Background color="var(--xyflow-background-pattern)" />
          </ReactFlow>
        </div>
      </section>


      <section>
        <div className='container mx-auto text-center pt-12'>
          <h2 className='text-3xl mb-4'>A companion library to <Link href="https://reactflow.dev/" className='text-xyflow-primary bold underline underline-offset-4'>React Flow</Link></h2>
        </div>
      </section>

      <section>
        <div className='container mx-auto py-12'>
          <h3 className='text-3xl mb-5'>Nodes</h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className='bg-zinc-800/50 border-none'>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section>
        <div className='container mx-auto py-12'>
          <h3 className='text-3xl mb-5'>Edges</h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className='bg-zinc-800/50 border-none'>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section>
        <div className='container mx-auto py-12'>
          <h3 className='text-3xl mb-5'>Utilities</h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
                  <div className="p-1">
                    <Card className='bg-zinc-800/50 border-none'>
                      <CardContent className="flex aspect-3/2 items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <footer className='bg-zinc-950 mt-40'>
        <div className='container mx-auto p-10'>Footer</div>
      </footer>

    </main >
  )
}
