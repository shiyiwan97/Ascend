import { Outlet } from "react-router";
import { useResizablePanel } from "./useResizablePanel";



export default function RootLayout() {
    const { width, onPointerDown, onPointerMove, onPointerUp } = useResizablePanel(30)
    return (
        <div className="grid grid-cols-[auto_minmax(0,1fr)_300px] grid-rows-[auto_1fr] h-screen overflow-hidden">
            <div className="col-span-3 h-12 bg-background">Header</div>
            <aside className="relative border-r overflow-y-auto bg-sidebar"
                style={{ width: width }}>
                <div>左侧边栏</div>
                <div className="absolute right-0 top-0 w-2  h-full
                hover:bg-amber-100 delay-100 hover:cursor-col-resize"
                    onPointerMove={onPointerMove}
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                />
            </aside>
            <div>
                Hello
                <Outlet />
            </div>
            <aside className="border-l overflow-y-auto bg-sidebar">
                <div>右侧边栏</div>
            </aside>
        </div>
    )
}