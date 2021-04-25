import { RespliceActorFactory } from "../RespliceActorFactory";
import { RespliceGCPActor } from "./RespliceGCPActor";

export class RespliceAWSActorFactory extends RespliceActorFactory {

    constructor() {
        super()
    }

    createActor(): RespliceGCPActor {
        //TODO: Implement
        return new RespliceGCPActor();
    }
}