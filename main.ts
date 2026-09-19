//% color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco {

    /**
     * 判断当前专注力是否大于指定阈值。
     * 阈值可以在积木中手动输入，范围 0~100，默认 50。
     */
    //% block="Attention > %threshold" blockId="GetAttentionValue"
    //% threshold.min=0 threshold.max=100 threshold.defl=50
    export function get_Attention_Value(threshold: number): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]

        return value > threshold
    }
}
