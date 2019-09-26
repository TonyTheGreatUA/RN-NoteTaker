/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import app from './app/index';

AppRegistry.registerComponent(appName, () => app);
export default app;
