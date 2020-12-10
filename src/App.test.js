import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from 'history';
import { Router } from "react-router";

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  
  expect(history.location.pathname).toBe("/");
})
