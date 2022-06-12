import { useState } from 'react';

export type Kind = "all" | "default" | "blocking" | "throttle" | "debounce" | "transaction";

export interface Query {
  kind: Kind;
}

const kinds: Kind[] = ["all", "default", "blocking", "throttle", "debounce", "transaction"];

const isKind = (text: string | undefined): text is Kind => {
  return kinds.includes(text as unknown as any);
}

export const useShowButton = (): { kind: Kind } => {
  const instance = new URLSearchParams(location.search);
  const queryParams: Record<string, string> = {};
  for (const pair of instance.entries()) {
    queryParams[pair[0]] = pair[1];
  }
  const [kind] = useState(isKind(queryParams.kind) ? queryParams.kind : "all");
  return {
    kind,
  }
}