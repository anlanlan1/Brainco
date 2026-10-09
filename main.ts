//% color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco {

    /**
     * 获取当前的专注力数值（椭圆形积木）
     * 范围为 0~100
     */
    //% block="专注力" blockId="GetAttention"
    export function getAttention(): number {
        serial.setRxBufferSize(1)
        return serial.readBuffer(1)[0]
    }

    /**
     * 判断专注力是否符合条件（菱形/布尔积木）
     * 使用内置 pxt.Compare，自带 6 种运算符：=, ≠, <, ≤, >, ≥
     */
    //% block="专注力 %op %threshold" blockId="CompareAttention"
    //% threshold.min=0 threshold.max=100 threshold.defl=50
    //% op.defl=pxt.Compare.GreaterOrEqual
    export function compareAttention(op: pxt.Compare, threshold: number): boolean {
        let value = getAttention()
        return pxt.Compare.compare(value, threshold, op)
    }
}
