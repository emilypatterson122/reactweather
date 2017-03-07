var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>I've built this for The Complete React Web App Developer Course!</p>
      <p>Here are some of the tools I've used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JS framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This was the API used to retrieve weather info based on location.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
