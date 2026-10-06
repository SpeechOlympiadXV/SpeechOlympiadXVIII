import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Document, Page, pdfjs } from 'react-pdf'
// @ts-ignore - react-pageflip might not have full TS definitions for React 18+
import HTMLFlipBook from '@vuvandinh203/react-flipbook'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import souvenirPdf from '@/assets/Souvenir.pdf'

// worker configuration
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const PdfPage = React.forwardRef<HTMLDivElement, { children: React.ReactNode; number: number; density?: 'hard' | 'soft' }>((props, ref) => {
  return (
    // data-density="hard" makes page-flip rotate the real element instead of
    // cloneNode()-ing it into a temporary copy (soft pages in portrait mode).
    // Those DOM insert/remove cycles were what made the page jump on mobile.
    <div className="page bg-white shadow-lg overflow-hidden flex justify-center items-center h-full w-full relative" ref={ref} data-density={props.density || 'soft'}>
      <div className="page-content h-full w-full flex items-center justify-center">
        {props.children}
      </div>
      {/* Optional page number display 
      <div className="absolute bottom-2 text-gray-500 text-xs w-full text-center">{props.number}</div>
      */}
    </div>
  )
})
PdfPage.displayName = 'PdfPage'

export function Souvenir() {
  const [numPages, setNumPages] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const flipBookRef = useRef<any>(null)

  const handlePrevPage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (flipBookRef.current && flipBookRef.current.pageFlip()) {
      flipBookRef.current.pageFlip().flipPrev()
    }
  }

  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (flipBookRef.current && flipBookRef.current.pageFlip()) {
      flipBookRef.current.pageFlip().flipNext()
    }
  }

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  // Calculate dynamic dimensions based on screen size
  const isMobile = windowWidth < 768;
  // Use 85% of screen width on mobile to ensure it doesn't overflow paddings
  const bookWidth = isMobile ? Math.floor(windowWidth * 0.85) : 450;
  const bookHeight = bookWidth * 1.414; // roughly A4 ratio

  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen">
      <motion.div 
        className="text-center mb-8 lg:mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-page mb-4">
          Speech Olympiad XVIII <span className="text-ember">Souvenir</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore the memories, articles, and highlights of Speech Olympiad XVIII.
        </p>
      </motion.div>

      <motion.div 
        className="w-full flex justify-center relative mb-12 max-w-5xl z-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-center items-center w-full min-h-[500px]">
          <Document
            file={souvenirPdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex justify-center"
            loading={<div className="text-ember animate-pulse text-xl">Loading Souvenir...</div>}
          >
            {numPages > 0 && (
              <div
                className="relative mx-auto"
                style={{ width: isMobile ? bookWidth : bookWidth * 2, height: bookHeight, overflowAnchor: 'none' }}
              >
                <HTMLFlipBook
                  ref={flipBookRef}
                  key={isMobile ? `mobile-${bookWidth}` : 'desktop'}
                  width={bookWidth}
                  height={bookHeight}
                  size="fixed"
                  minWidth={300}
                  maxWidth={600}
                  minHeight={420}
                  maxHeight={850}
                  showCover={true}
                  mobileScrollSupport={false}
                  className="flipbook shadow-2xl rounded-sm mx-auto"
                  style={{ margin: '0 auto' }}
                  drawShadow={true}
                  flippingTime={800}
                  usePortrait={isMobile}
                  startPage={0}
                  swipeDistance={isMobile ? 10000 : 30}
                  useMouseEvents={!isMobile}
                  clickEventForward={false}
                  autoSize={false}
                  renderOnlyPageLengthChange={false}
                >
                  {[...Array(numPages).keys()].map((pNum) => (
                    <PdfPage key={pNum} number={pNum + 1} density={isMobile ? 'hard' : 'soft'}>
                      <Page 
                        pageNumber={pNum + 1} 
                        width={bookWidth} 
                        renderAnnotationLayer={false} 
                        renderTextLayer={false} 
                        className="w-full h-full flex items-center justify-center pointer-events-none select-none" 
                      />
                    </PdfPage>
                  ))}
                </HTMLFlipBook>

                {/* Mobile Tap Zones overlay */}
                {isMobile && (
                  <div className="absolute inset-0 flex z-50">
                    <div 
                      className="w-1/2 h-full cursor-pointer" 
                      onClick={handlePrevPage}
                      aria-label="Previous Page"
                    />
                    <div 
                      className="w-1/2 h-full cursor-pointer" 
                      onClick={handleNextPage}
                      aria-label="Next Page"
                    />
                  </div>
                )}
              </div>
            )}
          </Document>
        </div>
      </motion.div>

      <motion.div 
        className="mt-8 lg:mt-12 z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a 
          href={souvenirPdf} 
          download="Speech_Olympiad_XVIII_Souvenir.pdf"
          className="btn-ember"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download Souvenir</span>
        </a>
      </motion.div>
    </div>
  )
}
