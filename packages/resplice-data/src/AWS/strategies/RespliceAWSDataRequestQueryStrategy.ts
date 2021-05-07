import { RespliceAWSDataRequestStrategy } from "../RespliceAWSDataRequestStrategy";

export class RespliceAWSDataRequestQueryStrategy extends RespliceAWSDataRequestStrategy {
    instruction: string;

    constructor(instruction: string) {
        super();
        this.instruction = instruction;
    }
}