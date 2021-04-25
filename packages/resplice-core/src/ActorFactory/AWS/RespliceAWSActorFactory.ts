import { RespliceActorFactory } from "../RespliceActorFactory";
import { RespliceAWSActor } from "./RespliceAWSActor";

export class RespliceAWSActorFactory extends RespliceActorFactory {

    constructor() {
        super()
    }

    createActor(): RespliceAWSActor {
        //TODO: Implement
        return new RespliceAWSActor();
    }
}