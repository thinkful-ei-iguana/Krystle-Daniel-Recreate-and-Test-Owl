import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';

describe('Participant component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Participant 
          name="name" 
          avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
          inSession="true"
          onStage="false"/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Participant 
          name="name" 
          avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
          inSession="true"
          onStage="true"/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Participant 
          name="name" 
          avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
          inSession="false"
          onStage="false"/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
  it('renders the UI as expected when in session but not on stage', () => {
    const tree = renderer
      .create(<Participant 
        name="name" 
        avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
        inSession="true"
        onStage="false"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected when on stage', () => {
    const tree = renderer
      .create(<Participant 
        name="name" 
        avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
        inSession="true"
        onStage="true"/>,)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  it('renders the UI as expected when not present', () => {
    const tree = renderer
      .create(<Participant 
        name="name" 
        avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1"
        inSession="false"
        onStage="false"/>,)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});