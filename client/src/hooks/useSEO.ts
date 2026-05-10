import { useEffect } from 'react'

export default function useSEO({ title, description, ogTitle, ogDescription }: { title?: string; description?: string; ogTitle?: string; ogDescription?: string }) {
    useEffect(() => {
        if (title) document.title = title
        if (description) {
            let el = document.querySelector('meta[name="description"]')
            if (!el) { el = document.createElement('meta'); el.setAttribute('name', 'description'); document.head.appendChild(el) }
            el.setAttribute('content', description)
        }
        if (ogTitle) {
            let el = document.querySelector('meta[property="og:title"]')
            if (!el) { el = document.createElement('meta'); el.setAttribute('property', 'og:title'); document.head.appendChild(el) }
            el.setAttribute('content', ogTitle)
        }
        if (ogDescription) {
            let el = document.querySelector('meta[property="og:description"]')
            if (!el) { el = document.createElement('meta'); el.setAttribute('property', 'og:description'); document.head.appendChild(el) }
            el.setAttribute('content', ogDescription)
        }
    }, [title, description, ogTitle, ogDescription])
}
