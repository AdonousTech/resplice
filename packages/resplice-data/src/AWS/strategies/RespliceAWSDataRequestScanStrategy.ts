import { RespliceAWSDataRequestStrategy } from "../RespliceAWSDataRequestStrategy";

export class RespliceAWSDataRequestScanStrategy extends RespliceAWSDataRequestStrategy {
    instruction: string;

    constructor(instruction: string) {
        super();
        this.instruction = instruction;
    }
}