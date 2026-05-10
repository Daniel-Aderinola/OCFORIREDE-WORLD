import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function useScrollAnimation() {
    const controls = useAnimation()
    const [ref, inView] = useInView({ once: true, threshold: 0.12 })
    useEffect(() => { if (inView) controls.start('visible') }, [controls, inView])
    return { ref, controls }
}
