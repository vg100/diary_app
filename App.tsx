import 'react-native-gesture-handler';
import * as React from 'react';
import Navigator from './src/utils/navigations/Navigator';
import Reacotron from 'reactotron-react-native';
import {Provider} from 'react-redux';
import Store from './src/redux/reducers';
interface State {}

interface Props {}
export class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.configureReactotron();
    (console as any).tron = Reacotron;
  }
  configureReactotron() {
    Reacotron.clear();
    return Reacotron.configure({
      host: '192.168.29.24',
      port: 9090,
      name: 'ReactNativeCourse',
    }).connect();
  }
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}
