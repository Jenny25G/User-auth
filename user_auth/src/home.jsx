import React from 'react'
import './home.css'

function Home() {
  return (
<div className="App">
      <header className="App-header">
        <h1>Welcome to My Awesome Homepage!</h1>
        <p>Discover amazing things here.</p>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>What Makes Us Awesome?</h2>
          <p>We provide top-notch services and deliver exceptional results.</p>
        </section>
        <section className="App-section">
          <h2>Our Services</h2>
          <ul>
            <li>Web Dev </li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>Contact us: contact@example.com</p>
      </footer>
    </div>
  )
}

export default Home;