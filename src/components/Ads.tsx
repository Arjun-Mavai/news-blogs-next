"use client"

import { useEffect } from "react"

export default function Ads() {
  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement("script")
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
    script.async = true
    script.crossOrigin = "anonymous"
    document.head.appendChild(script)
    
    return () => {
      // Clean up script when component unmounts
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="my-8 w-full overflow-hidden rounded-lg bg-muted p-4 text-center">
      <div className="h-[250px] w-full">
        <ins 
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-YOUR_ADSENSE_ID"
          data-ad-slot="YOUR_AD_SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true">
        </ins>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Advertisement</p>
    </div>
  )
}