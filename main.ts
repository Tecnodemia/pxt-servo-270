/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100 icon="\uf14e"
namespace Servo270 {

    /**
     * Pines permitidos: P0, P1 o P2
     */
    export enum ServoPin {
        //% block="P0"
        P0 = AnalogPin.P0,
        //% block="P1"
        P1 = AnalogPin.P1,
        //% block="P2"
        P2 = AnalogPin.P2
    }

    /**
     * Establece el ángulo del servo (0° a 270°)
     * @param pin uno de los pines P0, P1 o P2
     * @param angle ángulo de 0 a 270 grados
     */
    //% block="Servo 270 en %pin|establecer ángulo a %angle grados"
    //% angle.min=0 angle.max=270
    //% angle.defl=90
    //% pin.defl=ServoPin.P2
    export function setServoAngle(pin: ServoPin, angle: number): void {
        let pulse = pins.map(angle, 0, 270, 500, 2500);
        pins.servoSetPulse(pin, pulse);
    }
}