import React from 'react';

// Define the first context
const FirstContext = React.createContext();
const SecondContext = React.createContext();

// Component that consumes both contexts
const MyComponent = () => {
  return (
    <div>
      <FirstContext.Consumer>
        {firstContextValue => (
          <SecondContext.Consumer>
            {secondContextValue => (
              <div>
                <h1>First Context Value: {firstContextValue}</h1>
                <h1>Second Context Value: {secondContextValue}</h1>
              </div>
            )}
          </SecondContext.Consumer>
        )}
      </FirstContext.Consumer>
    </div>
  );
};

// Usage of the contexts and the component
const Values = () => {
  const firstContextValue = 'First Context!';
  const secondContextValue = 'Second Context!';

  return (
    <FirstContext.Provider value={firstContextValue}>
      <SecondContext.Provider value={secondContextValue}>
        <MyComponent />
      </SecondContext.Provider>
    </FirstContext.Provider>
  );
};

export default Values;