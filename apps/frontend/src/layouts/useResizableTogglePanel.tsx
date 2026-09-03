import { useRef, useState } from "react"

export function useResizableTogglePanel(defaultWidth: number, minWidth: number, maxWidth: number) {
    const [width, setWidth] = useState(defaultWidth)
    const startX = useRef(0)
    const startWidth = useRef(0)
    const [activePanel, setActivePanel] = useState<string | null>(null);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.setPointerCapture(e.pointerId) //capture point, if not, event will lost when mouse leave handler div
        startX.current = e.clientX
        startWidth.current = width
        document.body.style.userSelect = 'none' //prevent select text action
    }

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.buttons !== 1) return //0=null;1=left;2=right;4=bottom;3=left+right
        const next = startWidth.current + e.clientX - startX.current
        if (next > maxWidth) return
        if (next < minWidth) {
            setActivePanel(null)
            setWidth(defaultWidth)
            return
        }
        setWidth(Math.min(next, maxWidth))
    }

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.releasePointerCapture(e.pointerId)
        document.body.style.userSelect = ''
    }


    return {
        width,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        activePanel,
        setActivePanel
    }
}