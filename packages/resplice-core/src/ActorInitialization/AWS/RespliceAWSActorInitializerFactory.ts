import { RespliceAWSActor } from '../../ActorFactory/AWS/RespliceAWSActor';
import { RespliceActorInitializerFactory } from '../RespliceActorInitializerFactory';

export class RespliceAWSActorInitializerFactory extends RespliceActorInitializerFactory {
    constructor(actor: RespliceAWSActor) {
        super(actor)
    }
}