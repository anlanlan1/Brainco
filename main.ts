//% color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco {

    /**
     * 比较运算符枚举（下拉菜单）
     */
    export enum CompareOperator {
        //% block=">"
        Greater = 1,
        //% block="<"
        Less = 2,
        //% block="="
        Equal = 3
    }

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
     * 例如：专注力 > 50，专注力 < 30，专注力 = 80
     */
    //% block="专注力 %op %threshold" blockId="CompareAttention"
    //% threshold.min=0 threshold.max=100 threshold.defl=50
    //% op.defl=CompareOperator.Greater
    export function compareAttention(op: CompareOperator, threshold: number): boolean {
        let value = getAttention()
        
        switch (op) {
            case CompareOperator.Greater:
                return value > threshold
            case CompareOperator.Less:
                return value < threshold
            case CompareOperator.Equal:
                return value == threshold
            default:
                return false
        }
    }
}
