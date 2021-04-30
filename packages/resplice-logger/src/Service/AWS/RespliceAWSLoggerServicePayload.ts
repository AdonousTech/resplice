import { RespliceBaseLoggerEvent } from "../../RespliceBaseLoggerEvent";
import { RespliceLoggerServiceBasePayload } from "../RespliceLoggerServiceBasePayload";

export class RespliceAWSLoggerServicePayload extends RespliceLoggerServiceBasePayload {

    constructor(event: RespliceBaseLoggerEvent) {
        super();
        this.loggerEvent = event;
    }

    createPayload(): RespliceAWSLoggerServicePayload {
        return new RespliceAWSLoggerServicePayload(this.loggerEvent);
    }
}