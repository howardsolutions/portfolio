import type { SectionName } from "./types";
import { useActiveSection } from "./context/ActiveSectionContext";
import { useEffect, useState, useRef, RefObject } from "react";
import { useInView } from 'react-intersection-observer';

type useSectionInViewParams = {
    sectionName: SectionName;
    threshold?: number;
}


export function useSectionInView({ sectionName, threshold = 0.75 }: useSectionInViewParams) {
    const { ref, inView } = useInView({
        threshold
    });

    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);


    return {
        ref,
        inView
    }
}

export function useFirstViewportEntry(ref: RefObject<HTMLElement>, observerOptions: IntersectionObserverInit | undefined) {
    const [entered, setEntered] = useState(false);

    const observer = useRef(new IntersectionObserver(
        ([entry]) => {
            return setEntered(entry.isIntersecting);
        }, observerOptions));

    useEffect(() => {
        const el = ref.current;
        const obs = observer.current;

        if (entered) {
            obs.disconnect();
            return;
        };

        if (el && !entered) obs.observe(el);

        return () => obs.disconnect();
    }, [entered, ref]);

    return entered;
}