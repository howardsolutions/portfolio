'use client';

import { useFirstViewportEntry } from '@/hooks';
import {
  CSSProperties,
  HTMLProps,
  PropsWithChildren,
  Suspense,
  useRef,
} from 'react';
import Loader from './Loader';

type RenderOnViewportEntryProps = {
  threshold: number;
  root?: HTMLElement | null;
  rootMargin?: string | undefined;
  className?: HTMLProps<HTMLElement>['className'];
  style?: CSSProperties;
  sectionName: string;
};

function RenderOnViewportEntry({
  children,
  threshold = 0,
  root = null, // default root - is null - point to the viewport
  rootMargin = '0px 0px 0px 0px',
  style,
  className,
  sectionName,
}: PropsWithChildren<RenderOnViewportEntryProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useFirstViewportEntry(ref, { threshold, root, rootMargin });

  return (
    <div style={style} className={className} ref={ref}>
      {entered && (
        <Suspense key={sectionName} fallback={<Loader />}>
          {children}
        </Suspense>
      )}
    </div>
  );
}

export default RenderOnViewportEntry;
