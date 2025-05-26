import {UnavailableGuild} from "./unavailableGuild";

export type UserRemovedFromGuild = Omit<UnavailableGuild, "id"> & { id: undefined | null };