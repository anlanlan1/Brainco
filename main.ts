//%color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco{
    export enum value_level{
        /**
         * Attention greater than 35
         */
        //% block="low"
        low = 35,
        /**
         * Attention greater than 50
         */
        //% block="middle"
        middle = 50,
        /**
         * Attention greater than 65
         */
        //% block="high"
        high = 65
    }
    
    /**
    * Low:Attention greater than 35,Middle:Attention greater than 50,High:Attention greater than 65.
    */
    //% block="Attention > %level" blockId="GetAttentionValue"
    export function get_Attention_Value(level:value_level):boolean {
        let value = 0
        serial.setRxBufferSize(1)
        let buf = serial.readBuffer(1)
        if(buf.length > 0){
            value = buf[0]
        }
        switch (level) {
            case value_level.low:
                return value > value_level.low
            case value_level.middle:
                return value > value_level.middle
            case value_level.high:
                return value > value_level.high
            default:
                return false
        }
    }

    /**
     * Attention > 自定义阈值
     */
    //% block="Attention > %threshold" blockId="GetAttentionCustom"
    //% threshold.min=0 threshold.max=255 threshold.defl=50
    export function get_Attention_Custom(threshold: number): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        let buf = serial.readBuffer(1)
        if(buf.length > 0){
            value = buf[0]
        }
        return value > threshold
    }
}
