import { RespliceBaseLoggerEvent } from "../RespliceBaseLoggerEvent";

export abstract class RespliceLoggerServiceBasePayload {

    loggerEvent: RespliceBaseLoggerEvent;

    abstract createPayload(): RespliceLoggerServiceBasePayload
}