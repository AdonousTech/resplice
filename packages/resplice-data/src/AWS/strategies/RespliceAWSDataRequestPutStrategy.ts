import { RespliceAWSDataRequestStrategy } from "../RespliceAWSDataRequestStrategy";

export class RespliceAWSDataRequestPutStrategy extends RespliceAWSDataRequestStrategy {
    instruction: string;

    constructor(instruction: string) {
        super();
        this.instruction = instruction;
    }
}