import type { SectionName } from "./types";
import { useActiveSection } from "./context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

type useSectionInViewParams = {
    sectionName: SectionName;
    threshold?: number;
}


export default function useSectionInView({ sectionName, threshold = 0.75 }: useSectionInViewParams) {
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
    }
}
