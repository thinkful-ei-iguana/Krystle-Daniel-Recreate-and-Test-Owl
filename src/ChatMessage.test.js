import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessage from './ChatMessage';

const participants = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }
];

describe('ChatMessage component', () => {
    it('renders thumbsup without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='thumbs-up'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders thumbsdown without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='thumbs-down'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders raise-hand without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='raise-hand'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders message without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='message'
          message='Hi'
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders clap without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='clap'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders join without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='join'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders leave without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='leave'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders join-stage without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='join-stage'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders leave-stage without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <ChatMessage 
          participants={participants}
          participantId={0}
          type='leave-stage'
          message=''
          time='1548852646559'
          timestamp='1548852484247'
        />, div);
      ReactDOM.unmountComponentAtNode(div);
    });


  it('renders thumbs-up as expected', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='thumbs-up'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders thumbs-down as expected ', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='thumbs-down'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders raise-hand as expected ', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='raise-hand'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders message as expected', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='message'
        message='Hi'
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders clap as expected', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='clap'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders join as expected ', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='join'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders leave as expected', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='leave'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders join-stage as expected ', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='join-stage'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />).toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders leave-stage as expected', () => {
    const tree = renderer
      .create(<ChatMessage 
        participants={participants}
        participantId={0}
        type='leave-stage'
        message=''
        time='1548852646559'
        timestamp='1548852484247'
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});