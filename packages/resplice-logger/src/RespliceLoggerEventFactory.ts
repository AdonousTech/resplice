import { RespliceBaseLoggerEvent } from "./RespliceBaseLoggerEvent";

export abstract class RespliceLoggerEventFactory {
    abstract createLoggerEvent(loggerEventType: string): RespliceBaseLoggerEvent
}