import { RespliceActorFactory } from "../RespliceActorFactory";
import { RespliceAzureActor } from "./RespliceAzureActor";

export class RespliceAzureActorFactory extends RespliceActorFactory {

    constructor() {
        super()
    }

    createActor(): RespliceAzureActor {
        //TODO: Implement
        return new RespliceAzureActor();
    }
}