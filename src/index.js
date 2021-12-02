import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import store from './store';
import App from './App';

import './index.css';

Sentry.init({
    dsn: "https://1f2906f842e1445b8ca4da37a9bfbc60@o1081431.ingest.sentry.io/6090191",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
