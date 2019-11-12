import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StagedParticipant from './StagedParticipant';


describe('Staged Participant', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StagedParticipant name="NAME"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StagedParticipant name="NAME"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

 
});