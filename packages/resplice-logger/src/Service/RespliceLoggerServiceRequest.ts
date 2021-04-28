import { RespliceLoggerServiceBasePayload } from "./RespliceLoggerServiceBasePayload";

export class RespliceLoggerServiceRequest {
    kind: string;
    payload: RespliceLoggerServiceBasePayload

    constructor(payload: RespliceLoggerServiceBasePayload) {
        this.kind = 'RespliceLoggerServiceRequest';
        this.payload = payload;
    }
}