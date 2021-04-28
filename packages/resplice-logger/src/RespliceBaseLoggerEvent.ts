import { RespliceBaseActor } from '@adonoustech/resplice-core';
export abstract class RespliceBaseLoggerEvent {
    eventType: 'Auth' | 'Error';
    internalCode: string;
    explanation: string;
    actor: RespliceBaseActor
}