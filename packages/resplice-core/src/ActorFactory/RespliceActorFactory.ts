import { RespliceBaseActor } from './RespliceBaseActor';

export abstract class RespliceActorFactory {
    abstract createActor(): RespliceBaseActor
}