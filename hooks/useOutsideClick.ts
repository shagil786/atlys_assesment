import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

function useOutsideClick() {
    const ref: MutableRefObject<any> = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, [ref]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const toggleOpen = () => { if (!isOpen) setIsOpen(prev => !prev) };
    const close = () => setIsOpen(false);

    return { ref, isOpen, toggleOpen, close };
}

export default useOutsideClick;
