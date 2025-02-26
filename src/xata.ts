// Generated by Xata Codegen 0.23.2. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "shared_webnotes",
    columns: [
      { name: "note", type: "text" },
      { name: "slug", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type SharedWebnotes = InferredTypes["shared_webnotes"];
export type SharedWebnotesRecord = SharedWebnotes & XataRecord;

export type DatabaseSchema = {
  shared_webnotes: SharedWebnotesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Ishaan-Bedi-s-workspace-tbb9k6.us-west-2.xata.sh/db/webnotes",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
