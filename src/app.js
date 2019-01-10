import React, {Component} from 'react';
import {RadiumStarterRoot, Button} from 'radium-starter';

import Modal from '@medmain/react-modal';

const modal = new Modal();

class App extends Component {
  async start() {
    const result = await modal.confirm(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl augue, condimentum vel feugiat vel, ullamcorper vitae nunc. Nulla facilisi. Praesent porta magna convallis vestibulum luctus. Integer lacinia, purus eget condimentum porta, mauris sem molestie purus, sit amet ultricies eros nisl sed tortor. Morbi sed rutrum mauris. Suspendisse orci urna, dapibus ut metus quis, scelerisque bibendum magna. Phasellus in nunc a elit ornare mattis. Quisque ultrices urna nisi. Sed eu pellentesque nisl, nec convallis massa. Etiam vitae turpis risus. Proin varius suscipit dui, id rhoncus mi sagittis sed. In rhoncus lacus velit, vel placerat lorem convallis quis. Duis ornare neque tortor, porttitor consectetur tellus cursus vitae. In vulputate porta libero id blandit. Duis fermentum sed sem et efficitur. Suspendisse potenti.',
      {
        title: 'Warning!',
        width: '700px',
        okButton: {
          onClick: async ({close}) => {
            const okay = await modal.confirm('Are you sure?');
            if (okay) {
              close(true);
            }
          }
        }
      }
    );
    // const result = await modal.dialog({
    //   render: ({close}) => <button onClick={() => close(true)}>Close</button>
    // });
    console.log(result);
  }

  render() {
    return (
      <RadiumStarterRoot>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Button onClick={this.start}>Start</Button>
          <Button onClick={async () => {
            const answer = await modal.dialog({
              title: 'Please confirm',
              message: 'Is it OK?',
              buttons: [{value: 1, title: 'Option 1'}, {value: 2, title: 'Option 2', isDefault: true}]
            });
            console.info(answer)
          }}>Dialog</Button>
          <Button onClick={async () => {
            const answer = await modal.alert('It was great!')
            console.info(answer)
          }}>Alert</Button>
          <Button onClick={async () => {
            const answer = await modal.confirm('Are you really sure?')
            console.info(answer)
          }}>Confirm</Button>
        </div>
        {modal.createElement()}
      </RadiumStarterRoot>
    );
  }
}

export default App;
