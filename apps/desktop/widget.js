/*
 * 2023 Tarpeeksi Hyvae Soft
 * 
 */

export default function(widgetOptions = {}, renderArgs = {}) {
    return ()=>w95.$render(DesktopWindow, widgetOptions, renderArgs);
}

function DesktopWindow({
} = {})
{
    const width = w95.state(w95.shell.display.width);
    const height = w95.state(w95.shell.display.height);

    return {
        get x() { return 0 },
        get y() { return 0 },
        get width() { return width.now },
        get height() { return height.now },
        Message: {
            fitToDisplay() {
                width.set(w95.shell.display.width);
                height.set(w95.shell.display.height);
            },
        },
        Form() {
            return w95.widget.window({
                $name: "window",
                x: 0,
                y: 0,
                width: width.now,
                height: height.now,
                backgroundColor: w95.palette.named.teal,
                styleHints: [
                    w95.enum.styleHint.desktop,
                ],
                children: [
                    w95.widget.label({
                        x: 5,
                        y: 5,
                        color: w95.palette.named.white,
                        text: "This is a feature-incomplete demonstrational version.",
                    }),
                ],
                onMouseDown: ()=>{
                    w95.$recurseDescendantWidgets(this, (widget)=>{widget.Message?.blur?.()});
                },
            });
        },
    };
}
