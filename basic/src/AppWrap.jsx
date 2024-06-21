import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          name='golden'
          size={200}
        />
        <p>Hi ~</p>
      </Navbar>

      <Navbar>
        <p>안녕 ~</p>
      </Navbar>
    </div>
  );
}


function Navbar({children}) {
  return (
    <header style={{backgroundColor: 'tomato'}}>
      {children}
    </header>
  );
}

function Avatar({image, name, size}) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{borderRadius: '50%'}}
      />
    </div>
  )
}