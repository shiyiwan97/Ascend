import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Folder, FolderOpen, File } from "lucide-react";


class FileItem {
    public type: "Folder" | "File" | "Other";
    public name: string;
    public remark?: string;
    public children: FileItem[] = [];

    constructor(type: "Folder" | "File" | "Other", name: string);

    constructor(type: "Folder" | "File" | "Other", name: string, remark?: string, children?: FileItem[]) {
        if (type === "File" && children?.length != 0) {
            throw Error("file can not have children")
        }
        this.type = type
        this.name = name
        remark || (this.remark = remark)
        children || (this.remark = remark)
    }

}

export default function ExplorePanel() {
    const testData: FileItem[] = [
        {
            type: "Folder",
            name: "folderA",
            children: []
        },
        {
            type: "Folder",
            name: "folderB",
            children: [{
                type: "Folder",
                name: "folderBA",
                children: [{
                    type: "File",
                    name: "File2",
                    children: []
                }]
            }, {
                type: "File",
                name: "File1",
                children: []
            }]
        },

    ]



    const renderFileItem = (data: FileItem) => {
        if (data.type === "Folder") {
            return (
                <Collapsible className="group" key={data.name}>
                    <CollapsibleTrigger render={
                        <Button variant="ghost" size="sm" className="w-full justify-start transition-none hover:bg-accent aria-expanded:bg-inherit aria-expanded:text-inherit">
                            <Folder className="group-data-open:hidden" />
                            <FolderOpen className="group-data-closed:hidden" />
                            {data.name}
                        </Button>} />
                    <CollapsibleContent className="ml-5">
                        {data.children.map((child) => renderFileItem(child))}
                    </CollapsibleContent>

                </Collapsible>
            )
        } else if (data.type === "File") {
            return (
                <Button variant="ghost" size="sm" className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"><File />{data.name}</Button>
            )

        }
    }

    return testData.map(renderFileItem)

}
