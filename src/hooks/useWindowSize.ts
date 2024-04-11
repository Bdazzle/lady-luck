import { useEffect, useRef, useState } from "react";

const useWindowSize = () : [number, string] => {
    const [windowSize, setWindowSize] = useState<number>(0);
    const [breakpoint, setBreakpoint] = useState<string>('sm')

    useEffect(() => {
        const resize = () =>{
            setWindowSize(window.innerWidth)
            // console.log('test',window.innerWidth)
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

// const useWindowSize = () => {
//     const [windowSize, setWindowSize] = useState(0);
//     const [breakpoint, setBreakpoint] = useState('sm');
//     const resizeRef = useRef<null | number>(null);
  
//     useEffect(() => {
//       const handleResize = () => {
//         clearTimeout(resizeRef.current as number); // Clear any pending debounce timeout
//         resizeRef.current = setTimeout(() => {
//           setWindowSize(window.innerWidth );
  
//           if (window.innerWidth >= 640 && window.innerWidth < 768) {
//             setBreakpoint('md');
//           } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
//             setBreakpoint('lg');
//           } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
//             setBreakpoint('xl');
//           } else if (window.innerWidth >= 1281) { // Adjusted for consistency
//             setBreakpoint('2xl');
//           } else {
//             setBreakpoint('sm');
//           }
//         }, 250); // Debounce timeout
//       };
  
//       window.addEventListener('resize', handleResize);
  
//       // Initiate initial measurement for consistency
//       handleResize();
  
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);
  
//     return [windowSize, breakpoint];
//   };

export default useWindowSize