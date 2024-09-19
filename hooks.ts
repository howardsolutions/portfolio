import type { SectionName } from "./types";
import { useActiveSection } from "./context/ActiveSectionContext";
import { useEffect, useState, useRef, MutableRefObject } from "react";
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

/* 
    this hook takes ref to an HTML Element, and observes it for it’s entry in the viewport, 
    with the observerOptions provided by the host component calling the hook, 
    just for that extra configurability.
*/

export function useFirstViewportEntry(ref: MutableRefObject<HTMLElement | null>, observerOptions: IntersectionObserverInit | undefined) {
    const [entered, setEntered] = useState(false);

    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => setEntered(entry.isIntersecting), observerOptions);

        const el = ref!.current;
        const obs = observer.current;

        // STOP OBSERVING the element once it has entered the viewport for the FIRST time.
        if (entered) {
            obs.disconnect();
            return;
        };

        if (el && !entered) obs.observe(el);

        return () => obs.disconnect();
    }, [entered, ref]);

    return entered;
}