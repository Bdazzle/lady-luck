import { useEffect, useState } from "react";

const useWindowSize = () : [number, string] => {
    const [windowSize, setWindowSize] = useState<number>(0);
    const [breakpoint, setBreakpoint] = useState<string>('sm')

    useEffect(() => {
        const resize = () =>{
            setWindowSize(window.innerWidth)
            if(window.innerWidth >= 640 && window.innerWidth <= 768) {
                setBreakpoint('md')
            } else if(window.innerWidth > 768 && window.innerWidth < 1024) {
                setBreakpoint('lg')
            } else if(window.innerWidth >= 1024 && window.innerWidth < 1280) {
                setBreakpoint('xl')
            } else if(window.innerWidth >= 1536) {
                setBreakpoint('2xl')
            } else {
                setBreakpoint('sm')
            }
        }
        window.addEventListener("resize", resize);
        window.addEventListener('load', resize)
        return () => {
            window.removeEventListener("resize",resize)
            window.removeEventListener('load', resize)
        }
    }, []);
    
    return [windowSize, breakpoint];
}

export default useWindowSize