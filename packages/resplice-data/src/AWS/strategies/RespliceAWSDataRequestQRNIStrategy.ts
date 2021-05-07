import { RespliceAWSDataRequestStrategy } from "../RespliceAWSDataRequestStrategy";

export class RespliceAWSDataRequestQRNIStrategy extends RespliceAWSDataRequestStrategy {
    instruction: string;

    constructor(instruction: string) {
        super();
        this.instruction = instruction;
    }
}