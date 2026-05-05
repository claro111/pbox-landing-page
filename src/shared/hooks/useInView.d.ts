import { RefObject } from 'react'

interface UseInViewOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

declare function useInView(
  options?: UseInViewOptions
): [RefObject<HTMLElement>, boolean]

export default useInView

