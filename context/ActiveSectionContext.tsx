'use client';

import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useContext,
} from 'react';
import { links } from '@/app/_lib/data';

type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (!context)
    throw new Error('ActiveSectionContext was used outside Provider');

  return context;
};

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  // Need to keep track of this to disable the Observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
