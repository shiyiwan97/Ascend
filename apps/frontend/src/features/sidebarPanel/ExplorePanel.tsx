import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
                children: []
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
                <Collapsible>
                    <CollapsibleTrigger>Toggle
                        <CollapsibleContent>1111</CollapsibleContent>
                    </CollapsibleTrigger>
                </Collapsible>
            )
        } else if (data.type === "File") {
            return (
                <CollapsibleContent>1111</CollapsibleContent>
            )

        }
    }

    return testData.map(renderFileItem)

}