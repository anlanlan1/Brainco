//% color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco {

    /**
     * 6种比较运算符下拉菜单
     */
    export enum CompareOperator {
        //% block="="
        Equal = 1,
        //% block="≠"
        NotEqual = 2,
        //% block="<"
        Less = 3,
        //% block="≤"
        LessOrEqual = 4,
        //% block=">"
        Greater = 5,
        //% block="≥"
        GreaterOrEqual = 6
    }

    /**
     * 获取当前的专注力数值（椭圆形积木）
     */
    //% block="专注力" blockId="GetAttention"
    export function getAttention(): number {
        serial.setRxBufferSize(1)
        return serial.readBuffer(1)[0]
    }

    /**
     * 判断专注力是否符合条件（菱形/布尔积木）
     */
    //% block="专注力 %op %threshold" blockId="CompareAttention"
    //% threshold.min=0 threshold.max=100 threshold.defl=50
    //% op.defl=CompareOperator.GreaterOrEqual
    export function compareAttention(op: CompareOperator, threshold: number): boolean {
        let value = getAttention()
        
        switch (op) {
            case CompareOperator.Equal:
                return value == threshold
            case CompareOperator.NotEqual:
                return value != threshold
            case CompareOperator.Less:
                return value < threshold
            case CompareOperator.LessOrEqual:
                return value <= threshold
            case CompareOperator.Greater:
                return value > threshold
            case CompareOperator.GreaterOrEqual:
                return value >= threshold
            default:
                return false
        }
    }
}
