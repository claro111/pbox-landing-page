interface MobileMenuState {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

declare function useMobileMenu(): MobileMenuState
export default useMobileMenu

