import { useEffect } from 'react';

type UseScrollHandlerProps = {
    ref: React.RefObject<HTMLDivElement>;
};

const useScrollHandler = ({ ref }: UseScrollHandlerProps) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleWheel = (event: WheelEvent) => {
            const isScrollingDown = event.deltaY > 0;
            const isScrollingUp = event.deltaY < 0;
            const canScrollLeft = element.scrollLeft > 0;
            const canScrollRight = element.scrollLeft < element.scrollWidth - element.clientWidth;

            if ((isScrollingDown && canScrollRight) || (isScrollingUp && canScrollLeft)) {
                event.preventDefault();
            }
            // В противном случае, стандартное действие не блокируется,
            // и прокрутка будет работать как обычно.
        };

        element.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            if (element) {
                element.removeEventListener('wheel', handleWheel);
            }
        };
    }, [ref]);
};

export default useScrollHandler;
