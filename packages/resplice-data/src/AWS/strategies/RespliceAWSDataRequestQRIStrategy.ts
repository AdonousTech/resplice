import { RespliceAWSDataRequestStrategy } from "../RespliceAWSDataRequestStrategy";

export class RespliceAWSDataRequestQRIStrategy extends RespliceAWSDataRequestStrategy {
    instruction: string;

    constructor(instruction: string) {
        super();
        this.instruction = instruction;
    }
}