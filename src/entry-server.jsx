import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import '../styles.css';

export function render() {
  return renderToString(
    <StaticRouter basename="/cv" location="/cv/">
      <App />
    </StaticRouter>,
  );
}
