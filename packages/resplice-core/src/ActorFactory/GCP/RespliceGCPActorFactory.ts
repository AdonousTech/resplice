import { RespliceActorFactory } from "../RespliceActorFactory";
import { RespliceGCPActor } from "./RespliceGCPActor";

export class RespliceGCPActorFactory extends RespliceActorFactory {

    constructor() {
        super()
    }

    createActor(): RespliceGCPActor {
        //TODO: Implement
        return new RespliceGCPActor();
    }
}