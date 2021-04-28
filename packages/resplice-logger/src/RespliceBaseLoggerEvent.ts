import { RespliceBaseActor } from '@adonoustech/resplice-core';
export abstract class RespliceBaseLoggerEvent {
    eventType: 'Auth' | 'Error' | undefined;
    internalCode: string | undefined;
    explanation: string | undefined;
    actor: RespliceBaseActor | undefined;
    timestamp: string | undefined;
}