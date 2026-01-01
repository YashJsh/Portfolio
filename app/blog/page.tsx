import { BlogGrid } from '@/components/blog/blog-grid'
import { Navbar } from '@/components/navbar'
import React from 'react'

const Blog = () => {
    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-6 space-y-12 mb-10" >
                <Navbar />
                <div className='flex flex-col gap-4'>
                    <header className="space-y-2">
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Writing
                        </h1>
                        
                    </header>

                    <BlogGrid />
                </div>
            </div>
        </main>
    )
}

export default Blog