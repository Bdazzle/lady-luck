import React, { useState, useRef, CSSProperties } from 'react';

interface PrespectiveImageProps {
    src: string;
    alt: string;
    scaleFactor: number
    containerStyle?: CSSProperties
    containerClass?: string
    wrapperClass?: string,
    imageClass?: string,
    imageStyle?: CSSProperties
}

const PerspectiveImage: React.FC<PrespectiveImageProps> = ({ src, alt, scaleFactor,
    containerClass, containerStyle, imageClass, imageStyle, wrapperClass }) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [deltaX, setDeltaX] = useState(0);
    const [deltaY, setDeltaY] = useState(0);

    const handleMouseMove = (event: React.MouseEvent) => {
        const imageWidth = imageRef.current?.clientWidth;
        const imageHeight = imageRef.current?.clientHeight;
        const centerX = imageWidth as number / 2;
        const centerY = imageHeight as number / 2;

        const offsetX = event.nativeEvent.offsetX; // Offset from left edge within image
        const offsetY = event.nativeEvent.offsetY; // Offset from top edge within image

        const newDeltaX = ((offsetX - centerX) / centerX) * scaleFactor;
        const newDeltaY = ((offsetY - centerY) / centerY) * scaleFactor;

        setDeltaX(newDeltaX);
        setDeltaY(newDeltaY);
    };

    return (
        <div id='imgwrapper'
        className={`${wrapperClass && wrapperClass}`}
        >
            <div style={{
                ...containerStyle,
                overflow: 'hidden'
            }}
                id='imgcontainer'
                className={containerClass && containerClass}>
                <div id='imageoverlay'
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        /* Gradient to hide edges (adjust as needed) */
                        background: `linear - gradient(
                                to bottom,
                                rgba(0, 0, 0, 1) 100 %,
                                rgba(0, 0, 0, 0) 20 %,
                                rgba(0, 0, 0, 0) 80 %,
                                rgba(0, 0, 0, 1) 100 %)`,
                    }}
                >
                </div>
                <img
                    className={imageClass && imageClass}
                    ref={imageRef}
                    src={src}
                    alt={alt}
                    onMouseMove={handleMouseMove}
                    style={{
                        ...imageStyle,
                        transform: `translate3d(${-deltaX}px, ${deltaY}px, 0px)`,
                    }}
                />

            </div>
        </div>
    );
}

export default PerspectiveImage;