import { css } from 'emotion';

export const tooltip = css`
  display: inline;
  position: relative;
  font-size: 12px;
  font-family: var(--font-family);
  margin: 0 0 0 16px;

  :after {
    background-color: var(--deep-squid-ink);
    border-radius: 2px;
    bottom: 46px;
    color: var(--white);
    content: attr(data-text);
    text-decoration: none;
    padding: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    white-space: nowrap;
    opacity: 0;
    transition: all .3s ease-in-out;
  }
  
  :before {
    border: solid;
    border-color: var(--deep-squid-ink) transparent transparent transparent;
    border-width: 5px;
    bottom: 36px;
    content:"";
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    font-size: 14px;
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  :hover:after {
    opacity: 1;
    transition-delay: 1s;
  }

  :hover:before {
    opacity: 1;
    transition-delay: 1s;
  }
`;

export const autoShowTooltip = css`
  :after {
    opacity: 1;
    transition-delay: 1s;
  }

  :before {
    opacity: 1;
    transition-delay: 1s;
  }
`;