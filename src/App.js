import React from "react";
// import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import Root from './routes';

// const connector = new AppSearchAPIConnector({
//   searchKey,ssss
//   engineName,
//   hostIdentifier,
//   endpointBase
// });


export default function App() {
  return (
    <Root />
  );
}
