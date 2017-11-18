import { h, Component } from 'preact';

// tslint:disable-next-line:no-var-requires
const style = require('./style')

export default class Home extends Component<{},{}> {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
