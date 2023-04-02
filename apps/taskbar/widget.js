/*
 * 2023 Tarpeeksi Hyvae Soft
 * 
 */

export default function(widgetOptions = {}, renderArgs = {}) {
    return ()=>w95.$render(TaskbarWindow, widgetOptions, renderArgs);
}

function TaskbarWindow({
} = {})
{
    const width = w95.state(4 + w95.shell.display.width);
    const height = w95.state(30);
    const x = w95.state(-2);
    const y = w95.state(2 + (w95.shell.display.height - height.now));

    return {
        get x() { return x.now },
        get y() { return y.now },
        get width() { return width.now },
        get height() { return height.now },
        Message: {
            fitToDisplay() {
                width.set(4 + w95.shell.display.width);
                height.set(30);
                x.set(-2);
                y.set(2 + (w95.shell.display.height - height.now));
            },
        },
        Form() {
            return w95.widget.window({
                x: x.now,
                y: y.now,
                width: width.now,
                height: height.now,
                styleHints: [
                    w95.enum.styleHint.plain,
                ],
                children: [
                    // Clock.
                    w95.widget.frame({
                        x: (width.now - 70),
                        y: 4,
                        width: 63,
                        height: 22,
                        children: [
                            w95.widget.time({
                                width: 63,
                                height: 22,
                                styleHints: [
                                    w95.enum.styleHint.alignHCenter,
                                    w95.enum.styleHint.alignVCenter,
                                ],
                            }),
                        ],
                    }),
                ],
            });
        },
    };
}
