import { ImgHTMLAttributes, useState, useRef, useEffect } from "react";

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderClassName?: string;
}

/**
 * Optimized lazy-loaded image component
 * - Native lazy loading for browser support
 * - Fallback for older browsers
 * - Reduces LCP and FCP
 */
export const LazyImage = ({
  src,
  alt,
  placeholderClassName = "bg-secondary/20",
  className = "",
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${placeholderClassName}`}>
      <img
        ref={imgRef}
        src={imageSrc || undefined}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
