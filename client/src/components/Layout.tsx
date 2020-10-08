import React from 'react';

const Page: React.FunctionComponent = ({ children }) => <div className={'page'}>{children}</div>;

const Header: React.FunctionComponent = ({ children }) => <div className={'header'}>{children}</div>;

const Sidebar: React.FunctionComponent = ({ children }) => <div className={'sidebar'}>{children}</div>;

const Content: React.FunctionComponent = ({ children }) => <div className={'content'}>{children}</div>;

const Footer: React.FunctionComponent = ({ children }) => <div className={'footer'}>{children}</div>;

export { Page, Header, Sidebar, Content, Footer };
