import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import '../styles.css';

export function render() {
  return renderToString(
    <StaticRouter basename="/cv" location="/">
      <App />
    </StaticRouter>,
  );
}
