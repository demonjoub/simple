import React from 'react';
import Colors from './Colors';
import Dimension from './Dimension';
import Styles from './Styles'

class App extends React.Component {
  constructor(props) {
    super(props);

    // class 
    this.redColors = new Colors();
    this.redColors.set('red');
    // write color red 
    console.log(this.redColors.get())
    this.pinkColors = new Colors();
    this.pinkColors.set('pink');
    // write color pick 
    console.log(this.pinkColors.get());
    
    // class prototype
    this.dimension = new Dimension();
    console.log(this.dimension.getWidth())
    this.dimension.setWidth(200)
    console.log(this.dimension.getWidth())

    // object class 
    const _height = Styles.height(200)
    console.log(_height)
    const _width = Styles.widht(200)
    console.log(_width)
  }

  render() {
    return (
        <div style={{ width: 20, height: 20, background: 'red' }}></div>
    );
  }
}

export default App
