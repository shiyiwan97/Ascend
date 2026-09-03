import { Outlet } from "react-router";
import { useResizableTogglePanel } from "./useResizableTogglePanel";
import { CircleFadingArrowUpIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";



export default function RootLayout() {
    const { width, onPointerDown, onPointerMove, onPointerUp, activePanel: activeLeftPanel, setActivePanel: setActiveLeftPanel } = useResizableTogglePanel(200, 100, 500)
    const leftSidebarWidth = activeLeftPanel ? width : 0;
    return (
        <div className="grid grid-cols-[auto_auto_minmax(0,1fr)_300px] grid-rows-[auto_1fr_auto] h-screen overflow-hidden">
            <div className="col-span-4 h-12 bg-background">
                <Toggle><CircleFadingArrowUpIcon /></Toggle>
                Header</div>
            <div className="h-full overflow-hidden flex flex-col p-1 gap-1">  {/*only add scroll bar at inner container*/}
                <Toggle pressed={activeLeftPanel === "explorer"} onPressedChange={(pressed) => setActiveLeftPanel(pressed ? "explorer" : null)}>
                    <CircleFadingArrowUpIcon />
                </Toggle>
                <Toggle pressed={activeLeftPanel === "search"} onPressedChange={(pressed) => setActiveLeftPanel(pressed ? "search" : null)}>
                    <CircleFadingArrowUpIcon />
                </Toggle>
                <Toggle pressed={activeLeftPanel === "git"} onPressedChange={(pressed) => setActiveLeftPanel(pressed ? "git" : null)}>
                    <CircleFadingArrowUpIcon />
                </Toggle>
            </div>
            <aside className="relative border-r overflow-hidden bg-sidebar"
                style={{ width: leftSidebarWidth }}>
                <div >左侧边栏</div>
                <div className="absolute right-0 top-0 w-2 h-full
                hover:bg-amber-100 delay-100 hover:cursor-ew-resize"
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
            <div className="col-span-4 h-12 bg-background">Footer</div>
        </div>
    )
}