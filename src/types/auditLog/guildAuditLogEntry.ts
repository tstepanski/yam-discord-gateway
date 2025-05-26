import {AuditLogEntry} from "./auditLogEntry";
import {Snowflake} from "../general";
import {Event} from "./event";

export type GuildAuditLogEntry<T extends Event> = AuditLogEntry<T> & { guild_id: Snowflake };
