import type { ApolloClient } from "@apollo/client/core";
// import { getContext, setContext } from "svelte";

// const CLIENT = typeof Symbol !== "undefined" ? Symbol("client") : "@@client";
let clientInstance: ApolloClient<any>;

export function getClient<TCache = any>(): ApolloClient<TCache> {
	const client = clientInstance;

	if (!client) {
		throw new Error(
			"ApolloClient has not been set yet, use setClient(new ApolloClient({ ... })) to define it"
		);
	}

	return client as ApolloClient<TCache>;
}

export function setClient<TCache = any>(client: ApolloClient<TCache>): void {
	clientInstance = client;
	// setContext(CLIENT, client);
}
