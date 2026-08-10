'use client'

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function scrollToSection(
  elementId: string,
  duration: number = 1,
  offsetRem: number = 0,
): void {
  const targetElement = document.getElementById(elementId)

  if (!targetElement) {
    console.warn(`Element with ID '${elementId}' not found.`)
    return
  }

  const offsetPx = offsetRem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offsetPx

  gsap.to(window, {
    duration: duration,
    scrollTo: { y: targetPosition, autoKill: true },
    ease: 'power2.out',
  })
}
