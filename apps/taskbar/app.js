/*
 * 2023 Tarpeeksi Hyvae Soft
 * 
 */

import TaskbarWindow from "./widget.js";

export function taskbar()
{
    return {
        get appMeta() {
            return {
                name: "Taskbar",
                version: "0.1",
                author: "Tarpeeksi Hyvae Soft",
            }
        },
        Form() {
            return TaskbarWindow();
        },
    };
}
