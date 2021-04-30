import { RespliceBaseLoggerEvent } from "../RespliceBaseLoggerEvent";
import { RespliceLoggerEventFactory } from "../RespliceLoggerEventFactory";
import { RespliceLoggerAWSAuthEvent } from "./RespliceLoggerAWSAuthEvent";
import { RespliceLoggerAWSErrorEvent } from "./RespliceLoggerAWSErrorEvent";

export class RespliceAWSLoggerEventFactory extends RespliceLoggerEventFactory {
    createLoggerEvent(loggerEventType: string): RespliceBaseLoggerEvent {
        
        let created: RespliceBaseLoggerEvent;

        switch (loggerEventType) {
            case 'Auth': 
                created = new RespliceLoggerAWSAuthEvent();
                break;
            case 'Error':
                created = new RespliceLoggerAWSErrorEvent();
                break;
            default:
                throw new Error(`Logger event type ${loggerEventType} not implemented!`);
        }

        return created;
    }
}