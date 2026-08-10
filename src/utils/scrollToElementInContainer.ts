'use client'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function scrollToElementInContainer(
  containerId: string,
  elementId: string,
  duration: number = 1,
  offsetRem: number = 0,
): void {
  const container = document.getElementById(containerId)
  const targetElement = document.getElementById(elementId)

  if (!container) {
    console.warn(`Container with ID '${containerId}' not found.`)
    return
  }
  if (!targetElement) {
    console.warn(`Element with ID '${elementId}' not found.`)
    return
  }

  const offsetPx = offsetRem * parseFloat(getComputedStyle(document.documentElement).fontSize)

  const containerRect = container.getBoundingClientRect()
  const targetRect = targetElement.getBoundingClientRect()

  const targetPosition = targetRect.top - containerRect.top + container.scrollTop - offsetPx

  gsap.to(container, {
    duration: duration,
    scrollTo: { y: targetPosition, autoKill: true },
    ease: 'power2.out',
  })
}
