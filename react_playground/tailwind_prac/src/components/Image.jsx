import { useState } from "react"
import placeHolderImage from "./../assets/placeholder_image.png"

const Image = ({ src, alt, width = 'w-48', height = 'h-48', className }) => {
    const [loaded, setLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    const handleImageError = () => {
        setHasError(true);
    };

    return (
        <div className={`relative ${width} ${height} ${className}`}>
            {!loaded && !hasError && (
                <div className="flex items-center justify-center w-full h-full text-gray-500 bg-gray-200">
                    <span>Is Loading...</span>
                </div>
            )}
            <img
                src={hasError ? placeHolderImage : src}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className="object-cover w-full h-full"
            />
        </div>
    )
}

export default Image;