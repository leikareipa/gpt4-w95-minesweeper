/*
 * 2023 Tarpeeksi Hyvae Soft
 * 
 */

import DesktopWindow from "./widget.js";

export function desktop()
{
    return {
        get appMeta() {
            return {
                name: "Desktop",
                version: "0.1",
                author: "Tarpeeksi Hyvae Soft",
            }
        },
        Form() {
            return DesktopWindow();
        },
    };
}
