import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantsList';


describe('Participant List', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

 
});