import { IOIDCAddressClaim } from "./interfaces/IOIDCAddressClaim";

export abstract class RespliceBaseActor {

    sub: string | undefined;
    name: string | undefined;
    given_name: string | undefined;
    family_name: string | undefined;
    middle_name: string | undefined;
    nickname: string | undefined;
    preferred_username: string | undefined;
    profile: string | undefined;
    picture: string | undefined;
    website: string | undefined;
    email: string | undefined;
    email_verified: boolean | undefined;
    gender: string | undefined;
    birthdate: string | undefined;
    zoneinfo: string | undefined;
    locale: string | undefined;
    phone_number: string | undefined;
    phone_number_verified: boolean | undefined;
    address: IOIDCAddressClaim | undefined;
}