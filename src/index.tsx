import { render } from 'solid-js/web';
import { Router } from "@solidjs/router"

import App from "./app";
import {Routing} from "./routing";

render(() => <Router><App /><Routing/></Router>, document.getElementById('root') as HTMLElement);
