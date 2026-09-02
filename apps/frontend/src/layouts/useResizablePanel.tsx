import { useRef, useState } from "react"

export function useResizablePanel(defaultWidth: number) {
    const [width, setWidth] = useState(defaultWidth)
    const startX = useRef(0)
    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.setPointerCapture(e.pointerId) //capture point, if not, event will lost when mouse leave handler div
        startX.current = e.clientX
        document.body.style.userSelect = 'none' //prevent select text action
    }

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.buttons !== 1) return //0=null;1=left;2=right;4=bottom;3=left+right
        const delta = e.clientX - startX.current
        setWidth(e.clientX)

    }

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        e.currentTarget.releasePointerCapture(e.pointerId)
        document.body.style.userSelect = ''
    }


    return {
        width,
        onPointerDown,
        onPointerMove,
        onPointerUp
    }
}